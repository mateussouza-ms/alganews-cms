import { User, UserService } from "ms-alganews-sdk";
import { useCallback, useState } from "react";

export function useSingleEditor() {
  const [editor, setEditor] = useState<User.EditorDetailed>();

  const fetchEditor = useCallback((editorId: number) => {
    UserService.getExistingEditor(editorId).then(setEditor);
  }, []);

  return {
    fetchEditor,
    editor,
  };
}
