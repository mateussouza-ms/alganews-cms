import { Profile } from "../../components/Profile";
import { Wrapper } from "./styles";

export function EditorsList() {
  return (
    <Wrapper>
      <Profile
        editorId={1}
        name="Mateus Souza"
        description="Editor há 5 anos"
      />
      <Profile
        editorId={2}
        name="João da Silva"
        description="Editor há 2 anos"
      />
      <Profile
        editorId={3}
        name="Maria da Piedade"
        description="Editor há 4 anos"
      />
      <Profile
        editorId={4}
        name="José Augusto"
        description="Editor há 4 meses"
      />
      <Profile
        editorId={5}
        name="Marcus Paulo"
        description="Editor há 10 meses"
      />
    </Wrapper>
  );
}
