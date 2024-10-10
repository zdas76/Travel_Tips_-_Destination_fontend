/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Input } from "@nextui-org/react";
import { useFormContext } from "react-hook-form";

interface IProps {
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "sm" | "md" | "lg";
  required?: boolean;
  type?: string;
  label: string;
  name: string;
  placeholder?: string;
  endContent?: any;
}

export default function TInput({
  variant = "bordered",
  size = "md",
  required = false,
  type = "text",
  label,
  name,
  placeholder,
  endContent,
}: IProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Input
      {...register(name)}
      errorMessage={errors[name] ? (errors[name].message as string) : ""}
      isInvalid={!!errors[name]}
      label={label}
      required={required}
      size={size}
      type={type}
      variant={variant}
      placeholder={placeholder}
      endContent={endContent}
    />
  );
}
