import styled from "styled-components";
import { Wrapper as Button } from "../Button/styles";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ImagePreview = styled.div<{ preview: string }>`
  height: 100%;

  background-image: url(${(props) => props.preview});
  background-position: center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImagePreviewWrapper = styled.div`
  background-color: #274060;
  height: 240px;

  ${Button} {
    display: none;

    height: 56px;
    background-color: #fff;
    border: none;
    color: #274060;
    font-size: 18px;
    font-weight: 500;
  }

  &:hover {
    ${ImagePreview} {
      opacity: 0.7;
    }

    ${Button} {
      display: flex;
    }
  }
`;

export const Label = styled.label`
  background-color: #09f;
  color: #fff;

  padding: 24px;

  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

export const Input = styled.input`
  display: none;
`;
