type EnvironmentSchema = {
  NEON_CONNECTION_STRING: string;
};

type Config = {
  env: EnvironmentSchema;
};

export { type Config, type EnvironmentSchema };
