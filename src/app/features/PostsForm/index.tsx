import { FormEvent, useState } from "react";
import { Tag } from "react-tag-input";
import { countWordsInMarkdown } from "../../../core/utils/countWordsInMarkdown";
import { info } from "../../../core/utils/info";
import { PostService } from "../../../sdk/services/PostService";
import { Button } from "../../components/Button";
import { ImageUpload } from "../../components/ImageUpload";
import { Input } from "../../components/Input";
import { MarkdownEditor } from "../../components/MarkdownEditor";
import { TagInput } from "../../components/TagInput";
import { WordPriceCounter } from "../../components/WordPriceCounter";
import { SubmitWrapper, Wrapper } from "./styles";

export function PostForm() {
  const [tags, setTags] = useState<Tag[]>([]);
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");

  async function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const insertedPost = await PostService.insertNewPost({
      body,
      title,
      imageUrl: "",
      tags: tags.map((tag) => tag.text),
    });

    info({
      title: "Post salvo com sucesso!",
      content: "Você acabou de criar um post. ID: " + insertedPost.id,
    });
  }

  return (
    <Wrapper onSubmit={handleFormSubmit}>
      <Input
        label="título"
        placeholder="e.g.: Como fiquei rico aprendendo React"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <ImageUpload label="Thumbnail do post" />

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
        <Button variant="primary" label="Salvar post" type="submit" />
      </SubmitWrapper>
    </Wrapper>
  );
}
