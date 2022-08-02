import { transparentize } from "polished";
import styled from "styled-components";

export const Wrapper = styled.a`
  display: flex;
  gap: 1.5rem;
  padding: 1rem;
  border: 1px solid ${transparentize(0.9, "#274060")};
  color: #274060;
  box-sizing: content-box;

  &:focus,
  &:hover {
    outline: none;
    box-shadow: 0 0 0 5px #09f;
    border-color: #09f;
  }
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Name = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
`;

export const Description = styled.p`
  font-size: 0.75rem;
`;
