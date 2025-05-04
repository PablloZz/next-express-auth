import { ApiPath } from "@/libs/enums";
import { authRouter } from "@/packages/auth";
import express from "express";
import { checkAuthorization, handleError } from "@/libs/middleware";
import { postsRouter } from "@/packages/posts";
import { config } from "@/libs/packages/config";
import cors from "cors";

const { PORT } = config.env.app;
const app = express();
app.use(cors());
app.use(express.json());
app.use(ApiPath.AUTH, authRouter);
app.use(ApiPath.POSTS, checkAuthorization, postsRouter);
app.use(handleError);
app.listen(PORT, () => console.log(`App listening on port ${PORT}...`));
