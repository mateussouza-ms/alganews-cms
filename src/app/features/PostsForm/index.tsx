import { FormEvent, useState } from "react";
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

export function PostForm() {
  const [tags, setTags] = useState<Tag[]>([]);
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  async function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const insertedPost = await PostService.insertNewPost({
      body,
      title,
      imageUrl,
      tags: tags.map((tag) => tag.text),
    });
    setIsSubmitting(false);

    info({
      title: "Post salvo com sucesso!",
      content: "Você acabou de criar um post. ID: " + insertedPost.id,
    });

    navigate("/");
  }

  return (
    <Wrapper onSubmit={handleFormSubmit}>
      <Loading show={isSubmitting} />

      <Input
        label="título"
        placeholder="e.g.: Como fiquei rico aprendendo React"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <ImageUpload label="Thumbnail do post" onUpload={setImageUrl} />

      <MarkdownEditor onChange={setBody} />

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
