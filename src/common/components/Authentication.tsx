import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const Authentication = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth();
  const path = location.pathname.split("/")[1];
  const pathMain = path === "main";

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // login 성공시
      if (!pathMain) navigate("/main");
    } else {
      // 로그아웃되면
      if (pathMain) navigate("/login");
    }
  });

  return <Outlet />;
};
