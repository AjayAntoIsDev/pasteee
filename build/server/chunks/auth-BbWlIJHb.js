import { d as private_env } from './shared-server-BfUoNEXY.js';
import { h as hashPassword } from './crypto-DrYTebAt.js';
import { p as prisma } from './prisma-D9xrZjJk.js';
import { nanoid } from 'nanoid';

const getUserIdFromCookie = async (cookies) => {
  const token = cookies.get("token");
  if (!token)
    return null;
  const authToken = await prisma.authToken.findFirst({
    where: { token, expiresAt: { gt: /* @__PURE__ */ new Date() } },
    include: { user: { select: { id: true, verified: true } } }
  });
  if (!authToken)
    return null;
  if (!authToken.user.verified)
    return null;
  return authToken.user.id;
};
const generateVerificationHash = async (userId) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user)
    throw new Error("User not found");
  const hash = await hashPassword(
    `${user.email}${user.id}${user.password}${user.verified}`,
    private_env.SALT
  );
  return hash;
};
const validateVerificationHash = async (userId, hash) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user)
    return false;
  const newHash = await hashPassword(
    `${user.email}${user.id}${user.password}${user.verified}`,
    private_env.SALT
  );
  if (newHash !== hash)
    return false;
  await prisma.user.update({
    where: { id: userId },
    data: { verified: true }
  });
  return true;
};
const generatePasswordResetToken = async (userId) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user)
    return false;
  const resetToken = await prisma.resetToken.upsert({
    where: {
      userId: user.id
    },
    update: {
      createdAt: /* @__PURE__ */ new Date(),
      expiresAt: new Date(Date.now() + 1e3 * 60 * 60 * 24 * 30),
      // 30 days
      token: nanoid(32)
    },
    create: {
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
  return resetToken.token;
};

export { generatePasswordResetToken as a, generateVerificationHash as b, getUserIdFromCookie as g, validateVerificationHash as v };
//# sourceMappingURL=auth-BbWlIJHb.js.map
