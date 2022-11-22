import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #f3f8fa;
  padding: 24px;
  border: 1px solid #ccc;
  width: 655px;
  display: flex;
  gap: 24px;
  flex-direction: column;
  max-height: 70vh;
  overflow-y: auto;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.05);
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;
`;

export const Image = styled.img`
  height: 240px;
  width: 100%;
  object-fit: cover;
`;

export const Content = styled.div``;
