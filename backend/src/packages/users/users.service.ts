import { encryptPassword } from "@/libs/packages/encrypt";
import { saveNewUser } from "./users.repository";
import { type CreateNewUserRequestDto } from "./libs/types";
import { config } from "@/libs/packages/config";

async function create(user: CreateNewUserRequestDto) {
  const hashedPassword = await encryptPassword(user.password, config.encrypt.PASSWORD_SALT);
  const newUser = {
    ...user,
    passwordHash: hashedPassword,
    passwordSalt: config.encrypt.PASSWORD_SALT,
  };

  return await saveNewUser(newUser);
}

export { create };
