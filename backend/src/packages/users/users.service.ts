import { encryptPassword } from "@/libs/packages/encrypt";
import * as usersRepository from "./users.repository";
import { type CreateUserRequestDto } from "./libs/types";
import { config } from "@/libs/packages/config";

async function create(user: CreateUserRequestDto) {
  const hashedPassword = await encryptPassword(user.password, config.encrypt.PASSWORD_SALT);
  const newUser = {
    ...user,
    passwordHash: hashedPassword,
    passwordSalt: config.encrypt.PASSWORD_SALT,
  };

  return await usersRepository.create(newUser);
}

async function findByEmail(email: string) {
  return await usersRepository.findByEmail(email);
}

export { create, findByEmail };
