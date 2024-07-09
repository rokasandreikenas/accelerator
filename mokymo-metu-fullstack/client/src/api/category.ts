import { Category } from "../types/category";
import axiosInstance from "../config/axios";

export const fetchCategories = async (): Promise<Category[]> => {
  const response = await axiosInstance.get("/categories");
  return await response.data;
};
