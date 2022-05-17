import React, { useEffect, useState } from "react";
import * as StyledCircleChart from "./styles";

interface CircleChartProps {
  size: number;
  progress: number;
  caption?: string;
  theme?: "default" | "primary";
  strokeWidth?: number;
}

export function CircleChart({
  size,
  progress,
  caption,
  theme,
  strokeWidth,
}: CircleChartProps) {
  function getThemeColor() {
    return theme === "primary" ? "#09f" : "#274060";
  }

  const THEME = getThemeColor();
  const STROKE_WIDTH = strokeWidth || 8;
  const STROKE_COLOR = THEME;

  const CENTER = size / 2;
  const RADIUS = CENTER - STROKE_WIDTH / 2;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

  const [offset, setOffset] = useState(CIRCUMFERENCE);

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * CIRCUMFERENCE;

    setOffset(progressOffset);
  }, [setOffset, CIRCUMFERENCE, progress, offset]);

  return (
    <StyledCircleChart.Wrapper>
      <StyledCircleChart.SvgWrapper style={{ width: size, height: size }}>
        <StyledCircleChart.Svg width={size} height={size}>
          <StyledCircleChart.CircleBackground
            cy={CENTER}
            cx={CENTER}
            r={RADIUS}
          />
          <StyledCircleChart.Circle
            cy={CENTER}
            cx={CENTER}
            r={RADIUS}
            fill="none"
            stroke={STROKE_COLOR}
            strokeWidth={STROKE_WIDTH}
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
          />
        </StyledCircleChart.Svg>

        <StyledCircleChart.Percentage style={{ color: THEME }}>
          {progress}%
        </StyledCircleChart.Percentage>
      </StyledCircleChart.SvgWrapper>

      {caption && (
        <StyledCircleChart.Caption>{caption}</StyledCircleChart.Caption>
      )}
    </StyledCircleChart.Wrapper>
  );
}
