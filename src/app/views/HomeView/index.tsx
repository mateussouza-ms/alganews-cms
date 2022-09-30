import { usePageTitle } from "../../../core/hooks/usePageTitle";
import { ErrorBoundary } from "../../components/ErrorBoundary";
import { PostsList } from "../../features/PostsList";
import { UserEarnings } from "../../features/UserEarnings";
import { UserPerformance } from "../../features/UserPerformance";
import { UserTopTags } from "../../features/UserTopTags";
import { DefaultLayout } from "../../Layouts/Default";

export function HomeView() {
  usePageTitle("Home");

  return (
    <DefaultLayout>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          gap: "32px",
        }}
      >
        <ErrorBoundary component="tags mais utilizadas">
          <UserTopTags />
        </ErrorBoundary>

        <ErrorBoundary component="ganhos">
          <UserEarnings />
        </ErrorBoundary>
      </div>

      <ErrorBoundary component="performance">
        <UserPerformance />
      </ErrorBoundary>

      <ErrorBoundary component="lista de posts">
        <PostsList />
      </ErrorBoundary>
    </DefaultLayout>
  );
}
