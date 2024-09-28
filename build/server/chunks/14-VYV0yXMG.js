import { g as getUserIdFromCookie } from './auth-BbWlIJHb.js';
import { g as getPaste } from './services-15rVoUQw.js';
import Prism from 'prismjs';
import loadLanguages from 'prismjs/components/index.js';
import sanitize from 'sanitize-html';
import './shared-server-BfUoNEXY.js';
import './crypto-DrYTebAt.js';
import 'base64-js';
import './prisma-D9xrZjJk.js';
import '@prisma/client';
import 'nanoid';
import './index-Ddp2AB5f.js';

async function load({ cookies, params }) {
  const { key } = params;
  const userId = await getUserIdFromCookie(cookies);
  const data = await getPaste(key);
  let { content, language, encrypted, passwordProtected, initVector } = data;
  let contentHtml;
  try {
    if (!encrypted && language !== "plaintext") {
      loadLanguages([language]);
      contentHtml = Prism.highlight(
        content,
        Prism.languages[language],
        language
      );
    } else {
      contentHtml = sanitize(content, { disallowedTagsMode: "escape" });
    }
  } catch (e) {
    console.error(e);
    contentHtml = sanitize(content, { disallowedTagsMode: "escape" });
  }
  return {
    content,
    contentHtml,
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

const index = 14;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-mc-JbE9_.js')).default;
const server_id = "src/routes/[key]/+page.server.ts";
const imports = ["_app/immutable/nodes/14.B2XPIch8.js","_app/immutable/chunks/11.BObqaQEo.js","_app/immutable/chunks/scheduler.VK6vfmC_.js","_app/immutable/chunks/index.BycGP4sO.js","_app/immutable/chunks/entry.BtI8Upk3.js","_app/immutable/chunks/stores.Dawflz9q.js"];
const stylesheets = ["_app/immutable/assets/14.BHCzV4qI.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=14-VYV0yXMG.js.map
