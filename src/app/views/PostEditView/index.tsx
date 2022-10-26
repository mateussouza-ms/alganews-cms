import { useParams } from "react-router-dom";
import { usePageTitle } from "../../../core/hooks/usePageTitle";
import { PostForm } from "../../features/PostsForm";
import { DefaultLayout } from "../../Layouts/Default";

export function PostEditView() {
  usePageTitle("Editar post");

  const params = useParams<{ id: string }>();

  return (
    <DefaultLayout>
      <PostForm postId={Number(params.id)} />
    </DefaultLayout>
  );
}
