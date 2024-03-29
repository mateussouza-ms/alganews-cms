import { usePageTitle } from "../../../core/hooks/usePageTitle";
import { EditorsList } from "../../features/EditorsList";
import { DefaultLayout } from "../../Layouts/Default";

export function EditorsListView() {
  usePageTitle("Lista de editores");

  return (
    <DefaultLayout>
      <EditorsList />
    </DefaultLayout>
  );
}
