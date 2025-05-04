import { type Request, type Response } from "express";
import { HttpCode } from "@/libs/enums";
import { authService } from "@/packages/auth";

async function signUp(req: Request, res: Response) {
  const user = await authService.signUp(req.body);
  res.status(HttpCode.CREATED).send(user);
}

async function signIn(req: Request, res: Response) {
  const user = await authService.signIn(req.body);
  res.status(HttpCode.SUCCESS).send(user);
}

export { signUp, signIn };
