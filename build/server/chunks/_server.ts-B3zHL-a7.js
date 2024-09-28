import { t as text } from './index-Ddp2AB5f.js';
import { g as getPaste } from './services-15rVoUQw.js';
import { d as decrypt, a as decryptWithPassword } from './crypto-DrYTebAt.js';
import './prisma-D9xrZjJk.js';
import '@prisma/client';
import 'base64-js';

const GET = async ({ url, params }) => {
  const { key } = params;
  if (!key) {
    return text("No key provided", { status: 400 });
  }
  let data;
  try {
    data = await getPaste(key);
  } catch (e) {
    if (e?.constructor?.name === "HttpError") {
      const httpError = e;
      return text(httpError.body.message, { status: httpError.status });
    }
    console.error(e);
    return text("An error occurred", { status: 500 });
  }
  if (!data) {
    return text("Paste not found", { status: 404 });
  }
  const { encrypted, passwordProtected, initVector } = data;
  let { content } = data;
  const searchParams = url.searchParams;
  const keyStr = searchParams.get("k");
  const password = searchParams.get("p");
  if (encrypted && initVector && keyStr && !passwordProtected) {
    try {
      content = await decrypt(
        content,
        initVector,
        decodeURIComponent(keyStr)
      );
    } catch (e) {
      return text("Failed to decrypt", { status: 403 });
    }
  }
  if (encrypted && initVector && passwordProtected && password) {
    try {
      content = await decryptWithPassword(
        content,
        initVector,
        decodeURIComponent(password)
      );
    } catch (e) {
      return text("Failed to decrypt", { status: 403 });
    }
  }
  return text(content);
};

export { GET };
//# sourceMappingURL=_server.ts-B3zHL-a7.js.map
