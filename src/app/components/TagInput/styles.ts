import styled from "styled-components";

export const Wrapper = styled.div`
  .ReactTags__selected {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }

  .ReactTags__tag {
    background: #09f;
    color: #fff;
    padding: 4px 8px;
    display: flex;
    align-items: center;
  }

  .ReactTags__remove {
    width: 24px;
    height: 1em;
    border: 0;
    color: #fff;
    background: transparent;
    cursor: pointer;
    font-size: 1.2em;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ReactTags__tagInput {
    flex-grow: 1;
  }

  .ReactTags__tagInputField {
    color: #274060;
    background: transparent;
    border-radius: 0;
    width: 100%;
    padding: 4px 0;
    font-size: 1em;
    font-family: "Lato", sans-serif;
    outline: none;
    border: 0;
    border-bottom: 1px solid #ccc;
  }
`;
