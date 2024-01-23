import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Topbar: React.FC = () => {
  const islogged = !localStorage.getItem("Roleaks");
  return (
    <div className="sticky top-0  w-[80%] flex justify-between items-center backdrop-blur-lg">
      <input
        className="w-[40%] px-2 py-2 rounded-lg bg-transparent border-[1px] border-[#AEAEAE]"
        placeholder="Searh Leaks"
      />
      {!islogged ? (
        <FaUser />
      ) : (
        <div className="flex items-center gap-2">
          <Link
            to={"/auth/login"}
            className="text-center px-5 py-1 rounded-lg  border-[1px] border-white"
          >
            Login
          </Link>
          <Link
            to={"/auth/register"}
            className="text-center px-5 py-1 rounded-lg  text-black bg-white"
          >
            {"Register "}
            signup
          </Link>
        </div>
      )}
    </div>
  );
};

export default Topbar;
