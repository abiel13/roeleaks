import { FC } from "react";
import { BiSolidLike } from "react-icons/bi";
import { FaComments } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";

interface LeakCardI {
  author: {
    username: string;
  };
  title: string;
}

const LeakCard: FC<LeakCardI> = ({ author, title }) => {
  return (
    <div className="w-[300px] min-h-[120px] flex flex-col justify-between bg-[#00000040] px-5 py-2 rounded-t-3xl rounded-bl-3xl">
      <div>
        <div className="flex gap-2">
          <div className="w-[30px] h-[30px] rounded-full bg-[#A94141] capitalize flex items-center justify-center font-bold">
            {author.username[0]}
          </div>
          <h3 className="font-bold ">{author.username}</h3>
        </div>
        <p>{title}</p>
      </div>
      <div className="flex gap-2 items-center">
        <div className="flex flex-col items-center ">
          <BiSolidLike color="#A94141" fontSize={21} />
          <p className="text-sm">Like</p>
        </div>
        <div className="flex flex-col items-center ">
          <FaComments color="#A94141" fontSize={21} />
          <p className="text-sm">Comment</p>
        </div>
        <div className="flex flex-col items-center ">
          <FaShare color="#A94141" fontSize={21} />
          <p className="text-sm">Share</p>
        </div>
      </div>
    </div>
  );
};

export default LeakCard;
