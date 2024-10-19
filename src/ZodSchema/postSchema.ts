import { z } from "zod";

export const postSchema = z.object({
  category: z.string({ required_error: "Please select one" }),
  title: z.string({ required_error: "Please enter a valid Title" }),
  image: z.string({ required_error: "Image is required" }),
  description: z
    .string({ required_error: "Please enter a valid information" })
    .optional(),
  premium: z.boolean().default(false).optional(),
});
