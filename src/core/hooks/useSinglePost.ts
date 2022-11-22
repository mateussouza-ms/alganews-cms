import { Post, PostService } from "ms-alganews-sdk";
import { useCallback, useState } from "react";
import { info } from "../utils/info";

export function useSinglePost() {
  const [post, setPost] = useState<Post.Detailed>();
  const [isLoading, setIsLoading] = useState(false);

  const fetchPost = useCallback(async (postId: number) => {
    return await PostService.getExistingPost(postId)
      .then(setPost)
      .finally(() => setIsLoading(false));
  }, []);

  const publishPost = useCallback(async (postId: number) => {
    await PostService.publishExistingPost(postId);

    info({
      title: "Post publicado!",
      content: "Você publicou o post com sucesso.",
    });
  }, []);

  return { post, fetchPost, isLoading, publishPost };
}
