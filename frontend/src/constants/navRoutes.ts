import { IconType } from "react-icons";
import { FaHome } from "react-icons/fa";
import { FaDiscord, FaFeatherPointed } from "react-icons/fa6";
import { IoMdAddCircle } from "react-icons/io";
import { MdMessage } from "react-icons/md";

type TNavRoutes = {
  title: string;
  Icon: IconType;
  href: string;
};

export const Navroutes: TNavRoutes[] = [
  {
    title: "Feed",
    Icon: FaHome,
    href: "/",
  },
  {
    title: "Create Leak",
    Icon: IoMdAddCircle,
    href: "/create-leak",
  },
  {
    title: "Discord",
    Icon: FaDiscord,
    href: "/discord_liveserver",
  },
  {
    title: "Live Chat",
    Icon: MdMessage,
    href: "",
  },
  {
    title: "Credits",
    Icon: FaFeatherPointed,
    href: "/credits",
  },
];
