import express from "express";
import { AuthApiPath } from "./libs/enums";
import * as authController from "./auth.controller";
import { validateSignInPayload, validateSignUpPayload } from "./libs/middleware";

const router = express.Router();
router.post(AuthApiPath.SIGN_UP, validateSignUpPayload, authController.signUp);
router.post(AuthApiPath.SIGN_IN, validateSignInPayload, authController.signIn);

export { router };
