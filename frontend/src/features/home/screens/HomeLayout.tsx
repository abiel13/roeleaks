import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import LeftSideBar from "../components/LeftSideBar";
import Topbar from "../components/Topbar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="bg-[#252525] min-h-screen text-white ">
      <main className="flex ">
        <LeftSideBar />
        <div className="flex-1 min-h-screen  px-4 py-4 items-center flex flex-col">
          <Topbar />

          <div className="mt-[2rem] w-[80%]">
            <Outlet />
          </div>
        </div>
      </main>
      <ToastContainer />
    </div>
  );
};

export default HomeLayout;
