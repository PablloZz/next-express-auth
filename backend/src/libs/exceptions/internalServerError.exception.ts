import { HttpCode } from "../enums";
import { HttpError } from "./httpError.exception";

class InternalServerError extends HttpError {
  constructor(message: string) {
    super(message, HttpCode.INTERNAL_SERVER_ERROR);
  }
}

export { InternalServerError };
