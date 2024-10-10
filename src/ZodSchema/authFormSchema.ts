import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().trim().email({ message: "Please enter a valid email" }),
  password: z.string().trim().min(6, "Passward at last 6 character"),
});

export const registerSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  email: z.string().trim().email("Please enter a valid email"),
  password: z.string().trim().min(6, "Passward at last 6 character"),
  phone: z
    .string({ required_error: "Phone is requred" })
    .min(10, "Phone number minimun 10 digit"),
  profileImage: z.string().optional(),
  address: z.string().min(20, "Minimam 50 character required"),
});
