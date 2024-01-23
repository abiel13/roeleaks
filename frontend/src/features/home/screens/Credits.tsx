import { crewdata } from "@/constants/creditdata";
import React from "react";

const Credits = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-bold text-xl">Credits</h3>

      <p className="w-[90%] ">
        Heartfelt Thank You to Our Incredible Team
        <div className="my-6 block" />
        We extend our deepest gratitude to the dedicated individuals whose
        passion and hard work ought Roleaks to life. Your unwavering commitment,
        innovative spirit, and collaborative efforts have transformed ideas into
        a powerful reality.
        <div className="my-6" />
        Development Team: Your coding wizardry and problem-solving prowess have
        been the backbone of our success.
        <div className="my-6" />
        Design Team: Your creativity and attention to detail have crafted a user
        experience that is both intuitive and visually stunning.
        <div className="my-6" />
        Executive Team: Your leadership and financial acumen have paved the way
        for our journey, turning challenges into opportunities.
        <div className="my-6" />
        Together, you've turned a vision into reality. Thank you for your
        dedication, expertise, and the countless hours invested in making [Web
        App Name] exceptional. This achievement is a testament to the incredible
        synergy of our team.
        <div className="my-6" />
        With gratitude, Roleaks
      </p>

      <div className="flex gap-4 items-center ">
        {crewdata.map((item, i) => (
          <div className="w-[250px] min-h-[200px] flex flex-col bg-[#434141E5] rounded-lg items-center justify-center">
            <img
              src={item.imgUrl}
              className="w-[100px] h-[100px] rounded-full"
            />
            <p>{item.name}</p>
            <h3 className="font-bold tracking-wide">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Credits;
