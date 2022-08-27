import { Profile } from "../../components/Profile";
import { Wrapper } from "./styles";

export function EditorsList() {
  return (
    <Wrapper>
      <Profile name="Mateus Souza" description="Editor há 5 anos" />
      <Profile name="João da Silva" description="Editor há 2 anos" />
      <Profile name="Maria da Piedade" description="Editor há 4 anos" />
      <Profile name="José Augusto" description="Editor há 4 meses" />
      <Profile name="Marcus Paulo" description="Editor há 10 meses" />
    </Wrapper>
  );
}
