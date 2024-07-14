import { type Request, type Response } from "express";
import { HttpCode } from "@/libs/enums";

async function get(_req: Request, res: Response) {
  res.status(HttpCode.SUCCESS).send("Posts");
}

export { get };
