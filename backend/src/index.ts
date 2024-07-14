import { ApiPath } from "@/libs/enums";
import { authRouter } from "@/packages/auth";
import express from "express";
import { handleError } from "@/libs/middleware";
import { postsRouter } from "@/packages/posts";

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(ApiPath.AUTH, authRouter);
app.use(ApiPath.POSTS, postsRouter);
app.use(handleError);
app.listen(PORT, () => console.log(`App listening on port ${PORT}...`));
