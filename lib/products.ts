import axios from "axios";
import { Product } from "../types/products";

const url = "http://103.75.196.169:8080/api/v1/Product/plp/0/items";

// Get All Products
export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const { data, statusText } = await axios(url);
    if (statusText !== "OK") throw new Error(statusText);

    return data;
  } catch (error: any) {
    return error.message;
  }
};

// Get Single Product
export const getProduct = async (slug: string): Promise<Product> => {
  try {
    const { data, statusText } = await axios(url);
    if (statusText !== "OK") throw new Error(statusText);

    const products: Product[] = data.map((p: Product) => ({
      ...p,
      slug: p.title.toLowerCase().split(" ").join("-"),
    }));

    const product = products.find((p) => p.slug === slug);
    return product;
  } catch (error: any) {
    return error.message;
  }
};
