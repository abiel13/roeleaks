import axios from "axios";

export const fetchLeaks = async (url: string) => {
  try {
    const response = await axios.get(url).catch((err) => {
      console.log(err);
    });
     return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const createLeak = async (value: any, token: string) => {
  const raw = JSON.stringify(value);
  try {
    const response = await axios
      .post("https://roleaks-api.onrender.com/api/v1/leaks", raw, {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(response?.data);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
