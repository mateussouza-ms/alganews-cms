import { useEffect, useState } from "react";
import { getEditorDescription } from "../../../core/utils/getEditorDescription";
import { User } from "../../../sdk/@types";
import { UserService } from "../../../sdk/services/UserService";
import { Profile } from "../../components/Profile";
import { Wrapper } from "./styles";

export function EditorsList() {
  const [editors, setEditors] = useState<User.EditorSummary[]>([]);

  useEffect(() => {
    UserService.getAllEditors().then(setEditors);
  }, []);

  return (
    <Wrapper>
      {editors.map((editor) => (
        <Profile
          key={editor.id}
          editorId={editor.id}
          name={editor.name}
          avatarUrl={editor.avatarUrls.small}
          description={getEditorDescription(new Date(editor.createdAt))}
        />
      ))}
    </Wrapper>
  );
}
