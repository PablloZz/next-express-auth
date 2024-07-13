import z from "zod";

const signUpValidationSchema = z.object({
  email: z.string().email(),
  username: z.string(),
  password: z.string(),
});

const signInValidationSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export { signInValidationSchema, signUpValidationSchema };
