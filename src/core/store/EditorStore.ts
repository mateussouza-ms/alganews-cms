import {
  createAsyncThunk,
  createReducer,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import { User, UserService } from "ms-alganews-sdk";

export const fetchAllEditors = createAsyncThunk(
  "editor/fetchAllEditors",
  async () => {
    return await UserService.getAllEditors();
  }
);

interface EditorStoreState {
  fetching: boolean;
  editorsList: User.EditorSummary[];
}
const initialState: EditorStoreState = {
  fetching: false,
  editorsList: [],
};

export const editorReducer = createReducer(initialState, (builder) => {
  const pendingActions = isPending(fetchAllEditors);
  const fulfilledActions = isFulfilled(fetchAllEditors);
  const rejectedActions = isRejected(fetchAllEditors);

  builder
    .addCase(fetchAllEditors.fulfilled, (state, action) => {
      state.editorsList = action.payload;
    })
    .addMatcher(pendingActions, (state) => {
      state.fetching = true;
    })
    .addMatcher(fulfilledActions, (state) => {
      state.fetching = false;
    })
    .addMatcher(rejectedActions, (state) => {
      state.fetching = false;
    });
});
