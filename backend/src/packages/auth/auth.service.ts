import { ExceptionMessage, TokenExpirationTime } from "@/libs/enums";
import { createToken } from "@/libs/packages/token";
import {
  type SignInUserRequestDto,
  usersService,
  type CreateUserRequestDto,
} from "@/packages/users";
import { comparePassword } from "@/libs/packages/encrypt";
import { ForbiddenError } from "@/libs/exceptions/forbiddenError.exception";
import { BadRequestError, InternalServerError, NotFoundError } from "@/libs/exceptions";
import { type UserAuthResponseDto } from "./libs/types";

async function signUp(user: CreateUserRequestDto): Promise<UserAuthResponseDto> {
  const existedUser = await usersService.findByEmail(user.email);

  if (existedUser) throw new ForbiddenError(ExceptionMessage.EMAIL_IS_ALREADY_USED);

  const newUser = await usersService.create(user);

  if (!newUser) throw new InternalServerError(ExceptionMessage.INTERNAL_SERVER_ERROR);

  const token = await createToken({ userId: newUser.id }, TokenExpirationTime.ONE_DAY);

  return { token, user: newUser };
}

async function signIn(user: SignInUserRequestDto): Promise<UserAuthResponseDto> {
  const existedUser = await usersService.findByEmail(user.email);

  if (!existedUser) throw new NotFoundError(ExceptionMessage.USER_NOT_FOUND);

  const { id, username, passwordHash, email } = existedUser;
  const isPasswordCorrect = await comparePassword(user.password, passwordHash);

  if (!isPasswordCorrect) throw new BadRequestError(ExceptionMessage.INVALID_CREDENTIALS);

  const token = await createToken({ userId: id }, TokenExpirationTime.ONE_DAY);

  return { token, user: { id, username, email } };
}

export { signUp, signIn };
