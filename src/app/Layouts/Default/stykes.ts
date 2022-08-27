import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 auto;

  width: 1200px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 64px;
`;

export const Main = styled.main`
  display: grid;
  grid-template-columns: 214px 680px 214px;
  gap: 16px;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding-right: 32px;
`;

export const FeaturedContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Aside = styled.aside``;
