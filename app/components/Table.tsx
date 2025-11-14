import type {ComponentProps} from "react";
import {
  Table as CarbonTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Theme,
} from "@carbon/react";

import type {DataTable} from "@/type/table";
import type {CarbonThemeName} from "@/type/carbon";

export type TableProps = ComponentProps<typeof CarbonTable> & {
  data: DataTable;
  theme?: CarbonThemeName | null;
};

const renderHeader = (header: DataTable["header"]) => {
  if (!header?.length) return null;

  return (
    <TableHead>
      <TableRow>
        {header.map((cell, index) => (
          <TableHeader key={index}>{cell}</TableHeader>
        ))}
      </TableRow>
    </TableHead>
  );
};

const renderBody = (body: DataTable["body"]) => (
  <TableBody>
    {body.map((row, rowIndex) => (
      <TableRow key={rowIndex}>
        {row.map((cell, cellIndex) => (
          <TableCell key={cellIndex}>{cell}</TableCell>
        ))}
      </TableRow>
    ))}
  </TableBody>
);

const TableComponent = ({data, theme = "g10", ...tableProps}: TableProps) => {
  const {header = [], body = []} = data ?? {};
  const table = (
    <CarbonTable {...tableProps}>
      {renderHeader(header)}
      {renderBody(body)}
    </CarbonTable>
  );

  if (!theme) return table;

  return <Theme theme={theme}>{table}</Theme>;
};

export default TableComponent;
