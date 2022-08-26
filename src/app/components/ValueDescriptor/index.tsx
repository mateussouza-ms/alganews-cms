import { Wrapper } from "./styles";

interface ValueDescriptorProps {
  description: string;
  value: number;
  isCurrency?: boolean;
  color: "primary" | "default";
}

export function ValueDescriptor({
  description,
  value,
  isCurrency,
  color,
}: ValueDescriptorProps) {
  return (
    <Wrapper color={color}>
      <span className="description">{description}:</span>

      <div>
        {isCurrency && <span className="currency">R$</span>}
        <span className="value">{value.toLocaleString("pt-br")}</span>
      </div>
    </Wrapper>
  );
}
