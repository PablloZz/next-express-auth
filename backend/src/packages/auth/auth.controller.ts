import { type Request, type Response } from "express";
import { ResponseStatus } from "@/libs/enums";
import { authService } from "@/packages/auth";

async function signUp(req: Request, res: Response) {
  res.status(ResponseStatus.CREATED).send(authService.signUp(req.body));
}

async function signIn(req: Request, res: Response) {
  res.status(ResponseStatus.SUCCESS).send(authService.signIn(req.body));
}

export { signUp, signIn };
