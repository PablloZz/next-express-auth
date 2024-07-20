import { defineConfig } from "drizzle-kit";
import { config } from "@/libs/packages/config";

export default defineConfig({
  schema: "src/libs/packages/drizzle/schema",
  out: "src/libs/packages/drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: config.env.db.NEON_CONNECTION_STRING,
  },
  verbose: true,
  strict: true,
});
