import { c as create_ssr_component, g as each, e as escape } from './ssr-CSRYa6Ab.js';
import './client-CjdeEz1m.js';
import { p as public_env } from './shared-server-BfUoNEXY.js';
import './exports-DuWZopOC.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<div class="flex flex-col justify-center items-center"><h1 class="text-4xl" data-svelte-h="svelte-123hmkf">New User Registration</h1> <div class="mt-6">${form?.errors ? `<ul class="text-red-500 text-center">${each(form.errors, (error) => {
    return `<li>${escape(error)}</li>`;
  })}</ul>` : ``} ${form?.success ? `<div class="text-green-500 text-center">${escape(form.message)}</div>` : ``} ${public_env.PUBLIC_REGISTRATION_ENABLED == "true" ? `<form method="post" class="mt-2 flex flex-col gap-4" data-svelte-h="svelte-i93333"><div><label for="username" class="px-2 py-2">Name</label> <input class="bg-dark px-2 py-1 w-full" type="text" name="name" placeholder="Name" minlength="1" maxlength="50"></div> <div><label for="username" class="px-2 py-2">Username</label> <input class="bg-dark px-2 py-1 w-full" type="text" name="username" placeholder="Username" minlength="1" maxlength="50"></div> <div><label for="username" class="px-2 py-2">E-mail</label> <input class="bg-dark px-2 py-1 w-full" type="email" name="email" placeholder="E-mail"></div> <div><label for="username" class="px-2 py-2">Password</label> <input class="bg-dark px-2 py-1 w-full" type="password" name="password" placeholder="Password"></div> <div><label for="username" class="px-2 py-2">Confirm Password</label> <input class="bg-dark px-2 py-1 w-full" type="password" name="confirm-password" placeholder="Confirm Password"></div> <div class="flex flex-row items-center gap-4 mt-2"><span class="px-2 py-1">Already have an account? <a class="underline underline-offset-4" href="/login">Login</a>.</span> <button class="bg-amber-500 text-black text-lg px-4 py-1">Register</button></div></form>` : `<h1 class="text-2xl" data-svelte-h="svelte-po0st0">Registration has been disabled.</h1>`}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-uWA7s0Ya.js.map
