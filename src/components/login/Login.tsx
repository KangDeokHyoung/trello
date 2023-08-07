import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "common/components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsInfoCircleFill } from "react-icons/bs";
import { onSignIn } from "store/slice/LoginSlice";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  getIdToken,
} from "firebase/auth";
import "./Login.scss";

type T_Login = { email: string; password: string };

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const auth = getAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T_Login>({ defaultValues: { email: "", password: "" } });

  const signUpHandler = () => navigate("/signup");

  const loginSunmit = async (data: T_Login) => {
    const { email, password } = data;
    setIsLoading(true);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const { operationType, user } = res;
      if (operationType === "signIn") {
        const token = await getIdToken(user);
        localStorage.setItem("idToken", token);
        navigate("/main");
        setIsLoading(false);
      }
    } catch (err) {
      console.log("이메일 또는 비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <div id="login-form">
      <div className="login-logo" />
      <h1 className="h1-text">Welcome, Sign in to your Account!</h1>
      <form onSubmit={handleSubmit(loginSunmit)}>
        <div className="login-input">
          <input
            placeholder="Email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && errors.email.type === "required" && (
            <p>필수 항목입니다.</p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p>Email 형식으로 작성 하십시오</p>
          )}

          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true, minLength: 5 })}
          />
          {errors.password && errors.password.type === "required" && (
            <p>필수 항목입니다.</p>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <p>패스워드 글자는 최소 6글자 이상입니다.</p>
          )}

          <div className="row-flex">
            <div className="login-text-singIn">
              <BsInfoCircleFill className="icon" />
              <span>Don`t have an account yet?</span>
              <div className="login-text-singIn-btn" onClick={signUpHandler}>
                Sign up
              </div>
            </div>
          </div>
          <Button type="submit" className="login-button-signIn">
            {isLoading ? "로딩중" : "Login"}
          </Button>
        </div>
      </form>
    </div>
  );
};
