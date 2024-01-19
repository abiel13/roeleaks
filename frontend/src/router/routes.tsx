import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../features/auth/screen/AuthLayout";
import LoginScreen from "../features/auth/screen/loginScreen";
import SignUpScreen from "../features/auth/screen/signUpScreen";

export const routes = createBrowserRouter([
  {
    path: "/",
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
]);
