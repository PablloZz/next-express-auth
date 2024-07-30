import { config } from "@/libs/packages/config";
import { ApiPath, HttpCode, HttpHeaderKey, HttpMethod } from "@/libs/enums";
import { PostsApiPath } from "./libs/enums";
import { parseResponse } from "@/libs/helpers";
import { TOKEN } from "@/libs/constants";
import { toast } from "react-toastify";

async function getPosts(): Promise<{ posts: string } | void> {
  const response = await fetch(`${config.env.api.PATH}${ApiPath.POSTS}${PostsApiPath.ROOT}`, {
    method: HttpMethod.GET,
    headers: { [HttpHeaderKey.AUTHORIZATION]: `Bearer ${localStorage.getItem(TOKEN)}` },
  });

  if (response.status !== HttpCode.SUCCESS) {
    toast.error(response.statusText);
    return;
  }

  return await parseResponse<{ posts: string }>(response);
}

async function getAdminPosts(): Promise<{ posts: string } | void> {
  const response = await fetch(`${config.env.api.PATH}${ApiPath.POSTS}${PostsApiPath.ADMIN}`, {
    method: HttpMethod.GET,
    headers: { [HttpHeaderKey.AUTHORIZATION]: `Bearer ${localStorage.getItem(TOKEN)}` },
  });

  if (response.status !== HttpCode.SUCCESS && response.status !== HttpCode.CREATED) {
    toast.error(response.statusText);
    return;
  }

  return await parseResponse<{ posts: string }>(response);
}

export { getPosts, getAdminPosts };
