import React from "react";
import Fields from "../components/Fields";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  return (
    <div className="w-[30%] bg-[#D9D9D929] rounded-lg  px-5 py-3 min-h-[456px] flex flex-col items-center">
      <h3 className="text-[#A9A9A9] text-[2rem] font-bold">Welcome Back</h3>
      <div className="flex flex-col gap-8 w-full mt-[1rem]">
        <Fields title="Username" placeholder="Enter Username" />
        <Fields title="Password" placeholder="Enter Password" />
        <button className="py-2 border-[1px] text-[#FFFFFF7D] font-bold text-xl  rounded-lg border-[#00FFFF]">
          Login
        </button>
        <p className="text-white">
          Forgot Password ? <span className="text-[#00FFFF]">Click Here</span>
        </p>
      </div>
      <div className="mt-[1rem] flex flex-col  gap-3 w-full ">
        <p className="text-white">Don't have an account</p>
        <Link
          className="text-[#00ffff] font-medium text-lg "
          to={"/auth/register"}
        >
          Create One
        </Link>
      </div>
    </div>
  );
};

export default LoginScreen;
