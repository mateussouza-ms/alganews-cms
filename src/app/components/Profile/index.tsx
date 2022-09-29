import { Description, Detail, Name, Wrapper } from "./styles";

interface ProfileProps {
  editorId: number;
  name: string;
  description: string;
  avatarUrl?: string;
}
export function Profile({
  editorId,
  name,
  description,
  avatarUrl,
}: ProfileProps) {
  return (
    <Wrapper tabIndex={0} to={`/editores/${editorId}`}>
      <img src={avatarUrl} alt="Avatar" height={48} width={48} />
      <Detail>
        <Name>{name}</Name>
        <Description>{description}</Description>
      </Detail>
    </Wrapper>
  );
}
