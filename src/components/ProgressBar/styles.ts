import { transparentize } from "polished";
import styled from "styled-components";

const COLORS = {
  primary: "#0099FF",
  secondary: "#274060",
};

export const Wrapper = styled.div<{ width?: number }>`
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
  height: 24px;
  background: ${transparentize(0.85, COLORS.secondary)};
  position: relative;
  color: #fff;
`;

export const Progress = styled.div<{
  background: "primary" | "secondary";
  progress: number;
}>`
  background: ${(props) => COLORS[props.background]};
  width: ${(props) => props.progress}%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 14px;
  text-transform: lowercase;
  overflow: hidden;
  white-space: nowrap;
  ${(props) => (props.progress > 0 ? "padding-left: 4px;" : "")}
  transition: .25s ease;
  z-index: 2;
  position: relative;
`;

export const TextShadow = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  color: #274060;
  display: flex;
  align-items: center;
  font-size: 14px;
  text-transform: lowercase;
  overflow: hidden;
  padding-left: 4px;
  white-space: nowrap;
`;
