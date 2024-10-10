/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  createCategory,
  deleteCategory,
  getAllCategory,
  updateCategory,
} from "@/actions/categotyAction";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useCreateCategory = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["CREATE_CATEGORY"],
    mutationFn: async (data) => await createCategory(data),
    onSuccess: () => {
      toast.success("Category create successful");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useUpdateCategory = () => {
  return useMutation<any, Error, { id: string; data: FieldValues }>({
    mutationKey: ["CREATE_CATEGORY"],
    mutationFn: async (data) => await updateCategory(data),
    onSuccess: () => {
      toast.success("Category update successful");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useDeleteCategory = () => {
  return useMutation<any, Error, string>({
    mutationKey: ["CREATE_CATEGORY"],
    mutationFn: async (data) => await deleteCategory(data),
    onSuccess: () => {
      toast.success("Category delete successful");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useGetCategory = () => {
  return useQuery({
    queryKey: ["GET_CATEGORY"],
    queryFn: async () => await getAllCategory(),
  });
};
