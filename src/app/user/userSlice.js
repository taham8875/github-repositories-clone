import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  username: ``,
  user: {},
  userRepos: {},
  error: ``,
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", (username) => {
  return fetch(`https://api.github.com/users/${username}`).then((response) =>
    response.json()
  );
});
export const fetchUserRepos = createAsyncThunk(
  "user/fetchUserRepos",
  (username) => {
    return fetch(`https://api.github.com/users/${username}/repos`).then(
      (response) => response.json()
    );
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      fetchUsers(action.payload);
      state.username = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = ``;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.user = ``;
      state.error = `invalid username`;
    });
    builder.addCase(fetchUserRepos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUserRepos.fulfilled, (state, action) => {
      state.loading = false;
      state.userRepos = action.payload;
    });
    builder.addCase(fetchUserRepos.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.userRepos = {};
      state.error = `invalid user repos`;
    });
  },
});

export default userSlice.reducer;
export const { setUser } = userSlice.actions;
