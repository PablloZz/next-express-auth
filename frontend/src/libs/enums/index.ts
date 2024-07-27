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

export { ApiPath, HttpMethod, HttpHeaderKey };
