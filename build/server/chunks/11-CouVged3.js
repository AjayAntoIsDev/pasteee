import { e as error, r as redirect } from './index-Ddp2AB5f.js';
import { v as validateVerificationHash } from './auth-BbWlIJHb.js';
import './shared-server-BfUoNEXY.js';
import './crypto-DrYTebAt.js';
import 'base64-js';
import './prisma-D9xrZjJk.js';
import '@prisma/client';
import 'nanoid';

const load = async ({ url }) => {
  const userId = url.searchParams.get("userId");
  const hash = url.searchParams.get("hash");
  if (!userId || !hash) {
    error(404, "Not found");
  }
  const isValid = await validateVerificationHash(
    decodeURIComponent(userId),
    decodeURIComponent(hash)
  );
  if (!isValid) {
    error(404, "Not found");
  }
  redirect(303, "/login");
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 11;
const server_id = "src/routes/(auth)/validate/+page.server.ts";
const imports = [];
const stylesheets = [];
const fonts = [];

export { fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=11-CouVged3.js.map
