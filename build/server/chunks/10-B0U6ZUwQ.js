import { e as error, f as fail, r as redirect } from './index-Ddp2AB5f.js';
import { p as prisma } from './prisma-D9xrZjJk.js';
import { h as hashPassword } from './crypto-DrYTebAt.js';
import { d as private_env } from './shared-server-BfUoNEXY.js';
import { a as validatePassword } from './validate-CYZ3z0t9.js';
import '@prisma/client';
import 'base64-js';

const load = async ({ url }) => {
  const userId = url.searchParams.get("userId");
  const token = url.searchParams.get("token");
  if (!userId || !token) {
    error(404, "Not found");
  }
  const user = await prisma.user.findUnique({ where: { id: userId } });
  const resetToken = await prisma.resetToken.findUnique({
    where: { token }
  });
  if (!user || !resetToken) {
    error(404, "Not found");
  }
  if (resetToken.expiresAt <= /* @__PURE__ */ new Date()) {
    error(404, "Expired link");
  }
};
const actions = {
  default: async ({ url, request }) => {
    const userId = url.searchParams.get("userId");
    if (!userId)
      error(404, "Not found");
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user)
      error(404, "Not found");
    const data = await request.formData();
    const newPassword = data.get("new-password");
    const cnfPassword = data.get("confirm-password");
    const errors = [];
    if (!newPassword || !cnfPassword) {
      errors.push("All fields are required");
    }
    if (newPassword !== cnfPassword) {
      errors.push("Passwords need to match");
    }
    try {
      if (newPassword)
        validatePassword(newPassword);
    } catch (e) {
      errors.push(e.message);
    }
    if (newPassword) {
      const oldPasswordHash = user.password;
      const newPasswordHash = await hashPassword(
        newPassword.toString(),
        private_env.SALT
      );
      if (oldPasswordHash === newPasswordHash) {
        errors.push("Cannot use existing password");
      }
    }
    if (errors.length > 0) {
      return fail(400, { success: false, errors });
    }
    if (newPassword && cnfPassword) {
      const newPasswordHash = await hashPassword(
        newPassword.toString(),
        private_env.SALT
      );
      await prisma.user.update({
        where: { id: userId },
        data: { password: newPasswordHash }
      });
      await prisma.resetToken.delete({ where: { userId } });
      redirect(303, "/login");
    }
    return { success: false, errors: ["Unknown error"] };
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 10;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-WRTBPkys.js')).default;
const server_id = "src/routes/(auth)/reset-password/+page.server.ts";
const imports = ["_app/immutable/nodes/10.nD2Zca0y.js","_app/immutable/chunks/scheduler.VK6vfmC_.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/index.BycGP4sO.js","_app/immutable/chunks/forms.YqOt3IOs.js","_app/immutable/chunks/entry.BtI8Upk3.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=10-B0U6ZUwQ.js.map
