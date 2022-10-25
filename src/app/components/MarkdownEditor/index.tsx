import MarkdownIt from "markdown-it";
import MdEditor, { Plugins } from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";

MdEditor.unuse(Plugins.FontUnderline);

const parser = new MarkdownIt();

interface MarkdownEditorProps {
  onChange?: (markdownText: string) => void;
  value?: string;
  readOnly?: boolean;
}

export function MarkdownEditor({
  onChange,
  value,
  readOnly,
}: MarkdownEditorProps) {
  return (
    <MdEditor
      readOnly={readOnly}
      style={{ height: readOnly ? "auto" : 300 }}
      value={value}
      renderHTML={(text) => parser.render(text)}
      onChange={({ text }) => onChange && onChange(text)}
      view={
        readOnly
          ? {
              menu: false,
              md: false,
              html: true,
            }
          : undefined
      }
    />
  );
}
