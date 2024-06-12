import axios from "axios";
import { Category } from "../types/categories";

const url = "http://103.75.196.169:8080/api/v1/Product/categories";

export const getAllCategories = async (): Promise<Category[]> => {
  try {
    const { data, statusText } = await axios(url);
    if (statusText !== "OK") throw new Error(statusText);
    return data;
  } catch (error: any) {
    return error.message;
  }
};

export const getCategory = async (slug: string): Promise<Category> => {
  try {
    const { data, statusText } = await axios(url);

    if (statusText !== "OK") throw new Error(statusText);

    const categories: Category[] = data.map((c: Category) => ({
      ...c,
      slug: c.title.toLowerCase().split(" ").join("-"),
    }));

    // const categories: Category[] = data;
    const category = categories.find((c) => c.slug === slug);
    return category;
  } catch (error: any) {
    return error.message;
  }
};
