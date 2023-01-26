import React from "react";
import "./LoginLayout.scss";

const LoginLayout = ({ children }: any) => {
  return (
    <div id="login-wrap">
      <div className="login-container">{children}</div>
    </div>
  );
};

export default LoginLayout;
