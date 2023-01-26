import React from "react";

import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "./page/LoginPage";
import MainPage from "./page/MainPage";
import MainLayout from "./layout/main/MainLayout";
import Login from "components/login/Login";
import SignUp from "components/login/SignUp";

const AuthElement = ({ children }: any) => {
  const tokens = localStorage.getItem("token");
  return tokens ? children : <Navigate to="/" />;
};

const LoginElement = ({ children }: any) => {
  const tokens = localStorage.getItem("token");
  return !tokens ? children : <Navigate to="/main" />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route
          path="/"
          element={
            <LoginElement>
              <LoginPage />
            </LoginElement>
          }
        >
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route
          path="/main"
          element={
            <AuthElement>
              <MainLayout />
            </AuthElement>
          }
        >
          <Route path="/main" element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
