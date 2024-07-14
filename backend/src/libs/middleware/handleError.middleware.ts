import { HttpError } from "@/libs/exceptions";
import { ZodError } from "zod";
import { type NextFunction, type Request, type Response } from "express";
import { ApiPath, ExceptionMessage, HttpCode } from "@/libs/enums";

function handleError(err: unknown, _req: Request, res: Response, _next: NextFunction) {
  if (err instanceof ZodError) {
    return res.status(HttpCode.UNPROCESSED_ENTITY).send(err.flatten());
  }

  if (err instanceof HttpError) {
    return res.status(err.status).send(err.message);
  }

  return res.status(HttpCode.INTERNAL_SERVER_ERROR).send(ExceptionMessage.INTERNAL_SERVER_ERROR);
}

export { handleError };
