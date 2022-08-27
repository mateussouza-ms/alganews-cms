import { PostsList } from "../../features/PostsList";
import { UserPerformance } from "../../features/UserPerformance";
import { DefaultLayout } from "../../Layouts/Default";

export function HomeView() {
  return (
    <DefaultLayout>
      <UserPerformance />
      <PostsList />
    </DefaultLayout>
  );
}
