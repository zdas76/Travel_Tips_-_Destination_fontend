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

export const updateCategory = async (updateData: {
  id: string;
  data: FieldValues;
}) => {
  const { id, data } = updateData;
  console.log("data", id, data, updateData);

  try {
    const res = await nexiosInstance.put(`/category/${id}`, data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteCategory = async (id: string) => {
  try {
    const res = await nexiosInstance.delete(`/category/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
