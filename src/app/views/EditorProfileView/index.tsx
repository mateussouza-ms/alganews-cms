import { usePageTitle } from "../../../core/hooks/usePageTitle";
import { ErrorBoundary } from "../../components/ErrorBoundary";
import { EditorProfile } from "../../features/EditorProfile";
import { DefaultLayout } from "../../Layouts/Default";

export function EditorProfileView() {
  usePageTitle("Perfil do editor");
  return (
    <DefaultLayout>
      <ErrorBoundary>
        <EditorProfile hidePersonalData />
      </ErrorBoundary>
    </DefaultLayout>
  );
}
