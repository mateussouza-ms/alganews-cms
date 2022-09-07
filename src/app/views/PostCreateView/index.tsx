import { usePageTitle } from "../../../core/hooks/usePageTitle";
import { PostForm } from "../../features/PostsForm";
import { DefaultLayout } from "../../Layouts/Default";

export function PostCreateView() {
  usePageTitle("Novo post");

  return (
    <DefaultLayout>
      <PostForm />
    </DefaultLayout>
  );
}
