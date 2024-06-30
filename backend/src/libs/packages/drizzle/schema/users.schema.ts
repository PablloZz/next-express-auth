import { pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

// TODO: Add password related fields when implement tokens logic

const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).unique().notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

export { users };
