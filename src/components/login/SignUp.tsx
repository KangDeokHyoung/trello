import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "common/components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsInfoCircleFill } from "react-icons/bs";
import { onSignIn } from "store/slice/LoginSlice";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Password = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  Password.current = watch("password");

  const LoginHandler = () => {
    navigate("/login");
  };

  const SignUpSubmit = async (data: any) => {
    setIsLoading(true);
    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC6V8GqbsLoUd8NQw-3TcgRBdmGjL8a7wE";
    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          returnSecureToken: true,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const response = await res.json();
      if (!res.ok) throw new Error("이메일 또는 비밀번호가 일치하지 않습니다.");
      dispatch(onSignIn(response.idToken));
      navigate("/main");
    } catch (err: any) {
      alert(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="login-form">
      <div className="login-logo" />
      <h1 className="h1-text">Create to your Account!</h1>
      <form onSubmit={handleSubmit(SignUpSubmit)}>
        <div className="login-input">
          <input
            placeholder="Email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && errors.email.type === "required" && <p>필수 항목입니다.</p>}
          {errors.email && errors.email.type === "pattern" && <p>Email 형식으로 작성 하십시오</p>}

          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true, minLength: 7 })}
          />
          {errors.password && errors.password.type === "required" && <p>필수 항목입니다.</p>}
          {errors.password && errors.password.type === "minLength" && (
            <p>패스워드 글자는 최소 6글자 이상입니다.</p>
          )}

          <input
            placeholder="Password Confirm"
            type="password"
            {...register("password_Confirm", {
              required: true,
              validate: (value) => value === Password.current,
            })}
          />
          {errors.password_Confirm && errors.password_Confirm.type === "required" && (
            <p>필수 항목입니다.</p>
          )}
          {errors.password_Confirm && errors.password_Confirm.type === "validate" && (
            <p>패스워드가 일치하지 않습니다.</p>
          )}

          <div className="row-flex">
            <div className="login-text-singIn">
              <BsInfoCircleFill className="icon" />
              <span>Already have an ID?</span>
              <div className="login-text-singIn-btn" onClick={() => LoginHandler()}>
                Login
              </div>
            </div>
          </div>
          <Button type="submit" className="login-button-signIn">
            <div>
              {isLoading ? "로딩중" : "Sign Up"}
            </div>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
