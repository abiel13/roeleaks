import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

const HomeLayout = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      Welcome Home
      <ToastContainer />
    </div>
  );
};

export default HomeLayout;
