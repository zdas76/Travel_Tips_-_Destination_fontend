"use client";
import React from "react";
import CreateCategoryModal from "../(_component)/category/Modal";
import { Divider } from "@nextui-org/react";
import { useGetCategory } from "@/hooks/admin/category";
import LoadingBlur from "@/components/shared/loading";
import { Pencil, Trash2 } from "lucide-react";
import UpdateCategoryModal from "../(_component)/category/EditeModal";

export default function CategoryPage() {
  const { data: categoris, isLoading } = useGetCategory();
  console.log(categoris);
  if (isLoading) {
    <LoadingBlur />;
  }

  const handelDelete = (data) => {};
  const handelEdite = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="flex justify-between items-center gap-3 p-5 rounded-md">
        <p className="text-xl font-bold uppercase">Creage Category</p>
        <CreateCategoryModal />
      </div>
      <Divider />
      <div>
        {categoris?.data.map((item, index) => (
          <div key={index} className="flex justify-between border-b-2 my-2">
            <p className="">
              <span className="mr-5">{index + 1}</span>
              {item.name}
            </p>
            <p className="flex gap-5">
              <span className="border bg-slate-200 p-3 rounded-full cursor-pointer">
                <Pencil
                  onClick={() => <UpdateCategoryModal {...item} />}
                  color="green"
                  size={20}
                />
              </span>
              <span className="bg-slate-200 p-3 rounded-full cursor-pointer">
                <Trash2
                  onClick={() => handelDelete(item._id)}
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
