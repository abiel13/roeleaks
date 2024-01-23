import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../features/auth/screen/AuthLayout";
import LoginScreen from "../features/auth/screen/loginScreen";
import SignUpScreen from "../features/auth/screen/signUpScreen";
import HomeLayout from "@/features/home/screens/HomeLayout";

export const routes = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "",
        element: <LoginScreen />,
      },
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
    element: <HomeLayout />,
  },
]);
