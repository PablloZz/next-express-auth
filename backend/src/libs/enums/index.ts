const TokenExpirationTime = {
  ONE_DAY: "24h",
} as const;

const ApiPath = {
  AUTH: "/auth",
} as const;

const HttpCode = {
  SUCCESS: 200,
  CREATED: 201,
  FORBIDDEN: 403,
} as const;

const ExceptionMessage = {
  EMAIL_IS_ALREADY_USED: "User with this email already exists",
};

export { TokenExpirationTime, ApiPath, HttpCode, ExceptionMessage };
