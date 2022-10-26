import { transparentize } from "polished";
import styled from "styled-components";

export const Wrapper = styled.button<{
  variant: "primary" | "danger" | "text";
}>`
  display: flex;
  align-items: center;

  padding: 4px 8px;
  border: 1px solid ${(props) => THEME[props.variant].bg};

  color: ${(props) => THEME[props.variant].color};
  background: ${(props) => THEME[props.variant].bg};

  cursor: pointer;

  &:hover,
  &:focus {
    ${(props) => THEME[props.variant].onHover}
  }

  &:disabled {
    color: ${(props) => THEME[props.variant].disabled.color};
    background: ${(props) => THEME[props.variant].disabled.bg};
    border-color: transparent;
    opacity: 0.5;

    pointer-events: none;
  }
`;

const COLORS = {
  primary: "#0099FF",
  red: "#F84735",
  foreground: "#274060",
};

const THEME = {
  primary: {
    bg: "#0099FF",
    color: "#fff",
    onHover: `
      box-shadow: 0 3px 6px rgba(0,0,0,0.2)
    `,
    disabled: {
      color: "#fff",
      bg: transparentize(0.44, COLORS.primary),
    },
  },
  danger: {
    bg: "#F84735",
    color: "#fff",
    onHover: `
      box-shadow: 0 3px 6px rgba(0,0,0,0.2)
    `,
    disabled: {
      color: COLORS.red,
      bg: transparentize(0.75, COLORS.red),
    },
  },
  text: {
    bg: "transparent",
    color: "#274060",
    onHover: `
      border-color: #274060
    `,
    disabled: {
      color: "#274060",
      bg: transparentize(0.44, "#508AC9"),
    },
  },
};
