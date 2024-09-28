import { c as create_ssr_component, g as each, e as escape } from './ssr-CSRYa6Ab.js';
import './client-CjdeEz1m.js';
import { p as public_env } from './shared-server-BfUoNEXY.js';
import './exports-DuWZopOC.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<div class="flex flex-col justify-center items-center"><h1 class="text-4xl" data-svelte-h="svelte-1dkdx59">User Login</h1> <div class="mt-6">${form?.errors ? `<ul class="text-red-500 text-center">${each(form.errors, (error) => {
    return `<li>${escape(error)}</li>`;
  })}</ul>` : ``} ${form?.success ? `<div class="text-green-500 text-center" data-svelte-h="svelte-hjdb18">Success, redirecting...</div>` : ``} <form method="post" class="mt-2 flex flex-col gap-4"><div data-svelte-h="svelte-12ast4n"><label for="username" class="px-2 py-2">Username or E-mail</label> <input class="bg-dark px-2 py-1 w-full" type="text" name="username-email" placeholder="Username or E-mail"></div> <div data-svelte-h="svelte-1jn33lb"><label for="username" class="px-2 py-2">Password</label> <input class="bg-dark px-2 py-1 w-full" type="password" name="password" placeholder="Password"></div> <div class="flex flex-row items-center justify-center gap-4 mt-2">${public_env.PUBLIC_REGISTRATION_ENABLED == "true" ? `<span class="px-2 py-1" data-svelte-h="svelte-ma3g36">Don&#39;t have an account? <a class="underline underline-offset-4" href="/register">Register</a>.</span>` : ``} <button class="bg-amber-500 text-black text-lg px-4 py-1" data-svelte-h="svelte-1li23ar">Login</button></div> <div class="text-center" data-svelte-h="svelte-18q0jkm">Forgot password?
                <a class="underline underline-offset-4" href="/forgot-password">Click here</a>.</div></form></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BiCkFXk3.js.map
