import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";

import * as EditorActions from "../store/EditorStore";

export function useEditors() {
  const dispatch = useDispatch<AppDispatch>();

  const loading = useSelector((state: RootState) => state.editor.fetching);
  const editorsList = useSelector(
    (state: RootState) => state.editor.editorsList
  );

  const fetchAllEditors = useCallback(async () => {
    dispatch(EditorActions.fetchAllEditors());
  }, [dispatch]);

  return {
    loading,
    editorsList,
    fetchAllEditors,
  };
}
