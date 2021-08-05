import { Button } from "../Button";
import { Wrapper } from "./styles";

interface ConfirmProps {
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function Confirm({ title, onConfirm, onCancel }: ConfirmProps) {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <div className="buttons">
        <Button label="Não" variant="danger" onClick={onCancel} />
        <Button label="Sim" variant="primary" onClick={onConfirm} />
      </div>
    </Wrapper>
  );
}
