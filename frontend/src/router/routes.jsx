import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../features/auth/screen/AuthLayout";
import LoginScreen from "../features/auth/screen/loginScreen";
import SignUpScreen from "../features/auth/screen/signUpScreen";
import Home from "../features/home/screens/Home";
import Leaks from "../features/home/screens/Leaks";

export const routes = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginScreen />,
      },
      {
        path: "register",
        element: <SignUpScreen />,
      },
    ],
  },
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "",
        element: <Leaks />,
      },
    ],
  },
]);
