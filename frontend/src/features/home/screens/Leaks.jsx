import React from "react";
import RecentLeaks from "../components/RecentLeaks";
import OptionalFields from "../components/OptionalFields";

const Leaks = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className=" pl-[1rem] pr-3 flex min-h-[60dvh] w-full gap-3">
        <div
          style={{ border: "1px solid #ddda" }}
          className="flex-1 bg-light rounded-lg px-2 flex flex-col py-2 gap-2"
        >
          <h3 className="text-white font-bold text-xl">New Leak</h3>
          <textarea
            style={{ border: "1px solid #ddda" }}
            className="flex-1 bg-transparent px-2 py-2 rounded-lg"
            placeholder="paste here"
          ></textarea>
        </div>
        <RecentLeaks />
      </div>

      <div className="px-[1rem] flex flex-col gap-5">
        <p className="text-white font-bold">
          Optional Settings <span className="text-red-500">*</span>
        </p>

        <div className="flex flex-col w-full md:w-[50vw] gap-4">
          <OptionalFields name="Category" />
          <OptionalFields name="Tags" />
          <OptionalFields name="Name" />
          <OptionalFields name="Password" />
        </div>
      </div>
    </div>
  );
};

export default Leaks;
