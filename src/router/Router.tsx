import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import { Pages } from "pages";
import { Login, SignUp } from "components";
import { Authentication } from "common/components";
import { getAuth } from "firebase/auth";

function Router() {
  const auth = getAuth();

  const routers = [
    { path: "/404", element: <Pages.NotFoundPage /> },
    { path: "/", element: <Navigate to="main" /> },
    {
      path: "/",
      element: <Authentication />,
      children: [
        {
          path: "/login",
          element: (
            <Pages.LoginPage>
              <Login />
            </Pages.LoginPage>
          ),
        },
        {
          path: "/signup",
          element: (
            <Pages.LoginPage>
              <SignUp />
            </Pages.LoginPage>
          ),
        },
        {
          path: "/main",
          element: auth.currentUser ? <Pages.MainPage /> : <></>,
        },
      ],
    },
  ];
  return useRoutes(routers);
}

export default Router;
