import { confirm } from "../../../core/utils/confitm";
import { info } from "../../../core/utils/info";
import { Button } from "../Button";
import { Description, Name, Wrapper } from "./styles";

interface SessionControllerProps {
  name: string;
  description: string;
}

export function SessionController({
  name,
  description,
}: SessionControllerProps) {
  return (
    <Wrapper>
      <img
        src="https://images.unsplash.com/photo-1449322593469-9e30eb4f1a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="Imagem de perfil"
        height={47}
        width={47}
      />

      <Name>{name}</Name>
      <Description>{description}</Description>
      <Button
        label="Logout"
        variant="danger"
        onClick={() =>
          confirm({
            title: "Deseja sair?",
            onConfirm: () => {
              info({
                title: "Você foi deslogado",
                content: "Você será redirecionado para a página de login.",
              });
            },
          })
        }
      />
    </Wrapper>
  );
}
