import { j as json } from './index-Ddp2AB5f.js';
import { p as prisma } from './prisma-D9xrZjJk.js';
import { g as getPaste } from './services-15rVoUQw.js';
import { g as getUserIdFromCookie } from './auth-BbWlIJHb.js';
import { p as public_env } from './shared-server-BfUoNEXY.js';
import '@prisma/client';
import './crypto-DrYTebAt.js';
import 'base64-js';
import 'nanoid';

const GET = async ({ url }) => {
  const key = url.searchParams.get("key");
  if (!key) {
    return json(
      { success: false, error: "No key provided" },
      { status: 400 }
    );
  }
  let paste;
  try {
    paste = await getPaste(key);
  } catch (e) {
    if (e?.constructor?.name === "HttpError") {
      const httpError = e;
      return json(
        { success: false, error: httpError.body.message },
        { status: httpError.status }
      );
    }
    return json(
      { success: false, error: "An error occurred" },
      { status: 500 }
    );
  }
  if (!paste) {
    return json(
      { success: false, error: "Paste not found" },
      { status: 404 }
    );
  }
  console.log(paste);
  const response = {
    success: true,
    data: paste
  };
  return json(response);
};
const POST = async ({ cookies, request }) => {
  const { content, config, passwordProtected, initVector } = await request.json();
  const userId = await getUserIdFromCookie(cookies);
  if (public_env.PUBLIC_ANONYMOUS_PASTES_ENABLED === "false" && !userId) {
    return json(
      {
        success: false,
        error: "Anonymous pastes are disabled"
      },
      {
        status: 403
      }
    );
  }
  let key = void 0;
  if (config?.customPath && (public_env.PUBLIC_CUSTOM_PATHS_ENABLED === "true" || userId)) {
    key = config.customPath.substring(0, 16);
    if (await prisma.paste.findUnique({ where: { key } })) {
      return json(
        {
          success: false,
          error: "Custom path already exists"
        },
        {
          status: 400
        }
      );
    }
  }
  if (!key) {
    let attempts = 0;
    let keyLength = 5;
    key = randomString(keyLength);
    while (await prisma.paste.findUnique({ where: { key } })) {
      key = randomString(keyLength);
      attempts++;
      if (attempts > 1) {
        keyLength++;
        attempts = 0;
      }
    }
  }
  await prisma.paste.create({
    data: {
      key,
      content,
      language: config?.language ?? "plaintext",
      encrypted: config?.encrypted ?? false,
      passwordProtected,
      expiresCount: config?.burnAfterRead ? 2 : null,
      initVector,
      expiresAt: config?.expiresAfter ? new Date(Date.now() + config.expiresAfter * 1e3) : null,
      ownerId: userId
    }
  });
  const response = {
    success: true,
    data: { key }
  };
  return json(response);
};
const PATCH = async ({ cookies, request }) => {
  const { key, content, encrypted, initVector } = await request.json();
  const userId = await getUserIdFromCookie(cookies);
  if (!key && !content) {
    return json(
      { success: false, error: "No key provided" },
      {
        status: 400
      }
    );
  }
  if (encrypted && !initVector) {
    return json(
      {
        success: false,
        error: "No initVector provided"
      },
      {
        status: 400
      }
    );
  }
  const paste = await prisma.paste.findUnique({ where: { key } });
  if (!paste) {
    return json(
      { success: false, error: "Paste not found" },
      {
        status: 404
      }
    );
  }
  if (paste.ownerId !== userId) {
    return json(
      { success: false, error: "Unauthorized" },
      {
        status: 401
      }
    );
  }
  await prisma.paste.update({
    where: { key },
    data: {
      content,
      initVector
    }
  });
  return json({
    success: true,
    data: { key }
  });
};
function randomString(length) {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

export { GET, PATCH, POST };
//# sourceMappingURL=_server.ts-CbRQqekA.js.map
