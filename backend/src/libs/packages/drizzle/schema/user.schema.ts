import { pgTable, serial } from "drizzle-orm/pg-core";

const userTable = pgTable("user", {
  id: serial("id").primaryKey()
});

export { userTable };
