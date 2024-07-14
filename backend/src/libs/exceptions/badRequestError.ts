import { HttpCode } from "../enums";
import { HttpError } from "./httpError.exception";

class BadRequestError extends HttpError {
  constructor(message: string) {
    super(message, HttpCode.BAD_REQUEST);
  }
}

export { BadRequestError };
