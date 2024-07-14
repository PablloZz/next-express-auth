import express from "express";
import { PostsApiPath } from "./libs/enums";
import * as authController from "./posts.controller";

const router = express.Router();
router.get(PostsApiPath.ROOT, authController.getPosts);

export { router };
