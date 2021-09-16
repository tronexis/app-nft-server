import Router from "@koa/router";
import { tokens } from "./tokens";

const router = new Router();

router.get("/:tokenId", (ctx, next) => {
  const { tokenId } = ctx.params;
  const token = tokens[tokenId];

  if (typeof token === 'undefined') {
    ctx.status = 400;
    ctx.body = {
      message: `tokenId ${tokenId} not found`,
    };
  } else
    ctx.body = {
      tokenId,
      token,
    };
});

export default router;
