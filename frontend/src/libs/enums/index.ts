const ApiPath = {
  AUTH: "/auth",
  POSTS: "/posts",
} as const;

const HttpMethod = {
  POST: "POST",
} as const;

export { ApiPath, HttpMethod };
