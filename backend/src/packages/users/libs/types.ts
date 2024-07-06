import { users } from "@/libs/packages/drizzle/schema";

type SaveNewUser = typeof users.$inferInsert;

export { type SaveNewUser };
