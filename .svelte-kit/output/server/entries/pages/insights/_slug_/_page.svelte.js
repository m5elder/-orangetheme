import { c as create_ssr_component, b as subscribe, e as escape } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
const css = {
  code: ".prose{max-width:65ch;margin-left:auto;margin-right:auto}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { page } from \\"$app/stores\\";\\n$: slug = $page.params.slug;\\n<\/script>\\n\\n<div class=\\"max-w-4xl mx-auto px-4 py-12\\">\\n  <div class=\\"prose prose-lg\\">\\n    <!-- Temporary content until data fetching is implemented -->\\n    <h1>Article: {slug}</h1>\\n    <p>This page is under construction. The full article content will be displayed here.</p>\\n  </div>\\n</div>\\n\\n<style>\\n  :global(.prose) {\\n    max-width: 65ch;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n</style>"],"names":[],"mappings":"AAaU,MAAQ,CACd,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IAAI,CACjB,YAAY,CAAE,IAChB"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let slug;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  slug = $page.params.slug;
  $$unsubscribe_page();
  return `<div class="max-w-4xl mx-auto px-4 py-12"><div class="prose prose-lg"> <h1>Article: ${escape(slug)}</h1> <p data-svelte-h="svelte-1fjzkz">This page is under construction. The full article content will be displayed here.</p></div> </div>`;
});
export {
  Page as default
};
