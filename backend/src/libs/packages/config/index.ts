import "dotenv/config";
import { Config, EnvironmentSchema } from "./libs/types";

const { NEON_CONNECTION_STRING, JWT_TOKEN_SECRET } = process.env as EnvironmentSchema;

const config: Config = {
  env: {
    NEON_CONNECTION_STRING,
    JWT_TOKEN_SECRET,
  },
  encrypt: {
    PASSWORD_SALT: 10,
  },
};

export { config };
