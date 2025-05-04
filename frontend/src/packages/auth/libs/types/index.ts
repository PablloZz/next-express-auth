import type z from "zod";
import { type signInValidationSchema, type signUpValidationSchema } from "../validationSchemas";

type SignUpRequestDto = z.infer<typeof signUpValidationSchema>;

type SignInRequestDto = z.infer<typeof signInValidationSchema>;

type UserDetails = {
  id: number;
  email: string;
  username: string;
  type: string;
};

type AuthResponseDto = { token: string; user: UserDetails };

export { type SignUpRequestDto, type SignInRequestDto, type AuthResponseDto, type UserDetails };
