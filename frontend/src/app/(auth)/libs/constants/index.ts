import { type SignInRequestDto, type SignUpRequestDto } from "@/packages/auth";

const SIGN_UP_FORM_DEFAULT_VALUES: SignUpRequestDto = {
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
};

const SIGN_IN_FORM_DEFAULT_VALUES: SignInRequestDto = {
  email: "",
  password: "",
};

export { SIGN_UP_FORM_DEFAULT_VALUES, SIGN_IN_FORM_DEFAULT_VALUES };
