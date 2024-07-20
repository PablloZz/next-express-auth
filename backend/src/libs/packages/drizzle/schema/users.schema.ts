import { pgEnum, pgTable, serial, timestamp, varchar, integer } from "drizzle-orm/pg-core";

const userType = pgEnum("userType", ["user", "admin"]);

const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).unique().notNull(),
  username: varchar("username", { length: 255 }).notNull(),
  type: userType("type").default("user").notNull(),
  passwordHash: varchar("passwordHash", { length: 255 }).notNull(),
  passwordSalt: integer("passwordSalt").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

export { users, userType };
