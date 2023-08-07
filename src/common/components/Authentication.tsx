import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, getIdToken, User } from "firebase/auth";

export const Authentication = () => {
  const idToken = localStorage.getItem("idToken");
  const navigate = useNavigate();

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // 여기부분은 유지
      console.log("1");
    } else {
      navigate("/login");
    }
  });

  return <Outlet />;
};
