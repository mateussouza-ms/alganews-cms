import { transparentize } from "polished";
import styled from "styled-components";

export const Wrapper = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 56px;

  span.label {
    color: #274060;
    font-size: 14px;
    font-weight: 500;
  }

  input {
    height: 28px;
    padding-bottom: 6px;
    border: none;
    border-radius: 0;
    outline: none;
    border-bottom: 1px solid #274060;

    font-size: 18px;
    font-weight: 500;

    background: transparent;

    &::placeholder {
      color: ${transparentize(0.5, "#274060")};
    }
  }
`;
