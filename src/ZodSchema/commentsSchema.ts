import { z } from "zod";

export const commentSchema = z.object({
    comment: z.string({ required_error: "Please put your comments here" }).trim(),
    userId: z.string({ required_error: "user is required"})
});
