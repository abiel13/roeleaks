import React from "react";
import logo from "../../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-light gap-3">
      <div className="flex gap-3 items-center">
        <div className="w-[55px] h-[55px]">
          <img src={logo} alt="" />
        </div>
        <h3 className="font-sans text-lg font-bold text-white">RoLeaks</h3>
      </div>

      <div className="flex flex-1 gap-3 items-center">
        {["Credits", "Live Chat", "Discord", "Trending"].map((item, i) => (
          <div
            className="text-primaryText flex items-center gap-2 cursor-pointer"
            key={i}
          >
            <p>{item}</p>
            <div className="w-[1px] h-[17px] bg-primaryText " />
          </div>
        ))}
        <div>
          <input
            type="text"
            placeholder="Search..."
            className="bg-primary px-3 py-1 rounded-lg text-primaryText"
          />
        </div>
      </div>

      <div className="flex gap-2">
        <button className="px-6 py-2 rounded-lg text-primaryText border-2 border-white bg-transparent">
          Login in
        </button>
        <button className="px-6 py-2 rounded-lg text-primary bg-white">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
