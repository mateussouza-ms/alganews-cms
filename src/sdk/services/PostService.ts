import { Post } from "../@types";
import Service from "../Service";
import { generateQueryString } from "../utils/generateQueryString";

export class PostService extends Service {
  static getAllPosts(search: Post.Query) {
    const queryString = generateQueryString(search);
    return this.Http.get<Post.Paginated>(`/posts${queryString}`).then(
      this.getData
    );
  }

  static getExistingPost(id: number) {
    return this.Http.get<Post.Paginated>(`/posts/${id}`).then(this.getData);
  }

  static insertNewPost(post: Post.Input) {
    return this.Http.post<Post.Detailed>("/posts", post).then(this.getData);
  }
}
