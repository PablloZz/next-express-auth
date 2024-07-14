import { ApiPath } from "@/libs/enums";
import { authRouter } from "@/packages/auth";
import express from "express";
import { checkAuthentication, handleError } from "@/libs/middleware";
import { postsRouter } from "@/packages/posts";
import { config } from "@/libs/packages/config";

const { PORT } = config.env.app;
const app = express();
app.use(express.json());
app.use(ApiPath.AUTH, authRouter);
app.use(ApiPath.POSTS, postsRouter);
app.use(handleError);
app.listen(PORT, () => console.log(`App listening on port ${PORT}...`));
