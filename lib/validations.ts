import { z } from "zod";

export const ContactUsSchema = z.object({
  reason: z
    .string()
    .min(2, { message: "Reason must be at least 2 characters long." })
    .max(100, { message: "Reason cannot exceed 100 characters." }),

  message: z
    .string()
    .min(20, { message: "Message must be at least 20 characters long." })
    .max(500, { message: "Message cannot exceed 500 characters." }),
  file: z
    .instanceof(File)
    .refine((file) => ["image/png", "image/jpeg"].includes(file.type), {
      message: "Only PNG or JPEG files are allowed.",
    })
    .or(z.null()),
});
