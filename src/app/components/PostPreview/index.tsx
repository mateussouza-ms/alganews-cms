import { withBoundary } from "../../../core/hoc/withBoundary";
import { Button } from "../Button";
import { MarkdownEditor } from "../MarkdownEditor";

import { Actions, Content, Heading, Image, Title, Wrapper } from "./styles";

interface PostPreviewProps {
  postId: number;
}

function PostPreview(props: PostPreviewProps) {
  return (
    <Wrapper>
      <Heading>
        <Title>{"Como fiquei rico aprendendo React"}</Title>
        <Actions>
          <Button variant={"danger"} label={"Publicar"} />
          <Button variant={"primary"} label={"Editar"} />
        </Actions>
      </Heading>
      <Image
        src={
          "https://images.unsplash.com/photo-1499343628900-545067aef5a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
        }
      />
      <Content>
        <MarkdownEditor
          readOnly
          value={
            "Olá mundo!\n- Esta é\n- uma lista\n- uma lista\n- uma lista\n- uma lista\n"
          }
        />
      </Content>
    </Wrapper>
  );
}

export default withBoundary(PostPreview);
