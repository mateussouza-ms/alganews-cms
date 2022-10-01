import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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

  if (!editors.length) {
    return (
      <Wrapper>
        {Array.from(new Array(10)).map((_, i) => (
          <Skeleton key={i} height={82} width={328} />
        ))}
      </Wrapper>
    );
  }

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
