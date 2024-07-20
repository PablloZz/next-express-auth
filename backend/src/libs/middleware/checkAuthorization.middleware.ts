import { type NextFunction, type Request, type Response } from "express";
import { NotFoundError, UnauthorizedError } from "@/libs/exceptions";
import { ExceptionMessage } from "../enums";
import { verifyToken } from "../packages/token";
import { usersService } from "@/packages/users";

async function checkAuthorization(req: Request, _res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) throw new UnauthorizedError(ExceptionMessage.AUTHORIZATION_HEADER);

  const { userId } = await verifyToken<{ userId?: number }>(token);

  if (!userId) throw new UnauthorizedError(ExceptionMessage.INVALID_TOKEN);

  const user = await usersService.findById(userId);

  if (!user) throw new NotFoundError(ExceptionMessage.USER_NOT_FOUND);

  const { email, id, username, type } = user;
  req.user = { email, id, username, type };
  next();
}

export { checkAuthorization };
