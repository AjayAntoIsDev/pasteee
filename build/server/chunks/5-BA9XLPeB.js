import { g as getUserIdFromCookie } from './auth-BbWlIJHb.js';
import { p as prisma } from './prisma-D9xrZjJk.js';
import './shared-server-BfUoNEXY.js';
import './crypto-DrYTebAt.js';
import 'base64-js';
import 'nanoid';
import '@prisma/client';

async function load({ cookies }) {
  const userId = await getUserIdFromCookie(cookies);
  let settings;
  if (userId) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { settings: true }
    });
    settings = user?.settings;
  }
  return { loggedIn: !!userId, settings };
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-oPFrr2tB.js')).default;
const server_id = "src/routes/+page.server.ts";
const imports = ["_app/immutable/nodes/5.BeIXaRbG.js","_app/immutable/chunks/scheduler.VK6vfmC_.js","_app/immutable/chunks/index.BycGP4sO.js","_app/immutable/chunks/entry.BtI8Upk3.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/crypto.VCyhLLHW.js","_app/immutable/chunks/public.CIJs8PrL.js","_app/immutable/chunks/time.Bh9EoIFo.js"];
const stylesheets = ["_app/immutable/assets/5.CaobXccR.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=5-BA9XLPeB.js.map
