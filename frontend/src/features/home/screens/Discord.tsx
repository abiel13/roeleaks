import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const Discord: React.FC = () => {
  return (
    <div className="flex gap-8 flex-col">
      <h3 className="font-bold text-xl ">Join Our Discord</h3>

      <p className="font-medium text-lg w-[50%]">
        join our discord server get updated about any changes and annoucements
      </p>

      <Link to={'https://www.discord.com/invite/roleaks'}>
        <Button text="Join Server" />
      </Link>
    </div>
  );
};

export default Discord;
