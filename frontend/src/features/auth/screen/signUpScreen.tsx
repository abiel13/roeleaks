import Fields from "../components/Fields";
import { Link } from "react-router-dom";

const SignUpScreen = () => {
  return (
    <div className="w-[30%] bg-[#D9D9D929] rounded-lg  px-5 py-3 min-h-[456px] flex flex-col items-center filter">
      <h3 className="text-[#A9A9A9] text-[2rem] font-bold">Welcome Back</h3>
      <div className="flex flex-col gap-4 w-full mt-[1rem]">
        <Fields title="Username" placeholder="Enter Username" />
        <Fields title="Email" placeholder="Enter Email" />
        <Fields title="Password" placeholder="Enter Password" />
        <button className="py-2 border-[1px] text-[#FFFFFF7D] font-bold text-xl  rounded-lg border-[#00FFFF]">
          Register
        </button>
      </div>
      <div className="mt-[1rem] flex flex-col  gap-1 w-full ">
        <p className="text-white font-bold">Already have an account</p>
        <Link className="text-[#00ffff] font-medium text-lg " to={"/login"}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUpScreen;
