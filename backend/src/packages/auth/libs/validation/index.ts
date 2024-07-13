import z from "zod";

const signUpValidationSchema = z.object({
  email: z.string().email(),
  username: z.string(),
  password: z.string(),
});

export { signUpValidationSchema };
