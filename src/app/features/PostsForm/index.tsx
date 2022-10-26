import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tag } from "react-tag-input";
import { countWordsInMarkdown } from "../../../core/utils/countWordsInMarkdown";
import { info } from "../../../core/utils/info";
import { PostService } from "../../../sdk/services/PostService";
import { Button } from "../../components/Button";
import { ImageUpload } from "../../components/ImageUpload";
import { Input } from "../../components/Input";
import { Loading } from "../../components/Loading";
import { MarkdownEditor } from "../../components/MarkdownEditor";
import { TagInput } from "../../components/TagInput";
import { WordPriceCounter } from "../../components/WordPriceCounter";
import { SubmitWrapper, Wrapper } from "./styles";

interface PostFormProps {
  postId?: number;
}

export function PostForm({ postId }: PostFormProps) {
  const [tags, setTags] = useState<Tag[]>([]);
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  async function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      setIsSubmitting(true);

      if (postId) {
        await updateExistingPost(postId);
      } else {
        await createNewPost();
      }

      navigate("/");
    } finally {
      setIsSubmitting(false);
    }
  }

  async function createNewPost() {
    await PostService.insertNewPost({
      body,
      title,
      imageUrl,
      tags: tags.map((tag) => tag.text),
    });

    info({
      title: "Post salvo com sucesso!",
      content: "Você atualizou o post com sucesso.",
    });
  }

  async function updateExistingPost(postId: number) {
    await PostService.updateExistingPost(postId, {
      body,
      title,
      imageUrl,
      tags: tags.map((tag) => tag.text),
    });

    info({
      title: "Post atualizado!",
      content: "Você acabou de atualizar o post",
    });
  }

  function fetchPost(postId: number) {
    PostService.getExistingPost(postId).then((post) => {
      setTitle(post.title);
      setImageUrl(post.imageUrls.default);
      setBody(post.body);
      setTags(post.tags.map((tag) => ({ id: tag, text: tag })));
    });
  }

  useEffect(() => {
    if (postId) {
      fetchPost(postId);
    }
  }, [postId]);

  return (
    <Wrapper onSubmit={handleFormSubmit}>
      <Loading show={isSubmitting} />

      <Input
        label="título"
        placeholder="e.g.: Como fiquei rico aprendendo React"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <ImageUpload
        label="Thumbnail do post"
        onUpload={setImageUrl}
        preview={imageUrl}
      />

      <MarkdownEditor onChange={setBody} value={body} />

      <TagInput
        tags={tags}
        ondAdd={(tag) => setTags([...tags, tag])}
        ondDelete={(index) => setTags(tags.filter((_, idx) => index !== idx))}
        placeholder="Insira as tags deste post"
      />

      <SubmitWrapper>
        <WordPriceCounter
          pricePerWord={0.1}
          wordsCount={countWordsInMarkdown(body)}
        />
        <Button
          variant="primary"
          label="Salvar post"
          type="submit"
          disabled={!title || !imageUrl || !body || !tags.length}
        />
      </SubmitWrapper>
    </Wrapper>
  );
}
