import { Button } from "@/components/ui/button";
import React from "react";

const Discord: React.FC = () => {
  return (
    <div className="flex gap-8 flex-col">
      <h3 className="font-bold text-xl ">Join Our Discord</h3>

      <p className="font-medium text-lg w-[50%]">
        join our discord server get updated about any changes and annoucements
      </p>

      <div>
        <Button text="Join Server" />
      </div>
    </div>
  );
};

export default Discord;
