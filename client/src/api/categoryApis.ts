import axios from "axios";
import { prefix } from "./apiPrefix";

export interface CategoryDataInterface {
  _id?: any;
  name: string;
  description: String;
  status: String;
}

export const addCategory = async (categoryData: CategoryDataInterface) => {
  try {
    const { data } = await axios.post(`${prefix}/category/add`, categoryData);
    return data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

export const getAllCategory = async () => {
  try {
    const { data } = await axios.get(`${prefix}/category/allCategory`);
    return data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

export const updateCategory = async (categoryData: any) => {
  try {
    const { data } = await axios.put(
      `${prefix}/category/update/${categoryData?._id}`,
      categoryData
    );
    return data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

export const deleteCategory = async (categoryId: String | Number) => {
  try {
    const { data } = await axios.delete(
      `${prefix}/category/delete/${categoryId}`
    );
    return data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};
