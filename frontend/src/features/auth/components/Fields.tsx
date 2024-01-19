import React from "react";

const Fields = ({ title, placeholder }:any) => {
  return (
    <div className="flex flex-col gap-3">
      <p className="capitalize text-white font-bold">{title}</p>
      <input className="bg-[#8A8A8A70] px-4 py-3 rounded-lg border-none outline-[#00ffff] " placeholder={placeholder} type="text" />
    </div>
  );
};

export default Fields;
