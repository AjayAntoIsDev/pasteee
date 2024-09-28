import { r as redirect, f as fail } from './index-Ddp2AB5f.js';
import { p as prisma } from './prisma-D9xrZjJk.js';
import { h as hashPassword } from './crypto-DrYTebAt.js';
import { nanoid } from 'nanoid';
import { d as private_env } from './shared-server-BfUoNEXY.js';
import { g as getUserIdFromCookie } from './auth-BbWlIJHb.js';
import '@prisma/client';
import 'base64-js';

const load = async ({ cookies }) => {
  const userId = await getUserIdFromCookie(cookies);
  if (userId)
    redirect(303, "/");
};
const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    const usernameOrEmail = data.get("username-email");
    const password = data.get("password");
    if (!usernameOrEmail || !password) {
      return fail(400, {
        success: false,
        errors: ["All fields are required"]
      });
    }
    const hashedPassword = await hashPassword(
      password.toString(),
      private_env.SALT
    );
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          {
            username: usernameOrEmail.toString(),
            password: hashedPassword
          },
          {
            email: usernameOrEmail.toString(),
            password: hashedPassword
          }
        ]
      }
    });
    if (!user) {
      return fail(400, {
        success: false,
        errors: ["Invalid username or password"]
      });
    }
    if (!user.verified) {
      return fail(401, {
        success: false,
        errors: ["Account not verified"]
      });
    }
    await prisma.authToken.deleteMany({
      where: { expiresAt: { lte: /* @__PURE__ */ new Date() } }
    });
    const authToken = await prisma.authToken.create({
      data: {
        user: { connect: { id: user.id } },
        createdAt: /* @__PURE__ */ new Date(),
        expiresAt: new Date(Date.now() + 1e3 * 60 * 60 * 24 * 30),
        // 30 days
        token: nanoid(32)
      }
    });
    cookies.set("token", authToken.token, {
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
      // 30 days
      secure: true,
      httpOnly: true,
      sameSite: "strict"
    });
    redirect(303, "/");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BiCkFXk3.js')).default;
const server_id = "src/routes/(auth)/login/+page.server.ts";
const imports = ["_app/immutable/nodes/7.DR7lVAV7.js","_app/immutable/chunks/scheduler.VK6vfmC_.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/index.BycGP4sO.js","_app/immutable/chunks/forms.YqOt3IOs.js","_app/immutable/chunks/entry.BtI8Upk3.js","_app/immutable/chunks/public.CIJs8PrL.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=7-ClGILWy5.js.map
