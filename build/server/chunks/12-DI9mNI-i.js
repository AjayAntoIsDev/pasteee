import { g as getUserIdFromCookie } from './auth-BbWlIJHb.js';
import { r as redirect } from './index-Ddp2AB5f.js';
import { p as prisma } from './prisma-D9xrZjJk.js';
import './shared-server-BfUoNEXY.js';
import './crypto-DrYTebAt.js';
import 'base64-js';
import 'nanoid';
import '@prisma/client';

const load = async ({ cookies }) => {
  const userId = await getUserIdFromCookie(cookies);
  if (!userId)
    redirect(303, "/login");
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { settings: true }
  });
  return { settings: user?.settings };
};
const actions = {
  defaults: async ({ cookies, request }) => {
    const userId = await getUserIdFromCookie(cookies);
    if (!userId)
      redirect(303, "/login");
    const formData = await request.formData();
    const expiresAfterSeconds = parseInt(
      formData.get("expires-after-seconds")?.toString() ?? "0"
    );
    const data = {
      encrypted: formData.get("encrypted") === "on",
      burnAfterRead: formData.get("burn-after-read") === "on",
      expiresAfterSeconds: Math.max(
        0,
        Math.min(365 * 24 * 3600, expiresAfterSeconds)
      )
    };
    const user = await prisma.user.update({
      where: { id: userId },
      data: { settings: { defaults: data } },
      select: { settings: true }
    });
    return {
      defaultsForm: {
        success: true,
        settings: user.settings
      }
    };
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 12;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-D28FYmWS.js')).default;
const server_id = "src/routes/dashboard/settings/+page.server.ts";
const imports = ["_app/immutable/nodes/12.DgF5CVKd.js","_app/immutable/chunks/scheduler.VK6vfmC_.js","_app/immutable/chunks/index.BycGP4sO.js","_app/immutable/chunks/forms.YqOt3IOs.js","_app/immutable/chunks/entry.BtI8Upk3.js","_app/immutable/chunks/time.Bh9EoIFo.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=12-DI9mNI-i.js.map
