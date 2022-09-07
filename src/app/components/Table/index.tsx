import { transparentize } from "polished";
import { TableInstance } from "react-table";
import { NoData } from "../NoData";
import {
  Body,
  BodyCell,
  BodyRow,
  Heading,
  HeadingCell,
  HeadingRow,
  Wrapper,
} from "./styles";

interface TableProps<T extends Object> {
  instance: TableInstance<T>;
}

export function Table<T extends Object>({ instance }: TableProps<T>) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = instance;

  return (
    <>
      <Wrapper cellPadding={0} cellSpacing={0} {...getTableProps()}>
        <Heading>
          {headerGroups.map((headerGroup) => (
            <HeadingRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <HeadingCell {...column.getHeaderProps()}>
                  {column.render("Header")}
                </HeadingCell>
              ))}
            </HeadingRow>
          ))}
        </Heading>
        <Body {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <BodyRow {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <BodyCell {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </BodyCell>
                ))}
              </BodyRow>
            );
          })}
        </Body>
      </Wrapper>
      {!rows.length && (
        <div style={{ backgroundColor: transparentize(0.95, "#274060") }}>
          <NoData height={360} />
        </div>
      )}
    </>
  );
}
