import React from "react";
import { Outlet } from "react-router-dom";
import "./MainContentLayout.scss";

const MainContentLayout = () => {
  return (
    <div className="main-content">
      <Outlet />
    </div>
  );
};

export default MainContentLayout;
