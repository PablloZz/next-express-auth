import { type SignInFormValues, type SignUpFormValues } from "../types";

const SIGN_UP_FORM_DEFAULT_VALUES: SignUpFormValues = {
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
};

const SIGN_IN_FORM_DEFAULT_VALUES: SignInFormValues = {
  email: "",
  password: "",
};

export { SIGN_UP_FORM_DEFAULT_VALUES, SIGN_IN_FORM_DEFAULT_VALUES };
