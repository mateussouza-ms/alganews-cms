import { transparentize } from "polished";
import styled from "styled-components";

export const Wrapper = styled.table`
  width: 100%;
  color: #274060;
  background: ${transparentize(0.95, "#274060")};
`;

export const Heading = styled.thead`
  background: ${transparentize(0.85, "#274060")};
`;

export const HeadingRow = styled.tr``;

export const HeadingCell = styled.th`
  height: 32px;
  font-size: 14px;
  padding: 0 8px;
`;

export const Body = styled.tbody``;

export const BodyRow = styled.tr``;

export const BodyCell = styled.td`
  height: 40px;
  font-size: 12px;
  font-weight: 500;
  padding: 0 8px;
`;

export const TablePagination = styled.div`
  display: flex;
  gap: 8px;

  ul {
    display: flex;
    list-style: none;
    gap: 8px;

    li {
      &.selected a,
      &.disabled a {
        background: #ccc;
        color: #222;
        pointer-events: none;
      }

      a {
        text-align: center;
        cursor: pointer;
        background: #09f;
        color: #fff;
        padding: 4px 8px;
        display: block;

        transition: 0.25s ease;

        &:hover,
        &:focus {
          box-shadow: 0 6px 6px rgba(0, 0, 0, 0.15);
          transform: translateY(-3px);
        }
      }
    }
  }
`;
