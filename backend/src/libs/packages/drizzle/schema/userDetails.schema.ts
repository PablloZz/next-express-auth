import { pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { users } from "./users.schema";

const userDetails = pgTable("user_details", {
  id: serial("id").primaryKey(),
  username: varchar("email", { length: 255 }).notNull(),
  userId: serial("userId")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
});

export { userDetails };
