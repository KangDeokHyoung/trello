import React, { useState } from "react";
// import Login from "./Login";
// import SignUp from "./SignUp";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const LoginCollect = () => {
  return (
    <>
      <Outlet />
      {/* <Routes>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Routes> */}
      {/* <Login /> */}

      {/* <form onSubmit={submitHandler}>
          <div className="login-input">
            <input />
            <Input id="id" type="text" onChange={IdHandler} value={Id} placeholder="Username" />
            <Input
              id="password"
              type="password"
              onChange={PassWordHandler}
              value={Password}
              placeholder="Password"
            />
            <div className="row-flex">
              <div className="login-text-singIn">
                <BsInfoCircleFill className="icon" />
                <span>Don`t have an account yet?</span>
                <div className="login-text-singIn-btn" onClick={switchAuthModeHandler}>
                  {isLogin ? "Sign up" : "Login"}
                </div>
              </div>
            </div>
            <Button
              type="submit"
              className={classNames("login-button-signIn", { disabled }, { isLogin })}
            >
              {isLoading ? "로딩중" : isLogin ? "Login" : "Create Account"}
            </Button>
          </div>
        </form> */}
    </>
  );
};

export default LoginCollect;
