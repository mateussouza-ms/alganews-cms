import { usePageTitle } from "../../../core/hooks/usePageTitle";
import { EditorProfile } from "../../features/EditorProfile";
import { DefaultLayout } from "../../Layouts/Default";

export function EditorProfileView() {
  usePageTitle("Perfil do editor");
  return (
    <DefaultLayout>
      <EditorProfile hidePersonalData />
    </DefaultLayout>
  );
}
