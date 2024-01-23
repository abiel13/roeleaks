import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

const HomeLayout = () => {
  return (
    <div className="bg-black min-h-screen text-white py-4">
      
      <Link className="bg-gray-400 mx-4  rounded-lg px-3 py-2  text-black"  to={'/auth/login'}>Login</Link>
      <Link  className="bg-gray-400 rounded-lg px-3 py-2 mt-3  text-black" to={'/auth/register'}>Signup</Link>
      <ToastContainer />
    </div>
  );
};

export default HomeLayout;
