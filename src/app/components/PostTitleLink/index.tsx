import styled from "styled-components";

export const PostTitleLink = styled.a`
  text-decoration: none;
  color: #274060;
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  &:hover,
  &:focus {
    color: #09f;
    text-decoration: underline;
  }
`;
