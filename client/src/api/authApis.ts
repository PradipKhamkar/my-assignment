import axios from "axios";
import { prefix } from "./apiPrefix";

//LOGIN USER
export const LoginUser = async (email: string, password: any) => {
  try {
    const { data } = await axios.post(`${prefix}/user/login`, {
      email,
      password,
    });
    console.log(data);
    return data;
  } catch (error: any) {
    console.log(error);
    throw error?.response?.data?.message;
  }
};

// GET LOGGED USER
export const getLoggedUser = async () => {
  try {
    const { data } = await axios.get(`${prefix}/user/getloggedUser`);
    return data;
  } catch (error: any) {
    console.log(error);
    throw error?.response?.data?.message;
  }
};

// LOG OUT USER
export const logOut = async () => {
  try {
    const { data } = await axios.get(`${prefix}/user/logout`);
    return data;
  } catch (error: any) {
    throw error?.response?.message;
  }
};
