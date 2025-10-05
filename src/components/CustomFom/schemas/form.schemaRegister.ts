import { z } from "zod";

export const schemaRegister = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email").min(1, "Email is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"], // this is the field that will be validated.
    message: "Passwords do not match", // this is the error message.
  });

export type FormValuesRegister = z.infer<typeof schemaRegister>;
