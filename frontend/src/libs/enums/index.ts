const ApiPath = {
  AUTH: "/auth",
  POSTS: "/posts",
} as const;

const HttpMethod = {
  POST: "POST",
} as const;

const HttpHeaderKey = {
  CONTENT_TYPE: "Content-Type",
} as const;

const HttpContentType = {
  APPLICATION_JSON: "application/json",
};

export { ApiPath, HttpMethod, HttpHeaderKey, HttpContentType };
