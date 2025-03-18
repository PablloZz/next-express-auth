import "dotenv/config";
import { Config, EnvironmentSchema } from "./libs/types";

const { NEON_CONNECTION_STRING } = process.env as EnvironmentSchema;

const config: Config = {
  env: {
    NEON_CONNECTION_STRING,
  },
};

export { config };
