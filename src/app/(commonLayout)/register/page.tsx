"use client";
import LoadingBlur from "@/components/shared/loading";
import { useUserREgistration } from "@/hooks/auth.hooks";
import { registerSchema } from "@/ZodSchema/authFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export default function RegisterPage() {
  const { mutate: handelUserRegister, isPending } = useUserREgistration();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const formdata = {
      ...data,
      profileImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    };
    handelUserRegister(formdata);

    reset();
  };
  if (isPending) {
    <LoadingBlur />;
  }
  return (
    <div className="container mx-auto">
      <div className="w-full md:w-[500px] mx-auto mt-12 border p-5 rounded-xl shadow-xl">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-wrap mb-8 gap-6 "
        >
          <Input
            {...register("name")}
            type="name"
            variant="underlined"
            label="Name"
            placeholder="Enter your Name"
            isInvalid={true}
            errorMessage={errors.name && `${errors?.name?.message}`}
          />

          <Input
            {...register("email")}
            type="email"
            variant="underlined"
            label="Email"
            placeholder="Enter your email"
            isInvalid={true}
            errorMessage={errors.email && `${errors?.email?.message}`}
          />

          <Input
            {...register("password")}
            type="password"
            variant="underlined"
            label="Password"
            placeholder="Enter your Password"
            isInvalid={true}
            errorMessage={errors.password && `${errors?.password?.message}`}
          />

          <Input
            {...register("phone")}
            type="text"
            variant="underlined"
            label="Phone No."
            placeholder="Enter your Phone No."
            isInvalid={true}
            errorMessage={errors.phone && `${errors?.phone?.message}`}
          />

          <Input
            {...register("address")}
            type="text"
            variant="underlined"
            label="Address"
            placeholder="Enter your Address"
            isInvalid={true}
            errorMessage={errors.address && `${errors?.address?.message}`}
          />

          {/* <Input
            {...register("profileImage")}
            type="file"
            variant="underlined"
            label="Profile Image"
            placeholder="Select your Profile Image"
            color="warning"
            errorMessage={
              errors.profileImage && `${errors?.profileImage?.message}`
            }
          /> */}

          <Button
            className="w-full bg-slate-500 text-white font-bold"
            type="submit"
          >
            Register
          </Button>
        </form>

        <div>
          <p className="flex justify-between">
            <span>If you have already register</span>
            <Link href={"/login"} className="text-blue-500 underline">
              Please Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
