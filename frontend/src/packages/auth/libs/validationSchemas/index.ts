import z from "zod";

const signUpValidationSchema = z
  .object({
    email: z.string().email(),
    username: z.string().min(4),
    password: z.string().min(5),
    confirmPassword: z.string().min(5),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "Passwords mismatch",
    path: ["confirmPassword"],
  });

const signInValidationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

export { signUpValidationSchema, signInValidationSchema };
