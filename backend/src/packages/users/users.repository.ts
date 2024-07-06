import { db } from "@/libs/packages/drizzle/db";
import { users } from "@/libs/packages/drizzle/schema";
import { type SaveNewUser } from "./libs/types";

async function saveNewUser(user: SaveNewUser) {
  const response = await db
    .insert(users)
    .values({ ...user })
    .returning({ id: users.id, username: users.username });

  return response[0];
}

export { saveNewUser };
