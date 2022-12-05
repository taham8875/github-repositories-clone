import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice.js";
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
