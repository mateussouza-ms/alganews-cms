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

export function EditorProfile() {
  return (
    <Wrapper>
      <EditorHeadline>
        <Avatar
          src={
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
          }
        />
        <Name>Mateus Souza</Name>
        <Description>Editor há 5 anos</Description>
      </EditorHeadline>

      <Divisor />

      <EditorInfo>
        <EditorResume>
          <Biography>
            Mateus Souza é esBiographyecialista em recrutamento de
            desenvolvedores e ama escrever dicas para ajudar os devs a
            encontrarem a vaga certa para elas. Atualmente tem uma empresa de
            Recruitment e é redator no alga content
          </Biography>

          <Skills>
            <ProgressBar title="coaching" theme="primary" progress={70} />
            <ProgressBar title="javascript" theme="primary" progress={55} />
            <ProgressBar title="node" theme="primary" progress={55} />
            <ProgressBar title="php" theme="primary" progress={55} />
          </Skills>
        </EditorResume>

        <PersonalInfo>
          <FieldDescriptor field="Cidade" value="Vila Velha" />
          <FieldDescriptor field="Estado" value="Espírito Santo" />

          <FieldDescriptor field="Celular" value="+55 27 91234-5678" />
          <FieldDescriptor
            field="Email"
            value="ana.castillo@redacao.algacontent.com"
          />
          <FieldDescriptor
            field="Data de Nascimento"
            value="26 de Dezembro de 1997 (22 anos)"
          />
        </PersonalInfo>
      </EditorInfo>

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
    </Wrapper>
  );
}
