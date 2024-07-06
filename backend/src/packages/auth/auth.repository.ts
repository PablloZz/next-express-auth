import { db } from "@/libs/packages/drizzle/db";
import { type NewUser } from "./libs/types";
import { users } from "@/libs/packages/drizzle/schema";

async function signUp(user: NewUser) {
  const response = await db
    .insert(users)
    .values({ ...user })
    .returning({ id: users.id });

  return response[0]?.id;
}

export { signUp };
