import { db } from "@/libs/packages/drizzle/db";
import { users } from "@/libs/packages/drizzle/schema";
import { type CreateUser } from "./libs/types";
import { eq } from "drizzle-orm";

async function create(user: CreateUser) {
  const response = await db
    .insert(users)
    .values({ ...user, type: "user" })
    .returning({ id: users.id, username: users.username, email: users.email, type: users.type });

  return response[0];
}

async function findByEmail(emailToSearch: string) {
  const response = await db.select().from(users).where(eq(users.email, emailToSearch));
  const [user] = response;

  if (!user) return null;

  const { email, username, passwordHash, id, type } = user;

  return { email, username, passwordHash, id, type };
}

async function findById(idToSearch: number) {
  const response = await db.select().from(users).where(eq(users.id, idToSearch));
  const [user] = response;

  if (!user) return null;

  const { email, username, passwordHash, id, type } = user;

  return { email, username, passwordHash, id, type };
}

export { create, findByEmail, findById };
