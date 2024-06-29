import { defineConfig } from "drizzle-kit";
import { config } from "@/libs/packages/config";

const drizzleConfig = defineConfig({
  schema: "src/libs/packages/drizzle/schema.ts",
  out: "src/libs/packages/drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: config.env.NEON_CONNECTION_STRING,
  },
  verbose: true,
  strict: true,
});

export { drizzleConfig };
