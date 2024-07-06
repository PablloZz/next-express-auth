import { users } from "@/libs/packages/drizzle/schema";

type SaveNewUser = typeof users.$inferInsert;

type CreateNewUserRequestDto = {
  email: SaveNewUser["email"];
  username: SaveNewUser["username"];
  password: string;
};

export { type SaveNewUser, type CreateNewUserRequestDto };
