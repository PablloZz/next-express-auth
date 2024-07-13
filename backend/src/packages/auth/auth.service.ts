import { ExceptionMessage, TokenExpirationTime } from "@/libs/enums";
import { createToken } from "@/libs/packages/token";
import {
  type SignInUserRequestDto,
  usersService,
  type CreateUserRequestDto,
} from "@/packages/users";
import { comparePassword } from "@/libs/packages/encrypt";
import { ForbiddenError } from "@/libs/exceptions/forbiddenError.exception";
import { InternalServerError, NotFoundError } from "@/libs/exceptions";

async function signUp(user: CreateUserRequestDto) {
  const existedUser = await usersService.findByEmail(user.email);

  if (existedUser) throw new ForbiddenError(ExceptionMessage.EMAIL_IS_ALREADY_USED);

  const newUser = await usersService.create(user);

  if (!newUser) throw new InternalServerError(ExceptionMessage.INTERNAL_SERVER_ERROR);

  const token = await createToken({ userId: newUser.id }, TokenExpirationTime.ONE_DAY);

  return { token, newUser };
}

async function signIn(user: SignInUserRequestDto) {
  const existedUser = await usersService.findByEmail(user.email);

  if (!existedUser) throw new NotFoundError(ExceptionMessage.USER_NOT_FOUND);

  const { id, username, passwordHash } = existedUser;
  const isPasswordCorrect = await comparePassword(user.password, passwordHash);

  if (!isPasswordCorrect) throw new Error("Password isn't correct");

  const token = await createToken({ userId: id }, TokenExpirationTime.ONE_DAY);

  return { token, user: { id, username } };
}

export { signUp, signIn };
