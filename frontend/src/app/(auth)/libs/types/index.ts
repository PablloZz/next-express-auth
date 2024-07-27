import type z from "zod";
import { type signInValidationSchema, type signUpValidationSchema } from "../validationSchemas";

type SignUpFormValues = z.infer<typeof signUpValidationSchema>;

type SignUpFormErrors = {
  [Field in keyof SignUpFormValues]?: string[];
};

type SignInFormValues = z.infer<typeof signInValidationSchema>;

type SignInFormErrors = {
  [Field in keyof SignInFormValues]?: string[];
};

export {
  type SignUpFormValues,
  type SignUpFormErrors,
  type SignInFormValues,
  type SignInFormErrors,
};
