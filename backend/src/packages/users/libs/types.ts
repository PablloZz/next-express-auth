import { users } from "@/libs/packages/drizzle/schema";

type CreateUser = typeof users.$inferInsert;

type CreateUserRequestDto = {
  email: CreateUser["email"];
  username: CreateUser["username"];
  password: string;
};

type SignInUserRequestDto = {
  email: CreateUser["email"];
  password: string;
};

type UserDetails = {
  id: NonNullable<CreateUser["id"]>;
  email: NonNullable<CreateUser["email"]>;
  username: CreateUser["username"];
  type: NonNullable<CreateUser["type"]>;
};

export { type CreateUser, type CreateUserRequestDto, type SignInUserRequestDto, type UserDetails };
