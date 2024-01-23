import React from "react";
import logo from "@/assets/logo.png";
import { Navroutes } from "@/constants/navRoutes";
import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";

const LeftSideBar: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 items-center group bg-[#00000040] sticky top-0 left-0 w-fit  h-screen px-2 py-3 transition-all duration-75 ease-in">
      <div className="flex items-center  gap-1">
        <div className="w-[35px]">
          <img src={logo} className=" object-cover" alt="logo" />
        </div>
        <div className="text-white self-end hidden group-hover:flex">
          Roleaks
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-4 flex-1">
        {Navroutes.map((item, i) => (
          <Link to={`${item.href}`} className="flex gap-1 items-center" key={i}>
            <item.Icon color="#A94141" fontSize={24} />
            <h3 className="text-white hidden group-hover:flex font-bold text-base">
              {item.title}
            </h3>
          </Link>
        ))}
      </div>

      <div className="flex-col gap-3 items-center flex  ">
        <Link className="flex gap-1 items-center" to={"/settings"}>
          <IoSettingsSharp color="#A94141" fontSize={24} />
          <h3 className="text-white hidden group-hover:flex font-bold text-base">
            settings
          </h3>
        </Link>
        <div className="flex gap-1 items-center">
          <IoIosLogOut color="#A94141" fontSize={24} />
          <h3 className="text-white hidden group-hover:flex font-bold text-base">
            logout
          </h3>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
