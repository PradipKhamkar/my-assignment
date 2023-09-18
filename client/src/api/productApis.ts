import axios from "axios";
import { prefix } from "./apiPrefix";

export interface ProductDataInterface {
  _id?: any;
  name: string;
  image: any;
  packSize: String;
  category: any;
  mrp: String;
  status: String;
  action?: "";
}

export const addProduct = async (productData: ProductDataInterface) => {
  try {
    const { data } = await axios.post(`${prefix}/product/add`, productData);
    return data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

export const getAllProduct = async () => {
  try {
    const { data } = await axios.get(`${prefix}/product/allProduct`);
    return data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

export const updateProduct = async (productData: any) => {
  try {
    const { data } = await axios.put(
      `${prefix}/product/update/${productData?._id}`,
      productData
    );
    return data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

export const deleteProduct = async (productId: String | Number) => {
  try {
    const { data } = await axios.delete(
      `${prefix}/product/delete/${productId}`
    );
    return data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};
