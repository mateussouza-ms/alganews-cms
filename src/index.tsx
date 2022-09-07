import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EditorProfileView } from "./app/views/EditorProfileView";
import { EditorsListView } from "./app/views/EditorsListView";
import { HomeView } from "./app/views/HomeView";
import { NotFound404View } from "./app/views/NotFound404View";
import { PostCreateView } from "./app/views/PostCreateView";
import GlobalStyles from "./core/globalStyles";
import "./core/imports.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/editores" element={<EditorsListView />} />
        <Route path="/editores/:id" element={<EditorProfileView />} />
        <Route path="/posts/criar" element={<PostCreateView />} />

        <Route path="*" element={<NotFound404View />} />
      </Routes>
    </BrowserRouter>
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
