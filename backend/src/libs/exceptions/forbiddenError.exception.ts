import { HttpCode } from "../enums";
import { HttpError } from "./httpError.exception";

class ForbiddenError extends HttpError {
  constructor(message: string) {
    super(message, HttpCode.FORBIDDEN);
  }
}

export { ForbiddenError };
