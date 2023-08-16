import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  isLoggedIn: boolean;
  loginId: string;
  loginPassword: string;
  token?: string;
}

const initialState: CounterState = {
  isLoggedIn: false,
  loginId: "",
  loginPassword: "",
  token: "",
};

export const counterSlice: any = createSlice({
  name: "login",
  initialState,
  reducers: {
    onLogin: (state, action) => {
      localStorage.get("token");
    },
    onLogout: (state) => {
      localStorage.removeItem("token");
    },
    onSignIn: (state, action) => {
      localStorage.setItem("token", action.payload);
    },
  },
});

export const { onLogin, onLogout, onSignIn } = counterSlice.actions;

export default counterSlice.reducer;
