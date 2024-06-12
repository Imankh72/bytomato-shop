import axios from "axios";
import { Banner } from "../types/banners";

const url = "http://103.75.196.169:8080/api/v1/Banner/banners";

export const getAllBanners = async (): Promise<Banner[]> => {
  try {
    const { data, statusText } = await axios(url);
    if (statusText !== "OK") throw new Error(statusText);

    return data;
  } catch (error: any) {
    return error.message;
  }
};
