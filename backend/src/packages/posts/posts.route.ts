import express from "express";
import { PostsApiPath } from "./libs/enums";
import * as postsController from "./posts.controller";
import { checkIfAdmin } from "@/libs/middleware";

const router = express.Router();
router.get(PostsApiPath.ROOT, postsController.get);
router.get(PostsApiPath.ADMIN, checkIfAdmin, postsController.getAdminPosts);

export { router };
