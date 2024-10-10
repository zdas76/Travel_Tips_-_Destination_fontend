"use server";
import nexiosInstance from "@/config/nexios.config";
import { FieldValues } from "react-hook-form";

export const createCategory = async (data: FieldValues) => {
  try {
    const res = await nexiosInstance.post("/category/create", data);

    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getAllCategory = async () => {
  try {
    const res = await nexiosInstance.get("/category");
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
