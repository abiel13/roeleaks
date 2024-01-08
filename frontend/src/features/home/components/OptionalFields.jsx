import React from "react";

const OptionalFields = ({ name }) => {
  return (
    <div className="flex gap-4 ">
      <p className="text-primaryText basis-1/3">{name} :</p>
      <input
        type="text"
        className="bg-light border-none outline rounded-lg text-primaryText px-4 py-1  flex-1"
      />
    </div>
  );
};

export default OptionalFields;
