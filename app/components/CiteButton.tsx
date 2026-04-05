"use client";

import {useState} from "react";
import {Button, CodeSnippet, Modal, Tab, TabList, TabPanel, TabPanels, Tabs} from "@carbon/react";
import type {JsonPapers} from "@/type/data";

type Props = {
  paper: JsonPapers;
};

const generateBibTeX = (paper: JsonPapers): string => {
  const lastName = (paper.authors[0] ?? "").split(" ").pop()?.toLowerCase() ?? "unknown";
  const titleWord = paper.title.split(/\s+/)[0].toLowerCase().replace(/[^a-z]/g, "");
  const key = `${lastName}${paper.year}${titleWord}`;

  const lines = [
    `@inproceedings{${key},`,
    `  author    = {${paper.authors.join(" and ")}},`,
    `  title     = {{${paper.title}}},`,
  ];
  if (paper.venue) lines.push(`  booktitle = {${paper.venue}},`);
  lines.push(`  year      = {${paper.year}},`);
  lines.push(`  month     = {${paper.month}},`);
  if (paper.link_href) lines.push(`  url       = {${paper.link_href}},`);
  lines.push(`}`);

  return lines.join("\n");
};

const generateNatural = (paper: JsonPapers): string => {
  const authors = paper.authors.join(", ");
  const yearMonth = `${paper.year}-${paper.month.toString().padStart(2, "0")}`;
  const parts: string[] = [authors, `"${paper.title}"`];
  if (paper.venue) parts.push(paper.venue);
  parts.push(yearMonth);
  return parts.join(". ") + ".";
};

export default function CiteButton({paper}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button kind="ghost" size="sm" onClick={() => setOpen(true)}>
        Cite
      </Button>
      <Modal
        open={open}
        onRequestClose={() => setOpen(false)}
        modalHeading={paper.title}
        passiveModal
        size="md"
      >
        <Tabs>
          <TabList aria-label="Citation format">
            <Tab>BibTeX</Tab>
            <Tab>Text</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <CodeSnippet type="multi" feedback="Copied!">
                {generateBibTeX(paper)}
              </CodeSnippet>
            </TabPanel>
            <TabPanel>
              <CodeSnippet type="multi" feedback="Copied!">
                {generateNatural(paper)}
              </CodeSnippet>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Modal>
    </>
  );
}
