import { encryptPassword, PASSWORD_SALT } from "@/libs/packages/encrypt";
import { saveNewUser } from "./users.repository";
import { type CreateNewUserRequestDto } from "./libs/types";

async function create(user: CreateNewUserRequestDto) {
  const hashedPassword = await encryptPassword(user.password, PASSWORD_SALT);
  const newUser = { ...user, passwordHash: hashedPassword, passwordSalt: PASSWORD_SALT };

  return await saveNewUser(newUser);
}

export { create };
