import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";
import Icon from "@mdi/react";
import { transparentize } from "polished";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { TableInstance } from "react-table";
import { NoData } from "../NoData";
import {
  Body,
  BodyCell,
  BodyRow,
  Heading,
  HeadingCell,
  HeadingRow,
  TablePagination,
  Wrapper,
} from "./styles";

interface TableProps<T extends Object> {
  instance: TableInstance<T>;
  onPaginate?: (newPage: number) => void;
}

export function Table<T extends Object>({
  instance,
  onPaginate,
}: TableProps<T>) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    pageCount,
    gotoPage,
    state: { pageIndex },
  } = instance;

  useEffect(() => {
    onPaginate && onPaginate(pageIndex);
  }, [onPaginate, pageIndex]);

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

      <TablePagination>
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={(page) => gotoPage(page.selected)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={4}
          previousLabel={<Icon path={mdiChevronLeft} size="16px" />}
          nextLabel={<Icon path={mdiChevronRight} size="16px" />}
        />
      </TablePagination>
    </>
  );
}
