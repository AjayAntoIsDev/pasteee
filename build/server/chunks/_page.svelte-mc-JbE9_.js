import { c as create_ssr_component, b as subscribe, e as escape, d as add_attribute } from './ssr-CSRYa6Ab.js';
import './client-CjdeEz1m.js';
import { p as page } from './stores-B5ZvaBim.js';
import './exports-DuWZopOC.js';

const css = {
  code: "pre.svelte-5q1u89{background-color:var(--color-dark) !important;padding:0 !important;margin:0 !important}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { data } = $$props;
  let { isOwner, content, contentHtml, language, encrypted, passwordProtected, initVector } = data;
  let password = "";
  let isDecrypted = false;
  let codeRef;
  let pwInputRef;
  let cmdKey = "Ctrl";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="p-2 min-h-screen w-screen flex flex-col text-primary"><div class="pb-4"><div class="flex flex-row items-center gap-4"><h1 class="mr-auto text-2xl" data-svelte-h="svelte-12fojij"><a href="/">Paste</a></h1> <button class="underline underline-offset-4 px-2 py-1" title="${escape(cmdKey, true) + "+I"}">Info</button> <button class="underline underline-offset-4 px-2 py-1" title="${escape(cmdKey, true) + "+N"}">New</button> <button class="underline underline-offset-4 px-2 py-1"${add_attribute(
    "title",
    encrypted ? "Warning: If you get the raw, it will decrypt on the server" : "",
    0
  )}>Raw</button> ${isOwner ? `<button class="bg-pink-500 text-black text-lg px-4 py-1" title="${escape(cmdKey, true) + "+E"}">Edit</button>` : ``} <button class="bg-amber-500 text-black text-lg px-4 py-1" title="${escape(cmdKey, true) + "+C"}">Copy</button></div></div> ${!encrypted ? `<div class="grow whitespace-pre bg-dark p-4 overflow-x-scroll"><!-- HTML_TAG_START -->${contentHtml}<!-- HTML_TAG_END --></div>` : `${`${passwordProtected && !isDecrypted ? `<div class="flex flex-col items-center gap-4 md:mt-10"><input class="md:w-1/3 text-lg px-4 py-1 bg-dark text-white" type="text" placeholder="Enter password..."${add_attribute("this", pwInputRef, 0)}${add_attribute("value", password, 0)}> <button class="md:w-fit bg-amber-500 text-black text-lg px-4 py-1" data-svelte-h="svelte-one9lr">Decrypt</button></div>` : `<div class="grow whitespace-pre bg-dark p-4 overflow-x-scroll"><pre class="svelte-5q1u89"><code class="${"language-" + escape(language, true)}"${add_attribute("this", codeRef, 0)}>${escape(content)}</code></pre></div>`}`}`}</div> ${$$result.head += `<!-- HEAD_svelte-1oly7fe_START --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css" integrity="sha512-vswe+cgvic/XBoF1OcM/TeJ2FW0OofqAVdCZiEYkd6dwGXthvkSFWOoGGJgS2CW70VK5dQM5Oh+7ne47s74VTg==" crossorigin="anonymous" referrerpolicy="no-referrer"><!-- HEAD_svelte-1oly7fe_END -->`, ""}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-mc-JbE9_.js.map
