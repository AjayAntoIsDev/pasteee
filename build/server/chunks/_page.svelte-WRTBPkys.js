import { c as create_ssr_component, g as each, e as escape } from './ssr-CSRYa6Ab.js';
import './client-CjdeEz1m.js';
import './exports-DuWZopOC.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<div class="flex flex-col justify-center items-center"><h1 class="text-4xl" data-svelte-h="svelte-4vyydk">Change Password</h1> <div class="mt-6">${form?.errors ? `<ul class="text-red-500 text-center">${each(form.errors, (error) => {
    return `<li>${escape(error)}</li>`;
  })}</ul>` : ``} <form method="post" class="mt-2 flex flex-col gap-4" data-svelte-h="svelte-1pkcill"><div><label for="new-password" class="px-2 py-2">New Password</label> <input class="bg-dark px-2 py-1 w-full" type="password" id="new-password" name="new-password" placeholder="New Password"></div> <div><label for="confirm-password" class="px-2 py-2">Confirm Password</label> <input class="bg-dark px-2 py-1 w-full" type="password" id="confirm-password" name="confirm-password" placeholder="Confirm Password"></div> <div class="flex flex-row items-center gap-4 mt-2"><button class="bg-amber-500 text-black text-lg px-4 py-1">Update Password</button></div></form></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-WRTBPkys.js.map
