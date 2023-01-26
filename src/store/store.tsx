import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/LoginSlice";

export const store = configureStore({
  reducer: {
    login: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
