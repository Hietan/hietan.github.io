import type {DataTable} from "@/type/table";

const dataResearchInterest: DataTable = {
  header: ["Research Area", "Keywords", "Research Topics"],
  body: [
    ["Software Engineering, Programming Language, Computer Science"],
    ["AI (Artificial Intelligence), LLM (Large Language Model), Software Library, Breaking Change"],
    [
      <ul key="research-topics-list">
        <li>AI oriented Programming Language (AIoPL)</li>
        <li>Breaking Change Detection using Dynamic Analysis</li>
        <li>Vulnerability Detection using LLMs</li>
        <li>Analyzing Migration Guides in Software Libraries</li>
      </ul>,
    ],
  ],
};

export default dataResearchInterest;
