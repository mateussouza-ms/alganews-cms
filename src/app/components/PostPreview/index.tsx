import { useEffect, useState } from "react";
import { withBoundary } from "../../../core/hoc/withBoundary";
import { Post } from "../../../sdk/@types";
import { Button } from "../Button";
import { MarkdownEditor } from "../MarkdownEditor";

import { confirm } from "../../../core/utils/confitm";
import { info } from "../../../core/utils/info";
import modal from "../../../core/utils/modal";
import { PostService } from "../../../sdk/services/PostService";
import { Loading } from "../Loading";
import { Actions, Content, Heading, Image, Title, Wrapper } from "./styles";

interface PostPreviewProps {
  postId: number;
}

function PostPreview({ postId }: PostPreviewProps) {
  const [post, setPost] = useState<Post.Detailed>();
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);

  async function handlePublish() {
    await PostService.publishExistingPost(postId);

    info({
      title: "Post publicado!",
      content: "Você publicou o post com sucesso.",
    });
  }

  function reopenModal() {
    modal({
      children: <PostPreview postId={postId} />,
    });
  }

  useEffect(() => {
    setIsLoadingPosts(true);
    PostService.getExistingPost(postId)
      .then(setPost)
      .finally(() => setIsLoadingPosts(false));
  }, [postId]);

  if (isLoadingPosts) {
    return <Loading show />;
  }

  if (!post) {
    return null;
  }

  return (
    <Wrapper>
      <Heading>
        <Title>{post.title}</Title>
        <Actions>
          <Button
            variant={"danger"}
            label={"Publicar"}
            disabled={post.published}
            onClick={() => {
              confirm({
                title: "Deseja publicar o post?",
                onConfirm: handlePublish,
                onCancel: reopenModal,
              });
            }}
          />
          <Button
            variant={"primary"}
            label={"Editar"}
            disabled={post.published}
          />
        </Actions>
      </Heading>
      <Image src={post.imageUrls.medium} />
      <Content>
        <MarkdownEditor readOnly value={post.body} />
      </Content>
    </Wrapper>
  );
}

export default withBoundary(PostPreview);
