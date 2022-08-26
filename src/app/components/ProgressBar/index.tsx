import React from "react";
import { Progress, TextShadow, Wrapper } from "./styles";

interface ProgressBarProps {
  title: string;
  progress: number;
  theme: "primary" | "secondary";
  width?: number;
}

export function ProgressBar({
  title,
  theme,
  width,
  progress,
}: ProgressBarProps) {
  return (
    <Wrapper width={width}>
      <TextShadow>{title}</TextShadow>
      <Progress background={theme} progress={progress}>
        <span>{title}</span>
      </Progress>
    </Wrapper>
  );
}
