import React from "react";

const RecentLeaks = () => {
  return (
    <div
      style={{ border: "1px solid #ddda" }}
      className="basis-1/4 bg-light rounded-md px-2 flex flex-col py-2 gap-2"
    >
      <h3 className="text-white font-bold text-xl">Recent Leaks</h3>
      <div
        style={{ border: "1px solid #ddda" }}
        className="flex-1 bg-transparent px-2 py-2 rounded-lg"
      ></div>
    </div>
  );
};

export default RecentLeaks;
