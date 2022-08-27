import { usePageTitle } from "../../../core/hooks/usePageTitle";
import { PostsList } from "../../features/PostsList";
import { UserPerformance } from "../../features/UserPerformance";
import { DefaultLayout } from "../../Layouts/Default";

export function HomeView() {
  usePageTitle("Home");

  return (
    <DefaultLayout>
      <UserPerformance />
      <PostsList />
    </DefaultLayout>
  );
}
