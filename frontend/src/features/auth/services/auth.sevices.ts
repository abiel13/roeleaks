"use server";
import axios from "axios";
import { toast } from "react-toastify";

export const loginUser = async (value: { email: string; password: string }) => {
  const raw = JSON.stringify(value);
  console.log(raw);
  try {
    const response = await axios
      .post("https://roleaks-api.onrender.com/api/v1/auth/login_user", raw, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .catch((err) => {
        toast.error(
          err.response.data.error ? err.response.data.error : err.message,
          { theme: "colored" }
        );
      });
    console.log(response?.data);
    return response?.data;
  } catch (error: any) {
    console.log(error.message);
  }
};

export const signupUser = async (value: {
  email: string;
  password: string;
  username: string;
}) => {
  const raw = JSON.stringify(value);
  try {
    const response = await axios
      .post("https://roleaks-api.onrender.com/api/v1/auth/create_user", raw, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .catch((err) => {
        toast.error(
          err.response.data.error ? err.response.data.error : err.message,
          { theme: "colored" }
        );
      });
    return response?.data;
  } catch (error: any) {
    console.log(error.message);
  }
};
