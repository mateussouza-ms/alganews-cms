import { useEffect } from "react";

import { withBoundary } from "../../../core/hoc/withBoundary";
import { Button } from "../../components/Button";
import { Loading } from "../../components/Loading";
import { MarkdownEditor } from "../../components/MarkdownEditor";

import { useSinglePost } from "../../../core/hooks/useSinglePost";
import { confirm } from "../../../core/utils/confitm";
import modal from "../../../core/utils/modal";
import { Actions, Content, Heading, Image, Title, Wrapper } from "./styles";

interface PostPreviewProps {
  postId: number;
}

function PostPreview({ postId }: PostPreviewProps) {
  const { isLoading, post, fetchPost, publishPost } = useSinglePost();

  function handlePublish() {
    publishPost(postId);
  }

  function reopenModal() {
    modal({
      children: <PostPreview postId={postId} />,
    });
  }

  useEffect(() => {
    fetchPost(postId);
  }, [postId, fetchPost]);

  if (isLoading) {
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
            onClick={() =>
              (window.location.pathname = `/posts/editar/${postId}`)
            }
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
