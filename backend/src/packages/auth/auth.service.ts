import { TokenExpirationTime } from "@/libs/enums";
import { createToken } from "@/libs/packages/token";
import { usersService, type CreateNewUserRequestDto } from "@/packages/users";

async function signUp(user: CreateNewUserRequestDto) {
  const existedUser = await usersService.findByEmail(user.email);

  if (existedUser) throw new Error("User with this email already exists");

  const newUser = await usersService.create(user);

  if (!newUser) throw new Error("Sign up failed");

  const token = createToken({ userId: newUser.id }, TokenExpirationTime.ONE_DAY);

  return { token, newUser };
}

export { signUp };
