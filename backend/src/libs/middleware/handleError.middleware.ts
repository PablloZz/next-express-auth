import { HttpError } from "@/libs/exceptions";
import { ZodError } from "zod";
import { type NextFunction, type Request, type Response } from "express";
import { ExceptionMessage, HttpCode } from "@/libs/enums";

function handleError(err: unknown, _req: Request, res: Response, _next: NextFunction) {
  if (err instanceof ZodError) {
    res.statusMessage = ExceptionMessage.VALIDATION_ERROR;
    return res.status(HttpCode.UNPROCESSED_ENTITY).send({ message: err.flatten() });
  }

  if (err instanceof HttpError) {
    res.statusMessage = err.message;
    return res.status(err.status).send({ message: err.message });
  }

  res.statusMessage = ExceptionMessage.INTERNAL_SERVER_ERROR;

  return res
    .status(HttpCode.INTERNAL_SERVER_ERROR)
    .send({ message: ExceptionMessage.INTERNAL_SERVER_ERROR });
}

export { handleError };
