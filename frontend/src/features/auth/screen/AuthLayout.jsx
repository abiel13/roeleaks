import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="h-screen w-full  auth_bg flex flex-col items-center justify-center">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
