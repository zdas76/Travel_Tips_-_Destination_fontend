import { z } from "zod";

export const categorySchema = z.object({
  name: z.string({ required_error: "Please enter a valid name" }).trim(),
});
