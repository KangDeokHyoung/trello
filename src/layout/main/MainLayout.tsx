import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import MainHeaderLayout from "./header/MainHeaderLayout";
import MainSideBarLayout from "./container/MainSideBarLayout";
import MainContentLayout from "./container/MainContentLayout";
import "./MainLayout.scss";

const MainLayout = () => {
  // const storedToken = localStorage.getItem("token");
  // const [tokens] = useState(!!storedToken);

  // if (!tokens) return <Navigate to="/" />;

  return (
    <div id="main-screen">
      <MainHeaderLayout />
      <section className="main-container-wrap">
        <MainSideBarLayout />
        <MainContentLayout />
      </section>
    </div>
  );
};

export default MainLayout;
