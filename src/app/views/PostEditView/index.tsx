import { usePageTitle } from "../../../core/hooks/usePageTitle";
import { PostForm } from "../../features/PostsForm";
import { DefaultLayout } from "../../Layouts/Default";

export function PostEditView() {
  usePageTitle("Editar post");

  return (
    <DefaultLayout>
      <PostForm />
    </DefaultLayout>
  );
}
