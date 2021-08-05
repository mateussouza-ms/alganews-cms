import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 250px;
  padding: 24px;
  background: #f3f8fa;
  color: #274060;

  h2 {
    font-size: 18px;
    font-weight: 700;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    line-clamp: 1;
    overflow: hidden;
  }

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
`;
