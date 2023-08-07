import React from "react";
import MainHeaderLayout from "./header/MainHeaderLayout";
import MainSideBarLayout from "./container/MainSideBarLayout";
import MainContentLayout from "./container/MainContentLayout";
import "./MainLayout.scss";

const MainLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <div id="main-screen">
      <MainHeaderLayout />
      <section className="main-container-wrap">
        <MainSideBarLayout />
        <MainContentLayout />
        <div className="main-content">{children}</div>
      </section>
    </div>
  );
};

export default MainLayout;
