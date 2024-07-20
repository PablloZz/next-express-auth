import { HttpCode } from "../enums";
import { HttpError } from "./httpError.exception";

class UnauthorizedError extends HttpError {
  constructor(message: string) {
    super(message, HttpCode.UNAUTHORIZED);
  }
}

export { UnauthorizedError };
