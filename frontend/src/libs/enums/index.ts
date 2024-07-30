const ApiPath = {
  AUTH: "/auth",
  POSTS: "/posts",
} as const;

const HttpMethod = {
  POST: "POST",
  GET: "GET",
} as const;

const HttpHeaderKey = {
  CONTENT_TYPE: "Content-Type",
  AUTHORIZATION: "Authorization",
} as const;

const HttpContentType = {
  APPLICATION_JSON: "application/json",
};

const HttpCode = {
  SUCCESS: 200,
  CREATED: 201,
} as const;

export { ApiPath, HttpMethod, HttpHeaderKey, HttpContentType, HttpCode };
