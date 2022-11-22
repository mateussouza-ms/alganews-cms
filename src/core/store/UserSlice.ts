import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import { User, UserService } from "ms-alganews-sdk";

interface UserSliceState {
  editors: User.EditorSummary[];
  fetching: boolean;
}

const initialState: UserSliceState = {
  editors: [],
  fetching: false,
};

export const fetchEditors = createAsyncThunk("user/fetchEditors", async () => {
  const editors = await UserService.getAllEditors();
  return editors;
});

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    const pendingActions = isPending(fetchEditors);
    const fulfilledActions = isFulfilled(fetchEditors);
    const rejectedActions = isRejected(fetchEditors);
    builder
      .addMatcher(pendingActions, (state) => {
        state.fetching = true;
      })
      .addMatcher(fulfilledActions, (state) => {
        state.fetching = false;
      })
      .addMatcher(rejectedActions, (state) => {
        state.fetching = false;
      });
  },
});

export const UserReducer = UserSlice.reducer;
