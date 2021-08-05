import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 373px;
  padding: 24px;
  gap: 16px;

  background: #f3f8fa;

  .message {
    display: flex;
    flex-direction: column;
    gap: 12px;
    color: #274060;
    font-weight: 500;

    h2 {
      font-size: 24px;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      line-clamp: 1;
      overflow: hidden;
    }

    p {
      font-size: 14px;
    }
  }
`;
