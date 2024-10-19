"use server";
import nexiosInstance from "@/config/nexios.config";
import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";

export const createCategory = async (data: FieldValues) => {
  try {
    const res = await nexiosInstance.post("/category/create", data);
    revalidateTag("category")
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getAllCategory = async () => {
  try {
    const res = await nexiosInstance.get("/category", { next: {
      tags: ["category"],
    }});
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const updateCategory = async (updateData: {
  id: string;
  data: FieldValues;
}) => {
  const { id, data } = updateData;
  
  try {
    const res = await nexiosInstance.put(`/category/${id}`, data);
    revalidateTag("category")
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCategory = async (id: string) => {
  try {
    const res = await nexiosInstance.delete(`/category/${id}`);
    revalidateTag("category")
    return res.data;
  } catch (error) {
    throw error;
  }
};
