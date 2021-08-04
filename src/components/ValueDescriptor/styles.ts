import styled from "styled-components";

export const Wrapper = styled.div<{ color: "primary" | "default" }>`
  display: flex;
  flex-direction: column;
  gap: 1px;

  .description {
    color: #274060;
    font-size: 12px;
    font-weight: 400;
  }

  .value,
  .currency {
    color: ${(props) => COLORS[props.color]};
    font-size: 18px;
    font-weight: 800;
  }

  .currency {
    font-weight: 400;
  }
`;

const COLORS = {
  primary: "#0099FF",
  default: "#274060",
};
