import { type Request, type Response } from "express";
import { HttpCode } from "@/libs/enums";

async function getPosts(_req: Request, res: Response) {
  res.status(HttpCode.SUCCESS).send("Posts");
}

export { getPosts };
