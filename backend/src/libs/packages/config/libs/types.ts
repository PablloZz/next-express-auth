type EnvironmentSchema = {
  NEON_CONNECTION_STRING: string;
};

type Encrypt = {
  PASSWORD_SALT: number;
};

type Config = {
  env: EnvironmentSchema;
  encrypt: Encrypt;
};

export { type Config, type EnvironmentSchema };
