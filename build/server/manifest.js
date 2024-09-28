const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.zrmm0cMd.js","app":"_app/immutable/entry/app.BxNkA9SV.js","imports":["_app/immutable/entry/start.zrmm0cMd.js","_app/immutable/chunks/entry.BtI8Upk3.js","_app/immutable/chunks/scheduler.VK6vfmC_.js","_app/immutable/entry/app.BxNkA9SV.js","_app/immutable/chunks/11.BObqaQEo.js","_app/immutable/chunks/scheduler.VK6vfmC_.js","_app/immutable/chunks/index.BycGP4sO.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":true},
		nodes: [
			__memo(() => import('./chunks/0-D3JcA9a5.js')),
			__memo(() => import('./chunks/1-C9mKWMfZ.js')),
			__memo(() => import('./chunks/2-CB7uQ98V.js')),
			__memo(() => import('./chunks/3-pAKPDCjm.js')),
			__memo(() => import('./chunks/4-Znvje5EF.js')),
			__memo(() => import('./chunks/5-BA9XLPeB.js')),
			__memo(() => import('./chunks/6-CBIdHuvE.js')),
			__memo(() => import('./chunks/7-ClGILWy5.js')),
			__memo(() => import('./chunks/8-B4jWssqg.js')),
			__memo(() => import('./chunks/9-Xu0pjKtY.js')),
			__memo(() => import('./chunks/10-B0U6ZUwQ.js')),
			__memo(() => import('./chunks/11-CouVged3.js')),
			__memo(() => import('./chunks/12-DI9mNI-i.js')),
			__memo(() => import('./chunks/13-CWFhov1d.js')),
			__memo(() => import('./chunks/14-VYV0yXMG.js')),
			__memo(() => import('./chunks/15-BYqqtYgJ.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/api/paste",
				pattern: /^\/api\/paste\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-CbRQqekA.js'))
			},
			{
				id: "/dashboard/settings",
				pattern: /^\/dashboard\/settings\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(auth)/forgot-password",
				pattern: /^\/forgot-password\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/info",
				pattern: /^\/info\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(auth)/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(auth)/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(auth)/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(auth)/reset-password",
				pattern: /^\/reset-password\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(auth)/validate",
				pattern: /^\/validate\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/[key]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"key","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,,], errors: [1,4,], leaf: 14 },
				endpoint: __memo(() => import('./chunks/_server.ts-B3zHL-a7.js'))
			},
			{
				id: "/[key]/edit",
				pattern: /^\/([^/]+?)\/edit\/?$/,
				params: [{"name":"key","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,,], errors: [1,4,], leaf: 15 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
