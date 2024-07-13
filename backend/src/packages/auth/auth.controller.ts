import express from "express";
import { AuthApiPath } from "./libs/enums";
import { ResponseStatus } from "@/libs/enums";
import { authService } from "@/packages/auth";

const router = express.Router();

router.post(AuthApiPath.SIGN_UP, (req, res) => {
  res.status(ResponseStatus.CREATED).send(authService.signUp(req.body));
});

router.post(AuthApiPath.SIGN_IN, (req, res) => {
  res.status(ResponseStatus.SUCCESS).send(authService.signIn(req.body));
});

export { router };
