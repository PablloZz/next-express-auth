import "dotenv/config";
import { Config } from "./libs/types";

const { NEON_CONNECTION_STRING, JWT_TOKEN_SECRET, PORT } = process.env;

const config: Config = {
  env: {
    db: { NEON_CONNECTION_STRING: NEON_CONNECTION_STRING! },
    jwt: { JWT_TOKEN_SECRET: JWT_TOKEN_SECRET! },
    app: { PORT: PORT! },
  },
  encrypt: {
    PASSWORD_SALT: 10,
  },
};

export { config };
