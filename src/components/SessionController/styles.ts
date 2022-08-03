import { transparentize } from "polished";
import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid ${transparentize(0.9, "#274060")};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: #274060;
`;

export const Name = styled.h2`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
`;

export const Description = styled.span`
  font-size: 12px;
`;
