import { Tag, WithContext as ReactTagInput } from "react-tag-input";
import { Wrapper } from "./styles";

const DelimiterKeys = {
  tab: 9,
  enter: 13,
  comma: 188,
};

const delimiters = Object.values(DelimiterKeys);

interface TagInputProps {
  ondAdd: (tag: Tag) => void;
  ondDelete: (i: number) => void;
  placeholder: string;
  tags: Tag[];
}

export function TagInput({
  ondAdd,
  ondDelete,
  placeholder,
  tags,
}: TagInputProps) {
  return (
    <Wrapper>
      <ReactTagInput
        handleAddition={ondAdd}
        handleDelete={ondDelete}
        placeholder={placeholder}
        allowDragDrop={false}
        tags={tags}
        autofocus={false}
        delimiters={delimiters}
      />
    </Wrapper>
  );
}
