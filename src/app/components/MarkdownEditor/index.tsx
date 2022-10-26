import MarkdownIt from "markdown-it";
import MdEditor, { Plugins } from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import { FileService } from "../../../sdk/services/FileService";

MdEditor.unuse(Plugins.FontUnderline);

const parser = new MarkdownIt();

const defaultRender =
  parser.renderer.rules.link_open ||
  function (tokens: any, idx: any, options: any, env: any, self: any) {
    return self.renderToken(tokens, idx, options);
  };

parser.renderer.rules.link_open = function (tokens, idx, options, env, self) {
  var aIndex = tokens[idx].attrIndex("target");
  if (aIndex < 0) {
    tokens[idx].attrPush(["target", "_blank"]);
  } else {
    //@ts-ignore
    tokens[idx].attrs[aIndex][1] = "_blank";
  }
  return defaultRender(tokens, idx, options, env, self);
};

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
  async function onImageUpload(file: File) {
    return FileService.upload(file);
  }

  return (
    <MdEditor
      readOnly={readOnly}
      style={{ height: readOnly ? "auto" : 300 }}
      value={value}
      renderHTML={(text) => parser.render(text)}
      onChange={({ text }) => onChange && onChange(text)}
      onImageUpload={onImageUpload}
      config={{
        view: {
          html: false,
        },
      }}
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
