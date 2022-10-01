import { Wrapper } from "./styles";

interface LoadingProps {
  show?: boolean;
}

export function Loading({ show }: LoadingProps) {
  if (!show) {
    return null;
  }

  return (
    <Wrapper>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Wrapper>
  );
}
