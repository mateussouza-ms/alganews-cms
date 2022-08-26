import { Field, Value, Wrapper } from "./styles";

interface FieldDescriptorProps {
  field: string;
  value: string;
}

export function FieldDescriptor({ field, value }: FieldDescriptorProps) {
  return (
    <Wrapper>
      <Field>{field}:</Field>
      <Value>{value}</Value>
    </Wrapper>
  );
}
