import { genSalt, hash, compare } from "bcrypt";

const PASSWORD_SALT = 10;

async function encryptPassword(password: string, passwordSalt: number) {
  const salt = await genSalt(passwordSalt);

  return await hash(password, salt);
}

async function comparePassword(password: string, hash: string) {
  return compare(password, hash);
}

export { encryptPassword, comparePassword, PASSWORD_SALT };
