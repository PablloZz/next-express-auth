type EnvironmentSchema = {
  api: { PATH: string };
};

type Config = {
  env: EnvironmentSchema;
};

export { type Config, type EnvironmentSchema };
