import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/ReactToastify.css'

const AuthLayout = () => {
  return (
    <div className="h-screen w-full  auth_bg flex flex-col items-center justify-center">
      <Outlet />
      <ToastContainer />
    </div>
  );
};

export default AuthLayout;
