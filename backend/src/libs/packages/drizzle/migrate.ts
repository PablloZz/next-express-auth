import { migrate } from "drizzle-orm/neon-http/migrator";
import { db } from "./db";

async function main() {
  try {
    console.log("Migration started...");
    await migrate(db, { migrationsFolder: "src/libs/packages/drizzle/migrations" });
    console.log("Migration completed");
  } catch (error) {
    console.error("Error during migration:", error);
    process.exit(1);
  }
}

main();
