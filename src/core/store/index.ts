import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./PostSlice";
import { UserReducer } from "./UserSlice";

export const store = configureStore({
  reducer: {
    post: postReducer,
    user: UserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
