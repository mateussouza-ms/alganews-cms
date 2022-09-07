import { Description, Detail, Name, Wrapper } from "./styles";

interface ProfileProps {
  editorId: number;
  name: string;
  description: string;
}
export function Profile({ editorId, name, description }: ProfileProps) {
  return (
    <Wrapper tabIndex={0} to={`/editores/${editorId}`}>
      <img
        src="https://images.unsplash.com/photo-1449322593469-9e30eb4f1a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="Avatar"
        height={48}
        width={48}
      />
      <Detail>
        <Name>{name}</Name>
        <Description>{description}</Description>
      </Detail>
    </Wrapper>
  );
}
