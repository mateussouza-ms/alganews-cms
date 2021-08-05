import { mdiInformation } from "@mdi/js";
import Icon from "@mdi/react";
import { Wrapper } from "./styles";

interface InfoProps {
  title: string;
  content: string;
}

export function Info({ title, content }: InfoProps) {
  return (
    <Wrapper>
      <div className="icon">
        <Icon path={mdiInformation} size="48px" color="#0099FF" />
      </div>
      <div className="message">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </Wrapper>
  );
}
