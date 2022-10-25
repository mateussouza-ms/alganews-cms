import { withBoundary } from "../../../core/hoc/withBoundary";
import { MarkdownEditor } from "../MarkdownEditor";

import { Wrapper } from "./styles";

interface PostPreviewProps {
  postId: number;
}

function PostPreview(props: PostPreviewProps) {
  return (
    <Wrapper>
      features/PostPreview
      <MarkdownEditor readOnly value={"ola mundo\n- esta é\n- uma lista"} />
    </Wrapper>
  );
}

export default withBoundary(PostPreview);
