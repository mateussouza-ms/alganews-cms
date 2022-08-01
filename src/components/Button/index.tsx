import Icon from "@mdi/react";
import { ButtonHTMLAttributes } from "react";
import { Wrapper } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "danger" | "text";
  label: string;
  icon?: {
    path: string;
    size?: string;
  };
}

export function Button({ variant, label, icon, ...props }: ButtonProps) {
  return (
    <Wrapper variant={variant} {...props}>
      {label}
      {icon && <Icon size="2rem" path={icon.path} />}
    </Wrapper>
  );
}
