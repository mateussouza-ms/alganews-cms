import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSingleEditor } from "../../../core/hooks/useSingleEditor";

import { getEditorDescription } from "../../../core/utils/getEditorDescription";
import { FieldDescriptor } from "../../components/FieldDescriptor";
import { ProgressBar } from "../../components/ProgressBar";
import { ValueDescriptor } from "../../components/ValueDescriptor";
import {
  Avatar,
  Biography,
  Description,
  Divisor,
  EditorEarnings,
  EditorHeadline,
  EditorInfo,
  EditorResume,
  Name,
  PersonalInfo,
  Skills,
  Wrapper,
} from "./styles";

interface EditorProfileProps {
  hidePersonalData?: boolean;
}
export function EditorProfile({ hidePersonalData }: EditorProfileProps) {
  const { editor, fetchEditor } = useSingleEditor();

  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    fetchEditor(Number(id));
  }, [id, fetchEditor]);

  if (!editor) {
    return null;
  }

  return (
    <Wrapper>
      <EditorHeadline>
        <Avatar src={editor.avatarUrls.small} />
        <Name>{editor.name}</Name>
        <Description>
          {getEditorDescription(new Date(editor.createdAt))}
        </Description>
      </EditorHeadline>

      <Divisor />

      <EditorInfo>
        <EditorResume>
          <Biography>{editor.bio}</Biography>

          <Skills>
            {editor.skills?.map((skill) => (
              <ProgressBar
                key={skill.name}
                title={skill.name}
                theme="primary"
                progress={skill.percentage}
              />
            ))}
          </Skills>
        </EditorResume>

        <PersonalInfo>
          <FieldDescriptor field="Cidade" value={editor.location.city} />
          <FieldDescriptor field="Estado" value={editor.location.state} />
          {!hidePersonalData && (
            <>
              <FieldDescriptor field="Telefone" value="+55 27 91234-5678" />
              <FieldDescriptor
                field="Email"
                value="ana.castillo@redacao.algacontent.com"
              />
              <FieldDescriptor
                field="Data de Nascimento"
                value="26 de Dezembro de 1997 (22 anos)"
              />
            </>
          )}
        </PersonalInfo>
      </EditorInfo>

      {!hidePersonalData && (
        <EditorEarnings>
          <ValueDescriptor
            color="default"
            description="palavras nesta semana"
            value={20345}
          />
          <ValueDescriptor
            color="default"
            description="palavras no mês"
            value={140342}
          />
          <ValueDescriptor
            color="default"
            description="total de palavras"
            value={2434423}
          />
          <ValueDescriptor
            color="primary"
            description="ganhos na semana"
            value={560322.02}
            isCurrency
          />
          <ValueDescriptor
            color="primary"
            description="ganhos no mês"
            value={560322.02}
            isCurrency
          />
          <ValueDescriptor
            color="primary"
            description="ganhos sempre"
            value={560322.02}
            isCurrency
          />
        </EditorEarnings>
      )}
    </Wrapper>
  );
}
