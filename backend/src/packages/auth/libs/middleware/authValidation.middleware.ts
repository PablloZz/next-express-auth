import { type NextFunction, type Request, type Response } from "express";
import { signInValidationSchema, signUpValidationSchema } from "../validation";

function validateSignUpPayload(req: Request, _: Response, next: NextFunction) {
  signUpValidationSchema.parse(req.body);
  next();
}

function validateSignInPayload(req: Request, _: Response, next: NextFunction) {
  signInValidationSchema.parse(req.body);
  next();
}

export { validateSignInPayload, validateSignUpPayload };
