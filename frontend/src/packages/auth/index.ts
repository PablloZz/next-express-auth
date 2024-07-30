import { config } from "@/libs/packages/config";
import { SignInRequestDto, type AuthResponseDto, type SignUpRequestDto } from "./libs/types";
import { ApiPath, HttpCode, HttpContentType, HttpHeaderKey, HttpMethod } from "@/libs/enums";
import { AuthApiPath } from "./libs/enums";
import { parseResponse } from "@/libs/helpers";
import { toast } from "react-toastify";

async function signUp(
  newUser: Omit<SignUpRequestDto, "confirmPassword">,
): Promise<AuthResponseDto | void> {
  const response = await fetch(`${config.env.api.PATH}${ApiPath.AUTH}${AuthApiPath.SIGN_UP}`, {
    method: HttpMethod.POST,
    headers: {
      [HttpHeaderKey.CONTENT_TYPE]: HttpContentType.APPLICATION_JSON,
    },
    body: JSON.stringify(newUser),
  });

  if (response.status !== HttpCode.SUCCESS) {
    toast.error(response.statusText);
    return;
  }

  return await parseResponse<AuthResponseDto>(response);
}

async function signIn(credentials: SignInRequestDto): Promise<AuthResponseDto | void> {
  const response = await fetch(`${config.env.api.PATH}${ApiPath.AUTH}${AuthApiPath.SIGN_IN}`, {
    method: HttpMethod.POST,
    headers: { [HttpHeaderKey.CONTENT_TYPE]: HttpContentType.APPLICATION_JSON },
    body: JSON.stringify(credentials),
  });

  if (response.status !== HttpCode.SUCCESS) {
    toast.error(response.statusText);
    return;
  }

  return await parseResponse<AuthResponseDto>(response);
}

export { type SignUpRequestDto, type SignInRequestDto, type UserDetails } from "./libs/types";
export { signUpValidationSchema, signInValidationSchema } from "./libs/validationSchemas";
export { signUp, signIn };
