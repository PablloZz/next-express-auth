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
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;

const ExceptionMessage = {
  EMAIL_IS_ALREADY_USED: "User with this email already exists",
  USER_NOT_FOUND: "User not found",
  INTERNAL_SERVER_ERROR: "An error occurred while processing your request. Please try again later",
};

export { TokenExpirationTime, ApiPath, HttpCode, ExceptionMessage };
