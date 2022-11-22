import { Post } from "ms-alganews-sdk";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPaginatedPosts } from "../selectors/selectPaginatedPosts";
import { selectPostsFetching } from "../selectors/selectPostsFetching";

import * as PostsActions from "../store/PostSlice";

export function usePosts() {
  const dispatch = useDispatch();

  const paginatedPosts = useSelector(selectPaginatedPosts);
  const loading = useSelector(selectPostsFetching);

  const fetchPosts = useCallback(
    async (query: Post.Query) => {
      dispatch(PostsActions.fetchPosts(query));
    },
    [dispatch]
  );

  return {
    paginatedPosts,
    loading,
    fetchPosts,
  };
}
