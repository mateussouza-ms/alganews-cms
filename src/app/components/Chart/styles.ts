import styled from "styled-components";
import { transparentize } from "polished";

export const Wrapper = styled.div`
  text-align: center;
  border: 1px solid ${transparentize(0.9, "#274060")};
  padding: 20px;
  width: 640px;

  .title {
    margin-bottom: 16px;
  }
`;
