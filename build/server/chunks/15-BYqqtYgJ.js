import { g as getUserIdFromCookie } from './auth-BbWlIJHb.js';
import { g as getPaste } from './services-15rVoUQw.js';
import './prisma-D9xrZjJk.js';
import './shared-server-BfUoNEXY.js';
import './crypto-DrYTebAt.js';
import 'base64-js';
import 'nanoid';
import './index-Ddp2AB5f.js';
import '@prisma/client';

async function load({ cookies, params }) {
  const { key } = params;
  const userId = await getUserIdFromCookie(cookies);
  const data = await getPaste(key);
  let { content, language, encrypted, passwordProtected, initVector } = data;
  return {
    content,
    encrypted,
    language,
    passwordProtected,
    initVector,
    isOwner: userId === data.ownerId
  };
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 15;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CZGLE22C.js')).default;
const server_id = "src/routes/[key]/edit/+page.server.ts";
const imports = ["_app/immutable/nodes/15.B_U3XVr0.js","_app/immutable/chunks/11.BObqaQEo.js","_app/immutable/chunks/scheduler.VK6vfmC_.js","_app/immutable/chunks/index.BycGP4sO.js","_app/immutable/chunks/entry.BtI8Upk3.js","_app/immutable/chunks/stores.Dawflz9q.js","_app/immutable/chunks/crypto.VCyhLLHW.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=15-BYqqtYgJ.js.map
