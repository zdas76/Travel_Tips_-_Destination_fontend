/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
  Button,
  Checkbox,
  Divider,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useGetCategory } from "@/hooks/admin/category";
import LoadingBlur from "@/components/shared/loading";
import { TCategoty } from "@/types/admin/category";
import React, { useState } from "react";
import { useCreatePost } from "@/hooks/userPost/UserPost";
import { uploadImagetoImgdb } from "@/utils/uploadImagetoImgdb";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { modules } from "./Tools";

export default function PostForm() {
  const [titelImage, setTitelImage] = useState<File>();
  const [value, setValue] = useState("");
  const { data: categoris, isLoading } = useGetCategory();
  const { mutate: handleCreatePost } = useCreatePost();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({});

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const res = await uploadImagetoImgdb(titelImage as File);

    if (!res.success) {
      return "Image not uploaded please try agen";
    }

    const postData = {
      ...data,
      description: value,
      image: res.data.display_url,
    };

    handleCreatePost(postData);
    setValue("");
    reset();
  };
  if (isLoading) {
    <LoadingBlur />;
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col mb-8 gap-6"
      >
        <Select
          {...register("category")}
          variant="underlined"
          label="Select a categori"
          className="w-full"
        >
          {categoris?.data.map((category: TCategoty) => (
            <SelectItem key={category.name}>{category.name}</SelectItem>
          ))}
        </Select>
        <Input
          {...register("title")}
          type="name"
          variant="underlined"
          label="Title"
          placeholder="Enter category name"
          errorMessage={errors.postTitle && `${errors?.name?.message}`}
        />
        <Input
          type="file"
          variant="underlined"
          label="Title"
          placeholder="Enter category name"
          onChange={(e) =>
            setTitelImage(e.target.files?.[0] as unknown as File)
          }
        />
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          modules={modules}
        />

        <div>
          <Checkbox color="success" {...register("premium")}>
            As Premium
          </Checkbox>
        </div>
        <Divider />
        <Button color="primary" type="submit">
          Save
        </Button>
      </form>
    </div>
  );
}
