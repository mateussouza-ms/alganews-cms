import { usePageTitle } from "../../../core/hooks/usePageTitle";
import { PostsList } from "../../features/PostsList";
import { UserPerformance } from "../../features/UserPerformance";
import { UserTopTags } from "../../features/UserTopTags";
import { DefaultLayout } from "../../Layouts/Default";

export function HomeView() {
  usePageTitle("Home");

  return (
    <DefaultLayout>
      <UserTopTags />
      <UserPerformance />
      <PostsList />
    </DefaultLayout>
  );
}
