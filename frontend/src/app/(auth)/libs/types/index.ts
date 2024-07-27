import type z from "zod";
import type { signUpValidationSchema } from "../validationSchemas";

type SignUpFormValues = z.infer<typeof signUpValidationSchema>;

type SignUpFormErrors = {
  [Field in keyof SignUpFormValues]?: string[];
};

export { type SignUpFormValues, type SignUpFormErrors };
