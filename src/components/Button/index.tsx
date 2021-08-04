import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { Wrapper } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "danger" | "text";
  label: string;
}

export function Button({ variant, label, ...props }: ButtonProps) {
  return (
    <Wrapper variant={variant} {...props}>
      {label}
    </Wrapper>
  );
}
