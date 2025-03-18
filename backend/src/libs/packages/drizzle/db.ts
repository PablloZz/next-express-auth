import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "@/libs/packages/config";
import * as schema from "@/libs/packages/drizzle/schema";

const client = neon(config.env.NEON_CONNECTION_STRING);
const db = drizzle(client, { schema, logger: true });

export { db };
