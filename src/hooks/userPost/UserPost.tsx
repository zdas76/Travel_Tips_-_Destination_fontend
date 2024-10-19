/* eslint-disable @typescript-eslint/no-explicit-any */

import { createComments, updateComments } from "@/actions/comments";
import {
  createPost,
  getAllPost,
  getLoginUserPost,
} from "@/actions/UserPostAction";
import { TComents, TComentsUpdate } from "@/types/post";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useCreatePost = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["CREATE_POST"],
    mutationFn: async (data) => await createPost(data),
    onSuccess: () => {
      toast.success("Post create successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useGetPost = () => {
  return useQuery({
    queryKey: ["GET_POST"],
    queryFn: async () => await getAllPost(),
  });
};

export const useGetLoginUserPost = () => {
  return useQuery({
    queryKey: ["GET_LOGINUSERPOST"],
    queryFn: async () => await getLoginUserPost(),
  });
};


export const useCreateComment = () => {
  return useMutation<any, Error, {id: string, comment:TComents}, FieldValues >({
    mutationKey: ["CREATE_COMMENT"],
    mutationFn: async (data) => await createComments(data),
    onSuccess: () => {
      toast.success("Post create successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useUpdateComment = () => {
  return useMutation<any, Error, {id: string, comment: TComentsUpdate} >({
    mutationKey: ["UPDATE_COMMENT"],
    mutationFn: async (data) => await updateComments(data),
    onSuccess: () => {
      toast.success("Post updated successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};