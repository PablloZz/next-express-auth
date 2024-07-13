const TokenExpirationTime = {
  ONE_DAY: "24h",
} as const;

const ApiPath = {
  AUTH: "/auth",
} as const;

const HttpCode = {
  SUCCESS: 200,
  CREATED: 201,
} as const;

export { TokenExpirationTime, ApiPath, HttpCode };
