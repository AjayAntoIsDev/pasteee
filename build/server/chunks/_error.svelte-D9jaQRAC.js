import { c as create_ssr_component, b as subscribe, e as escape } from './ssr-CSRYa6Ab.js';
import { p as page } from './stores-B5ZvaBim.js';
import './client-CjdeEz1m.js';
import './exports-DuWZopOC.js';

const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1 class="text-2xl text-center mt-10">${escape($page.status)}: ${escape($page?.error?.message)}</h1>`;
});

export { Error as default };
//# sourceMappingURL=_error.svelte-D9jaQRAC.js.map
