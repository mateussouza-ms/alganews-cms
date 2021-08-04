import styled from "styled-components";

export const StyledParagraph = styled.p<{ size: "default" | "small" }>`
  ${(props) => SIZES[props.size]}
`;

const SIZES = {
  default: {
    "font-size": "14px",
    "line-height": "25px",
  },
  small: {
    "font-size": "12px",
    "line-height": "20px",
  },
};
