import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import type { ReactNode } from "react";

export default function BasicDataGrid({
  header,
  data,
  rowKey = "cargo",
}: {
  header: { key: string; label: string }[];
  data: { [key: string]: string | number | ReactNode }[];
  rowKey?: string;
}) {
  return (
    <TableContainer
      sx={{
        flexGrow: 1,
        width: "100%",
        height: 0,
        minWidth: "max-content",
      }}
    >
      <Table
        stickyHeader
        size="small"
        sx={{
          tableLayout: "auto",
          minWidth: "max-content",
          width: "max-content",
        }}
      >
        <TableHead>
          <TableRow>
            {header.map((col) => (
              <TableCell
                key={col.key}
                sx={{
                  minWidth: "max-content",
                  whiteSpace: "nowrap",
                }}
              >
                {col.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, idx) => (
            <TableRow key={row[rowKey]?.toString() ?? idx}>
              {header.map((col) => (
                <TableCell
                  key={col.key}
                  sx={{
                    minWidth: "max-content",
                    whiteSpace: "nowrap",
                  }}
                >
                  {row[col.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
