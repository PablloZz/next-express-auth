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

export { ApiPath, HttpMethod, HttpHeaderKey, HttpContentType };
