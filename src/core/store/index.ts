import { configureStore } from "@reduxjs/toolkit";
import { editorReducer } from "./EditorStore";
import { postReducer } from "./PostSlice";
import { userReducer } from "./UserSlice";

export const store = configureStore({
  reducer: {
    post: postReducer,
    user: userReducer,
    editor: editorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
