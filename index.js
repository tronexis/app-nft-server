import Koa from "koa";
import cors from "@koa/cors";
import serve from "koa-static";
import router from "./router";
import { config } from "dotenv";

config();
const app = new Koa();
const port = process.env.PORT || 4000;

app.use(cors()).use(serve("./images")).use(router.routes());

app.listen(port) && console.log(`Server listening on ${port}`);
