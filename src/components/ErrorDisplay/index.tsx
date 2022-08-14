import { mdiAlert } from "@mdi/js";
import Icon from "@mdi/react";
import { Heading } from "../Typography/Heading";
import { Message, Wrapper } from "./styles";

interface ErrorDisplayProps {
  small?: boolean;
  title?: string;
  message?: string;
}

export function ErrorDisplay({ small, title, message }: ErrorDisplayProps) {
  return (
    <Wrapper>
      <Icon path={mdiAlert} size={small ? "24px" : "48px"} />
      <Heading level={3}>{title || "Erro ao renderizar componente"}</Heading>
      <Message>{message || "Erro desconhecido"}</Message>
    </Wrapper>
  );
}
