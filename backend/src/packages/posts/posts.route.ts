import express from "express";
import { PostsApiPath } from "./libs/enums";
import * as postsController from "./posts.controller";

const router = express.Router();
router.get(PostsApiPath.ROOT, postsController.get);

export { router };
