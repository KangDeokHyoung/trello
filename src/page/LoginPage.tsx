import LoginCollect from "../components/login/LoginCollect";
import SignUp from "../components/login/SignUp";
import LoginLayout from "../layout/login/LoginLayout";
import styled from "styled-components";

const LoginPage = () => {
  return (
    <LoginLayout>
      <LoginCollect />
      <div className="box-shadow" />
    </LoginLayout>
  );
};

export default LoginPage;
