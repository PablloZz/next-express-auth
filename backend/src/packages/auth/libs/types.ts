import { users } from "@/libs/packages/drizzle/schema";

type NewUser = typeof users.$inferInsert;

export { type NewUser };
