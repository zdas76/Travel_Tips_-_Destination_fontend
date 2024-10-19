"use server";

import nexiosInstance from "@/config/nexios.config";

export const getLoginUser = async () => {
  try {
    const res = await nexiosInstance.get("/user/profile");
    return res.data;
  } catch (error) {
    throw error;
  }
};
