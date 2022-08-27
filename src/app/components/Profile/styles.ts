import styled from "styled-components";

export const Wrapper = styled.a`
  display: flex;
  gap: 24px;
  padding: 16px;
  border: 1px solid #ccc;
  color: #274060;
  box-sizing: content-box;
  cursor: pointer;
  transition: box-shadow 0.15s ease;

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
