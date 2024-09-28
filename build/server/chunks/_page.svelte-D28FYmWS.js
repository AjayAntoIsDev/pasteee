import { c as create_ssr_component, d as add_attribute } from './ssr-CSRYa6Ab.js';
import './client-CjdeEz1m.js';
import { s as secondsToDHM, D as DHMToSeconds } from './time-CX0N8-LY.js';
import './exports-DuWZopOC.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let settings;
  let { data } = $$props;
  let { form } = $$props;
  let expiresAfter = {};
  let expiresAfterSeconds = 0;
  const updateInitialConfig = (defaults) => {
    if (!defaults)
      return;
    if (defaults?.expiresAfterSeconds) {
      expiresAfterSeconds = defaults.expiresAfterSeconds;
      expiresAfter = secondsToDHM(expiresAfterSeconds);
    }
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  settings = form?.defaultsForm?.settings || data?.settings;
  {
    updateInitialConfig(settings?.defaults);
  }
  {
    {
      expiresAfterSeconds = DHMToSeconds(expiresAfter);
      expiresAfterSeconds = Math.min(expiresAfterSeconds, 365 * 24 * 60 * 60);
      if (expiresAfterSeconds > 0) {
        expiresAfterSeconds = Math.max(expiresAfterSeconds, 5 * 60);
        expiresAfter = secondsToDHM(expiresAfterSeconds);
      } else {
        expiresAfter = {};
      }
    }
  }
  return `<h1 class="text-5xl" data-svelte-h="svelte-o50bih">Settings</h1> <div class="px-4"><h4 class="text-2xl mt-6 mb-4" data-svelte-h="svelte-1qs9gvj">Defaults</h4> <form method="post" action="?/defaults" class="mt-2 flex flex-col gap-4"><div><label for="encrypted" class="py-2" data-svelte-h="svelte-9ph1v3">Encrypted</label> <input id="encrypted" class="bg-dark px-2 py-1" type="checkbox" name="encrypted" ${settings?.defaults?.encrypted ? "checked" : ""}></div> <div><label for="burn-after-read" class="py-2" data-svelte-h="svelte-v30ruf">Burn after read</label> <input id="burn-after-read" class="bg-dark px-2 py-1" type="checkbox" name="burn-after-read" ${settings?.defaults?.burnAfterRead ? "checked" : ""}></div> <div><span data-svelte-h="svelte-j38af3">Expires in:</span> <div class="grid grid-cols-3 gap-2 justify-center items-center"><input type="number" class="bg-dark py-1 text-center" placeholder="DD"${add_attribute("value", expiresAfter.days, 0)}> <input type="number" class="bg-dark py-1 text-center" placeholder="HH"${add_attribute("value", expiresAfter.hours, 0)}> <input type="number" class="bg-dark py-1 text-center" placeholder="MM"${add_attribute("value", expiresAfter.minutes, 0)}> <input type="hidden" name="expires-after-seconds"${add_attribute("value", expiresAfterSeconds, 0)}></div></div> <div class="mt-2"><button class="bg-amber-500 text-black text-lg px-4 py-1" data-svelte-h="svelte-yr5vrd">Save</button> ${form?.defaultsForm.success ? `<span class="text-green-500" data-svelte-h="svelte-1n07gf">Saved</span> ` : ``}</div></form></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-D28FYmWS.js.map
