"use client";
import React from "react";
import CreateCategoryModal from "../(_component)/category/Modal";
import { Divider } from "@nextui-org/react";
import { useDeleteCategory, useGetCategory } from "@/hooks/admin/category";
import LoadingBlur from "@/components/shared/loading";
import { Trash2 } from "lucide-react";
import UpdateCategoryModal from "../(_component)/category/EditeModal";
import { TCategoty } from "@/types/admin/category";

export default function CategoryPage() {
  const { data: categorisData, isLoading } = useGetCategory();

  const { mutate: handeldelete } = useDeleteCategory();
  const Categories = categorisData?.data;

  if (isLoading) {
    <LoadingBlur />;
  }

  const handelDeleteCategory = (id: string) => {
    handeldelete(id);
  };

  return (
    <div>
      <div className="flex justify-between items-center gap-3 p-5 rounded-md">
        <p className="text-xl font-bold uppercase">Creage Category</p>
        <CreateCategoryModal />
      </div>
      <Divider />
      <div>
        {Categories?.data?.map((item: TCategoty, index: number) => (
          <div key={index} className="flex justify-between border-b-2 my-2">
            <p className="">
              <span className="mr-5">{index + 1}</span>
              {item.name}
            </p>
            <p className="flex gap-5">
              <span className="border bg-slate-200 p-3 rounded-full cursor-pointer">
                <UpdateCategoryModal {...item} />
              </span>
              <span className="bg-slate-200 p-3 rounded-full cursor-pointer">
                <Trash2
                  onClick={() => handelDeleteCategory(item._id as string)}
                  color="red"
                  size={20}
                />
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
