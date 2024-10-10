"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */
import nexiosInstance from "@/config/nexios.config";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

type TData = {
  data: {
    accessToken: string;
    refreshToken: string;
  };
  success: boolean;
  message: string;
};

type TLoginResponse = {
  data?: {
    accessToken: string;
    message: string;
    refreshToken: string;
    success: boolean;
  };
  error?: {
    data: any;
    success: boolean;
  };
};

export const loginUser = async (fromdata: FieldValues): Promise<any> => {
  try {
    const res: TLoginResponse = await nexiosInstance.post(
      "/auth/login",
      fromdata
    );

    if (res.data) {
      cookies().set("accessToken", res.data.accessToken);
      cookies().set("refreshToken", res.data.refreshToken);
    }
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const logOutUser = async () => {
  cookies().delete("accessToken");
  cookies().delete("refreshToken");
};

export const registerUser = async (fieldData: FieldValues): Promise<any> => {
  try {
    const { data }: { data: TData } = await nexiosInstance.post(
      "/auth/register",
      fieldData
    );

    if (data?.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }
    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

export const getCurrentUser = async () => {
  const accessToken = cookies().get("accessToken")?.value;

  let decodedToken = null;

  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);
    return {
      _id: decodedToken._id,
      name: decodedToken.name,
      email: decodedToken.email,
      password: decodedToken.password,
      phone: decodedToken.phone,
      profileImage: decodedToken.profileImage,
      address: decodedToken.address,
      role: decodedToken.role,
      status: decodedToken.status,
      isDeleted: decodedToken.isDeleted,
    };
  }

  return decodedToken;
};
