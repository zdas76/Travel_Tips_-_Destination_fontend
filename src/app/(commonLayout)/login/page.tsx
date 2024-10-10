"use client";
import { loginSchema } from "@/ZodSchema/authFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import TForm from "@/components/Form/TForm";
import TInput from "@/components/Form/TInput";
import { loginUser } from "@/actions/authActions";

export default function Login() {
  const router = useRouter();
  const redirect = useSearchParams().get("redirect");

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await loginUser(data);
      if (res?.data?.success) {
        toast.success(res.data.message);
      } else if (res.error) {
        toast.error(res.error.data.message || "login in failed");
      }
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/admin");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto h-screen flex justify-center items-center flex-col">
      <div className="border  p-6 rounded-xl shadow-lg">
        <TForm
          className="space-y-5"
          onSubmit={onSubmit}
          resolver={zodResolver(loginSchema)}
        >
          <div className="w-full md:w-80">
            <TInput
              name="email"
              type="email"
              variant="bordered"
              label="Email"
              placeholder="Enter your email"
            />
          </div>

          <div className="w-full md:w-80">
            <TInput
              name="password"
              type="password"
              variant="bordered"
              label="Password"
              placeholder="Enter your password"
            />
          </div>

          <div className="w-full md:w-80">
            <Button
              type="submit"
              className="w-full bg-slate-600 text-white font-bold"
            >
              Log In
            </Button>
          </div>
        </TForm>

        <div className="mt-5 space-y-5">
          <p>
            <Link href={"/register"} className="text-blue-500 text-right">
              Forget Password
            </Link>
          </p>
          <p>
            <span className="mr-5">If you have not register yeat</span>
            <Link href={"/register"} className="text-blue-500 underline">
              Please register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
