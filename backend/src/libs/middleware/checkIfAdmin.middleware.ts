import { type NextFunction, type Request, type Response } from "express";
import { ForbiddenError, NotFoundError, UnauthorizedError } from "@/libs/exceptions";
import { ExceptionMessage } from "../enums";

async function checkIfAdmin(req: Request, _res: Response, next: NextFunction) {
  const user = req.user;

  if (!user || user.type != "admin") throw new ForbiddenError(ExceptionMessage.IS_NOT_ADMIN);

  next();
}

export { checkIfAdmin };
