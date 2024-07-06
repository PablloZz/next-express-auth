import { pgTable, serial, timestamp, varchar, integer } from "drizzle-orm/pg-core";

const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).unique().notNull(),
  username: varchar("username", { length: 255 }).notNull(),
  passwordHash: varchar("passwordHash", { length: 255 }).notNull(),
  passwordSalt: integer("passwordSalt").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

export { users };
