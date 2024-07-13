import { type NextFunction, type Request, type Response } from "express";
import { signUpValidationSchema } from "../validation";

function validateSignUpPayload(req: Request, _: Response, next: NextFunction) {
  signUpValidationSchema.parse(req.body);
  next();
}

export { validateSignUpPayload };
