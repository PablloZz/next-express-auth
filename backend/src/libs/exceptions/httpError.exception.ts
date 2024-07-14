import { HttpCode } from "../enums";

class HttpError extends Error {
  public status: (typeof HttpCode)[keyof typeof HttpCode];

  constructor(message: string, status: (typeof HttpCode)[keyof typeof HttpCode]) {
    super(message);
    this.status = status;
  }
}

export { HttpError };
