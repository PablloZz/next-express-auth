import { users } from "@/libs/packages/drizzle/schema";

type CreateUser = typeof users.$inferInsert;

type CreateUserRequestDto = {
  email: CreateUser["email"];
  username: CreateUser["username"];
  password: string;
};

export { type CreateUser, type CreateUserRequestDto };
