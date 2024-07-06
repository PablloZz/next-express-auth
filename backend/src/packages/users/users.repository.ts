import { db } from "@/libs/packages/drizzle/db";
import { users } from "@/libs/packages/drizzle/schema";
import { type SaveNewUser } from "./libs/types";
import { eq } from "drizzle-orm";

async function create(user: SaveNewUser) {
  const response = await db
    .insert(users)
    .values({ ...user })
    .returning({ id: users.id, username: users.username });

  return response[0];
}

async function findByEmail(emailToSearch: string) {
  const response = await db.select().from(users).where(eq(users.email, emailToSearch));
  const [user] = response;

  if (!user) return null;

  const { createdAt, email, updatedAt, username } = user;

  return { createdAt, email, updatedAt, username };
}

export { create, findByEmail };
