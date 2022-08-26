import { StyledParagraph } from "./styles";

interface ParagraphProps {
  size?: "default" | "small";
  children: string;
}

export function Paragraph({ size, children }: ParagraphProps) {
  return <StyledParagraph size={size || "default"}>{children}</StyledParagraph>;
}
