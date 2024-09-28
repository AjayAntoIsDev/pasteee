import { c as create_ssr_component, g as each, e as escape } from './ssr-CSRYa6Ab.js';
import './client-CjdeEz1m.js';
import './exports-DuWZopOC.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<div class="flex flex-col justify-center items-center"><h1 class="text-4xl" data-svelte-h="svelte-7lev5v">Reset Password</h1> <div class="mt-6">${form?.errors ? `<ul class="text-red-500 text-center">${each(form.errors, (error) => {
    return `<li>${escape(error)}</li>`;
  })}</ul>` : ``} ${form?.success ? `<div class="text-green-500 text-center">${escape(form?.message)}</div>` : ``} <form method="post" class="mt-2 flex flex-col gap-4" data-svelte-h="svelte-1q8kd67"><div><label for="username-email" class="px-2 py-2">Username or E-mail</label> <input class="bg-dark px-2 py-1 w-full" type="text" id="username-email" name="username-email" placeholder="Username or E-mail"></div> <div class="flex flex-row items-center gap-4 mt-2"><button class="bg-amber-500 text-black text-lg px-4 py-1">Reset Password</button></div></form></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-B2kAQjhi.js.map
