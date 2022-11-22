import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { getEditorDescription } from "../../../core/utils/getEditorDescription";
import { Profile } from "../../components/Profile";

import { useEditors } from "../../../core/hooks/useEditors";
import { Wrapper } from "./styles";

export function EditorsList() {
  const { editorsList, fetchAllEditors } = useEditors();

  useEffect(() => {
    fetchAllEditors();
  }, [fetchAllEditors]);

  if (!editorsList.length) {
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
      {editorsList.map((editor) => (
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
