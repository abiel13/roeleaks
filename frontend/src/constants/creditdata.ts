import credit1 from "@/assets/credit1.png";
import credit2 from "@/assets/credit2.png";
import credit3 from "@/assets/credit3.png";

type CreditI = {
  name: string;
  title: string;
  imgUrl: string;
};

export const crewdata: CreditI[] = [
  {
    name: "Percs",
    title: "C E O",
    imgUrl: credit3,
  },
  {
    name: "Dom",
    title: "C F O",
    imgUrl: credit2,
  },
  {
    name: "Oxbaracuda",
    title: "Lead Developer",
    imgUrl: credit1,
  },
];
