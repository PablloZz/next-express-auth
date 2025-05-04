type EnvironmentSchema = {
  db: { NEON_CONNECTION_STRING: string };
  jwt: { JWT_TOKEN_SECRET: string };
  app: { PORT: string };
};

type Encrypt = {
  PASSWORD_SALT: number;
};

type Config = {
  env: EnvironmentSchema;
  encrypt: Encrypt;
};

export { type Config, type EnvironmentSchema };
