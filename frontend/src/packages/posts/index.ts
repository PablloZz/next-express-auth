import { config } from "@/libs/packages/config";
import { ApiPath, HttpHeaderKey, HttpMethod } from "@/libs/enums";
import { PostsApiPath } from "./libs/enums";
import { parseResponse } from "@/libs/helpers";
import { TOKEN } from "@/libs/constants";

async function getPosts(): Promise<{ posts: string }> {
  const response = await fetch(`${config.env.api.PATH}${ApiPath.POSTS}${PostsApiPath.ROOT}`, {
    method: HttpMethod.GET,
    headers: { [HttpHeaderKey.AUTHORIZATION]: `Bearer ${localStorage.getItem(TOKEN)}` },
  });

  return await parseResponse<{ posts: string }>(response);
}

async function getAdminPosts(): Promise<{ posts: string }> {
  const response = await fetch(`${config.env.api.PATH}${ApiPath.POSTS}${PostsApiPath.ADMIN}`, {
    method: HttpMethod.GET,
    headers: { [HttpHeaderKey.AUTHORIZATION]: `Bearer ${localStorage.getItem(TOKEN)}` },
  });

  return await parseResponse<{ posts: string }>(response);
}

export { getPosts, getAdminPosts };
