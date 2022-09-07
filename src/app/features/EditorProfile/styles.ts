import { transparentize } from "polished";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;

  width: 100%;

  border: 1px solid ${transparentize(0.8, "#274060")};
`;

export const EditorHeadline = styled.div`
  display: grid;
  align-items: center;
  gap: 8px 16px;
  grid-template-rows: 2;
  grid-template-columns: 48px auto;
  height: 48px;
`;

export const Avatar = styled.img`
  grid-row-start: 1;
  grid-row-end: 3;
  object-fit: contain;
  width: 48px;
  height: 48px;
`;

export const Name = styled.h1`
  font-size: 18px;
  font-weight: 400;
  grid-column-start: 2;
`;

export const Description = styled.span`
  font-size: 12px;
  grid-column-start: 2;
`;

export const Divisor = styled.div`
  border-bottom: 1px solid ${transparentize(0.9, "#274060")};
`;

export const EditorInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2;
  gap: 24px;
`;

export const EditorResume = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Biography = styled.p`
  font-size: 12px;
  line-height: 20px;
`;

export const Skills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const PersonalInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 0;

  > * {
    width: 100%;
  }

  & > :nth-child(1),
  & > :nth-child(2) {
    width: 50%;
  }
`;

export const EditorEarnings = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 24px;
`;
