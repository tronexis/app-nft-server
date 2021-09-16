import Koa from "koa";
import cors from "@koa/cors";
import serve from "koa-static";
import router from "./router";

const app = new Koa();

app.use(cors()).use(serve("./images")).use(router.routes());

app.listen(4000) && console.log("Server listening on 4000");
