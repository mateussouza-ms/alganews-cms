import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { info } from "../core/utils/info";
import { EditorProfileView } from "./views/EditorProfileView";
import { EditorsListView } from "./views/EditorsListView";
import { HomeView } from "./views/HomeView";
import { NotFound404View } from "./views/NotFound404View";
import { PostCreateView } from "./views/PostCreateView";
import { PostEditView } from "./views/PostEditView";

export function App() {
  useEffect(() => {
    window.onunhandledrejection = function (error) {
      console.log("error", error);
      info({
        title: error.reason.response?.data.title || "Erro inesperado",
        content:
          error.reason.response?.data.detail ||
          error.reason.message ||
          "Houve um erro inesperado.",
      });
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/editores" element={<EditorsListView />} />
        <Route path="/editores/:id" element={<EditorProfileView />} />
        <Route path="/posts/criar" element={<PostCreateView />} />
        <Route path="/posts/editar/:id" element={<PostEditView />} />

        <Route path="*" element={<NotFound404View />} />
      </Routes>
    </BrowserRouter>
  );
}
