import { RootState } from "../store";

export function selectPaginatedPosts(state: RootState) {
  return state.post.paginated?.content;
}
