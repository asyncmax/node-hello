import Koa from "koa";
import Router from "@koa/router";
import koaLogger from "koa-logger";

const app = new Koa();
const router = new Router();

app.use(koaLogger());
app.use(router.routes());

router.get("/", async ctx => {
  ctx.body = "<h1>Hello, world!</h1>";
});

app.listen(3000, () => {
  console.log("Server is listening on the port 3000...");
});
