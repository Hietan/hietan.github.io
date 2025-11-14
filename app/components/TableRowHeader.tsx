import type {ComponentProps, ReactNode} from "react";
import {
  Table as CarbonTable,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Theme,
} from "@carbon/react";

import type {DataTable} from "@/type/table";
import type {CarbonThemeName} from "@/type/carbon";

export type TableRowHeaderProps = ComponentProps<typeof CarbonTable> & {
  data: DataTable;
  theme?: CarbonThemeName | null;
};

const renderBody = (header: DataTable["header"], body: DataTable["body"]) => {
  const hasRowHeaders = Boolean(header?.length);

  return (
    <TableBody>
      {body.map((row, rowIndex) => {
        const cells = [...row];
        let rowHeader: ReactNode = hasRowHeaders ? header[rowIndex] ?? "" : cells.shift();

        if (rowHeader === undefined || rowHeader === null) {
          rowHeader = "";
        }

        return (
          <TableRow key={rowIndex}>
            <TableHeader scope="row">{rowHeader}</TableHeader>
            {cells.map((cell, cellIndex) => (
              <TableCell key={cellIndex}>{cell}</TableCell>
            ))}
          </TableRow>
        );
      })}
    </TableBody>
  );
};

const TableRowHeader = ({data, theme = "g10", ...tableProps}: TableRowHeaderProps) => {
  const {header = [], body = []} = data ?? {};
  const table = <CarbonTable {...tableProps}>{renderBody(header, body)}</CarbonTable>;

  if (!theme) return table;

  return <Theme theme={theme}>{table}</Theme>;
};

export default TableRowHeader;
