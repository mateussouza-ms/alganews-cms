import {
  Aside,
  FeaturedContent,
  Header,
  Main,
  Navigation,
  Wrapper,
} from "./stykes";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Wrapper>
      <Header>Header</Header>
      <Main>
        <Navigation>NAv</Navigation>
        <FeaturedContent>{children}</FeaturedContent>
        <Aside>Aside</Aside>
      </Main>
    </Wrapper>
  );
}
