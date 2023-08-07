import React from "react";
import LoginLayout from "../layout/login/LoginLayout";

export const LoginPage = ({ children }: { children: JSX.Element }) => {
  return (
    <LoginLayout>
      <div>{children}</div>
      {/* <LoginCollect /> */}
      <div className="box-shadow" />
    </LoginLayout>
  );
};
