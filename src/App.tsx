import React from "react";
import { Provider } from "react-redux";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
// import LoginPage from "./pages/LoginPage";
// import MainPage from "./pages/MainPage";
import MainLayout from "./layout/main/MainLayout";
// import Login from "components/login/Login";
// import SignUp from "components/login/SignUp";
import Router from "router/Router";
import { store } from "store/store";

// const AuthElement = ({ children }: any) => {
//   const tokens = localStorage.getItem("token");
//   return tokens ? children : <Navigate to="/" />;
// };

// const LoginElement = ({ children }: any) => {
//   const tokens = localStorage.getItem("token");
//   return !tokens ? children : <Navigate to="/main" />;
// };

const App = ({ tab }: { tab: string }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
        {/* <Routes>
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
      </Routes> */}
      </BrowserRouter>
    </Provider>
  );
};

export default App;
