import { ValueDescriptor } from "../../components/ValueDescriptor";
import { Wrapper } from "./styles";

export function UserEarnings() {
  return (
    <Wrapper>
      <ValueDescriptor
        color="primary"
        description="Ganhos no mês"
        value={54645}
        isCurrency
      />
      <ValueDescriptor
        color="primary"
        description="Ganhos na semana"
        value={54645}
        isCurrency
      />
      <ValueDescriptor
        color="default"
        description="Ganhos de sempre"
        value={75454}
        isCurrency
      />
      <ValueDescriptor
        color="default"
        description="Total de palavras"
        value={2345347}
      />
    </Wrapper>
  );
}
