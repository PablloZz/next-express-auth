import { type SignInRequestDto, type SignUpRequestDto } from "@/packages/auth";

type SignUpFormErrors = {
  [Field in keyof SignUpRequestDto]?: string[];
};

type SignInFormErrors = {
  [Field in keyof SignInRequestDto]?: string[];
};

export { type SignUpFormErrors, type SignInFormErrors };
