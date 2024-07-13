import { ApiPath } from "@/libs/enums";
import { authRouter } from "@/packages/auth";
import express from "express";

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(ApiPath.AUTH, authRouter);
app.listen(PORT, () => console.log(`App listening on port ${PORT}...`));
