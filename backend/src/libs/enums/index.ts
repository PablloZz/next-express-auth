const TokenExpirationTime = {
  ONE_DAY: "24h",
} as const;

const ApiPath = {
  AUTH: "/auth",
  POSTS: "/posts",
} as const;

const HttpCode = {
  SUCCESS: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  UNPROCESSED_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500,
} as const;

const ExceptionMessage = {
  EMAIL_IS_ALREADY_USED: "User with this email already exists",
  USER_NOT_FOUND: "User not found",
  IS_NOT_ADMIN: "You don't have access to this recourse",
  INVALID_CREDENTIALS: "Password or email is incorrect",
  INTERNAL_SERVER_ERROR: "An error occurred while processing your request. Please try again later",
  AUTHORIZATION_HEADER: "Authorization header should be in format: Bearer <token>",
  INVALID_TOKEN: "Invalid token",
};

export { TokenExpirationTime, ApiPath, HttpCode, ExceptionMessage };
