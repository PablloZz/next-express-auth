import { HttpCode } from "../enums";
import { HttpError } from "./httpError.exception";

class NotFoundError extends HttpError {
  constructor(message: string) {
    super(message, HttpCode.NOT_FOUND);
  }
}

export { NotFoundError };
