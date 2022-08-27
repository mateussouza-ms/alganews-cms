import { Logo } from "../../components/Logo";
import { NavBar } from "../../components/NavBar";
import { SessionController } from "../../components/SessionController";
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
      <Header>
        <Logo />
      </Header>
      <Main>
        <Navigation>
          <NavBar />
        </Navigation>
        <FeaturedContent>{children}</FeaturedContent>
        <Aside>
          <SessionController
            name="Mateus Souza"
            description="editor há 5 anos"
          ></SessionController>
        </Aside>
      </Main>
    </Wrapper>
  );
}
