import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../features/auth/screen/AuthLayout";
import LoginScreen from "../features/auth/screen/loginScreen";
import SignUpScreen from "../features/auth/screen/signUpScreen";
import HomeLayout from "@/features/home/screens/HomeLayout";
import Feed from "@/features/home/screens/Feed";
import New_Leak from "@/features/home/screens/New_Leak";
import Credits from "@/features/home/screens/Credits";
import Discord from "@/features/home/screens/Discord";

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
    children: [
      {
        path: "",
        element: <Feed />,
      },
      {
        path: "create-leak",
        element: <New_Leak />,
      },
      {
        path: "credits",
        element: <Credits />,
      },
      {
        path: "discord_liveserver",
        element: <Discord />,
      },
    ],
  },
]);
