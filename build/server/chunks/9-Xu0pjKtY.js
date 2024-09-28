import { f as fail, r as redirect } from './index-Ddp2AB5f.js';
import { p as prisma } from './prisma-D9xrZjJk.js';
import { h as hashPassword } from './crypto-DrYTebAt.js';
import { nanoid } from 'nanoid';
import { p as public_env, d as private_env } from './shared-server-BfUoNEXY.js';
import { b as generateVerificationHash } from './auth-BbWlIJHb.js';
import { s as sendEmail } from './base-DnoHeYQw.js';
import { v as validateEmail, a as validatePassword, b as validateName, c as validateUsername } from './validate-CYZ3z0t9.js';
import '@prisma/client';
import 'base64-js';
import 'nodemailer';

const sendVerificationEmail = async (userId) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user)
    return false;
  const hash = await generateVerificationHash(userId);
  const verifyUrl = `${public_env.PUBLIC_URL}/validate?hash=${encodeURIComponent(
    hash
  )}&userId=${encodeURIComponent(userId)}`;
  const content = `To verify your email, please click the following link: ${verifyUrl}`;
  const subject = "YABin: Verify your email";
  const sent = await sendEmail(user.email, subject, content);
  if (!sent)
    return false;
  return true;
};
const actions = {
  default: async ({ cookies, request }) => {
    if (public_env.PUBLIC_REGISTRATION_ENABLED !== "true") {
      return fail(404, { success: false, errors: ["Not found"] });
    }
    const data = await request.formData();
    const name = data.get("name");
    const username = data.get("username");
    const email = data.get("email");
    const password = data.get("password");
    const cnfPassword = data.get("confirm-password");
    const errors = [];
    if (!name || !username || !email || !password || !cnfPassword) {
      errors.push("All fields are required");
    }
    try {
      if (email)
        validateEmail(email);
    } catch (e) {
      errors.push(e.message);
    }
    try {
      if (password)
        validatePassword(password);
    } catch (e) {
      errors.push(e.message);
    }
    try {
      if (name)
        validateName(name);
    } catch (e) {
      errors.push(e.message);
    }
    try {
      if (username)
        validateUsername(username);
    } catch (e) {
      errors.push(e.message);
    }
    if (password && password !== cnfPassword) {
      errors.push("Passwords do not match");
    }
    if (username && email) {
      const existingCount = await prisma.user.count({
        where: {
          OR: [
            { username: username.toString() },
            { email: email.toString() }
          ]
        }
      });
      if (existingCount > 0) {
        errors.push("Username or email already exists");
      }
    }
    if (errors.length > 0) {
      return fail(400, { success: false, errors });
    }
    if (name && username && email && password) {
      const user = await prisma.user.create({
        data: {
          name: name.toString(),
          username: username.toString(),
          email: email.toString(),
          password: await hashPassword(password.toString(), private_env.SALT),
          verified: false
        }
      });
      if (private_env.MAIL_ENABLED === "true") {
        const sentVerificationEmail = await sendVerificationEmail(
          user.id
        );
        if (sentVerificationEmail) {
          return {
            success: true,
            message: "Please check your e-mail for verification link"
          };
        }
      }
      await prisma.user.update({
        where: { id: user.id },
        data: { verified: true }
      });
      const authToken = await prisma.authToken.create({
        data: {
          user: {
            connect: {
              id: user.id
            }
          },
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
    return { success: false, errors: ["Unknown error"] };
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 9;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-uWA7s0Ya.js')).default;
const server_id = "src/routes/(auth)/register/+page.server.ts";
const imports = ["_app/immutable/nodes/9.DiYs6I3x.js","_app/immutable/chunks/scheduler.VK6vfmC_.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/index.BycGP4sO.js","_app/immutable/chunks/forms.YqOt3IOs.js","_app/immutable/chunks/entry.BtI8Upk3.js","_app/immutable/chunks/public.CIJs8PrL.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=9-Xu0pjKtY.js.map
