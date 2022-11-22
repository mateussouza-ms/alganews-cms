import { RootState } from "../store";

export function selectPostsFetching(state: RootState) {
  return state.post.fetching;
}
