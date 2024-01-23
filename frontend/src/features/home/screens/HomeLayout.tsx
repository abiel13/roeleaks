import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

const HomeLayout = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      Welcome Home
      <Link to={'/auth/login'}>Login</Link>
      <Link to={'/auth/register'}>Signup</Link>
      <ToastContainer />
    </div>
  );
};

export default HomeLayout;
