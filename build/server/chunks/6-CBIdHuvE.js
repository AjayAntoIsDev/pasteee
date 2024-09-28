import { r as redirect, f as fail } from './index-Ddp2AB5f.js';
import { p as prisma } from './prisma-D9xrZjJk.js';
import { d as private_env, p as public_env } from './shared-server-BfUoNEXY.js';
import { a as generatePasswordResetToken } from './auth-BbWlIJHb.js';
import { s as sendEmail } from './base-DnoHeYQw.js';
import '@prisma/client';
import './crypto-DrYTebAt.js';
import 'base64-js';
import 'nanoid';
import 'nodemailer';

const sendResetEmail = async (userId) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user)
    return false;
  const resetToken = await generatePasswordResetToken(userId);
  const verifyUrl = `${public_env.PUBLIC_URL}/reset-password?token=${encodeURIComponent(
    resetToken
  )}&userId=${encodeURIComponent(userId)}`;
  const content = `To reset your password, please click the following link: ${verifyUrl}

If you did not make this request, please disgregard this email.`;
  const subject = "YABin: Password reset request";
  const sent = await sendEmail(user.email, subject, content);
  if (!sent)
    return false;
  return true;
};
const load = async () => {
  if (private_env.MAIL_ENABLED === "false") {
    redirect(303, "/");
  }
};
const actions = {
  default: async ({ request }) => {
    if (private_env.MAIL_ENABLED !== "true") {
      return fail(400, {
        success: false,
        errors: ["E-mail is disabled"]
      });
    }
    const data = await request.formData();
    const usernameOrEmail = data.get("username-email");
    if (!usernameOrEmail) {
      return fail(400, {
        success: false,
        errors: ["All fields are required"]
      });
    }
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          { username: usernameOrEmail.toString() },
          { email: usernameOrEmail.toString() }
        ]
      }
    });
    if (user) {
      sendResetEmail(user.id);
    }
    return {
      success: true,
      message: "Please check e-mail for a password reset link"
    };
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-B2kAQjhi.js')).default;
const server_id = "src/routes/(auth)/forgot-password/+page.server.ts";
const imports = ["_app/immutable/nodes/6.DI2bi50X.js","_app/immutable/chunks/scheduler.VK6vfmC_.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/index.BycGP4sO.js","_app/immutable/chunks/forms.YqOt3IOs.js","_app/immutable/chunks/entry.BtI8Upk3.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=6-CBIdHuvE.js.map
