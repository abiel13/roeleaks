import axios from "axios";

export const fetchLeaks = async (url: string) => {
  try {
    const response = await axios.get(url).catch((err) => {
      console.log(err);
    });
    console.log(response?.data);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
