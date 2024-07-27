import { config } from "@/libs/packages/config";
import { type AuthResponseDto, type SignUpRequestDto } from "./libs/types";
import { ApiPath, HttpContentType, HttpHeaderKey, HttpMethod } from "@/libs/enums";
import { AuthApiPath } from "./libs/enums";
import { parseResponse } from "@/libs/helpers";

async function signUp(
  newUser: Omit<SignUpRequestDto, "confirmPassword">,
): Promise<AuthResponseDto> {
  const response = await fetch(`${config.env.api.PATH}${ApiPath.AUTH}${AuthApiPath.SIGN_UP}`, {
    method: HttpMethod.POST,
    headers: {
      [HttpHeaderKey.CONTENT_TYPE]: HttpContentType.APPLICATION_JSON,
    },
    body: JSON.stringify(newUser),
  });

  return await parseResponse<AuthResponseDto>(response);
}

export { type SignUpRequestDto, type SignInRequestDto } from "./libs/types";
export { signUpValidationSchema, signInValidationSchema } from "./libs/validationSchemas";
export { signUp };
