import { r as redirect } from './index-Ddp2AB5f.js';

const load = async ({ cookies }) => {
  cookies.delete("token", { path: "/" });
  redirect(303, "/");
};
const actions = {
  default({ cookies }) {
    cookies.delete("token", { path: "/" });
    redirect(303, "/");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 8;
const server_id = "src/routes/(auth)/logout/+page.server.ts";
const imports = [];
const stylesheets = [];
const fonts = [];

export { fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=8-B4jWssqg.js.map
