import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const New_Leak: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-bold text-xl">Create New Leak</h3>

      <div className="w-[50%] flex flex-col gap-3">
        <h4 className="font-bold text-xl">Title of Leak</h4>
        <Input className="border-white" placeholder="leak title" />
      </div>

      <div className="w-[50%] flex flex-col gap-3">
        <h4 className="font-bold text-xl">Leak</h4>
        <Textarea rows={8} placeholder="Paste Your Leak" />
      </div>
      <div>
        <Button text="Create Leak" />
      </div>
    </div>
  );
};

export default New_Leak;
