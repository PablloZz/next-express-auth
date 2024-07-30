import { type Request, type Response } from "express";
import { HttpCode } from "@/libs/enums";

async function get(_req: Request, res: Response) {
  res.status(HttpCode.SUCCESS).send({ posts: "Posts" });
}

async function getAdminPosts(_req: Request, res: Response) {
  res.status(HttpCode.SUCCESS).send({ posts: "Admin Posts" });
}

export { get, getAdminPosts };
