"use server";

import nexiosInstance from "@/config/nexios.config";
import { revalidateTag } from "next/cache";

import { FieldValues } from "react-hook-form";

export const createPost = async (data: FieldValues) => {
  try {
    const res = await nexiosInstance.post("/post/create", data, );
    revalidateTag("post")
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getAllPost = async () => {
  try {
    const res = await nexiosInstance.get("/post", { cache: "no-store", next: {
      tags: ["post"]
    } });

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getUserPost = async (email: string) => {
  try {
    const res = await nexiosInstance.get(`/post/${email}`, {
      cache: "no-store",
      next: {
        tags: ["post"]
      }
    });

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getLoginUserPost = async () => {
  try {
    const res = await nexiosInstance.get(`/post/login-user`, {
      cache: "no-store",
    });

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getPostById = async (id: string) => {
  try {
    const res = await nexiosInstance.get(`/post/${id}`, { next: {
      tags: ["post"],
    }});
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
