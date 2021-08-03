import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { Wrapper } from "./styles";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: "primary" | "danger" | "text";
  label: string;
}

export function Button({ variant, label, ref, ...props }: ButtonProps) {
  return (
    <Wrapper variant={variant} {...props}>
      {label}
    </Wrapper>
  );
}
