import type z from "zod";
import { type signInValidationSchema, type signUpValidationSchema } from "../validationSchemas";

type SignUpRequestDto = z.infer<typeof signUpValidationSchema>;

type SignInRequestDto = z.infer<typeof signInValidationSchema>;

export { type SignUpRequestDto, type SignInRequestDto };
