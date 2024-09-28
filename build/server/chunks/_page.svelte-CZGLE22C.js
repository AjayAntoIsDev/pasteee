import { c as create_ssr_component, b as subscribe, e as escape, d as add_attribute } from './ssr-CSRYa6Ab.js';
import './client-CjdeEz1m.js';
import { p as page } from './stores-B5ZvaBim.js';
import 'base64-js';
import './exports-DuWZopOC.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { data } = $$props;
  let { isOwner, content, encrypted, passwordProtected, initVector } = data;
  let password = "";
  let isDecrypted = false;
  let pwInputRef;
  let error;
  if (!isOwner) {
    error = "You are not the owner of this paste";
  }
  let cmdKey = "Ctrl";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `<div class="p-2 min-h-screen w-screen flex flex-col text-primary"><div class="pb-4"><div class="flex flex-row items-center gap-4"><h1 class="mr-auto text-2xl" data-svelte-h="svelte-12fojij"><a href="/">Paste</a></h1> <button class="underline underline-offset-4 px-2 py-1" title="${escape(cmdKey, true) + "+I"}">Info</button> <button class="underline underline-offset-4 px-2 py-1" title="${escape(cmdKey, true) + "+N"}">New</button> <button class="bg-amber-500 text-black text-lg px-4 py-1" title="${escape(cmdKey, true) + "+S"}">Save</button></div></div> ${error ? `<div class="md:mt-10 text-center text-lg">${escape(error)}</div>` : `${passwordProtected && !isDecrypted ? `<div class="flex flex-col items-center gap-4 md:mt-10"><input class="md:w-1/3 text-lg px-4 py-1 bg-dark text-white" type="text" placeholder="Enter password..."${add_attribute("this", pwInputRef, 0)}${add_attribute("value", password, 0)}> <button class="md:w-fit bg-amber-500 text-black text-lg px-4 py-1" data-svelte-h="svelte-one9lr">Decrypt</button></div>` : `<textarea class="px-2 grow border-none outline-none bg-transparent resize-none" spellcheck="false">${escape(content || "")}</textarea>`}`}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CZGLE22C.js.map
