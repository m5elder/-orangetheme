import { c as create_ssr_component, e as escape, d as add_attribute, f as each, v as validate_component } from "../../../chunks/ssr.js";
import { B as Button } from "../../../chunks/Button.js";
const totalSteps = 4;
const PolicyForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentStep = 1;
  let form = {
    organization: {
      name: ""
    }
  };
  const industries = [
    "Healthcare",
    "Finance",
    "Manufacturing",
    "Retail",
    "Technology",
    "Education",
    "Government",
    "Non-profit",
    "Other"
  ];
  const sizes = [
    "1-50 employees",
    "51-250 employees",
    "251-1000 employees",
    "1001-5000 employees",
    "5000+ employees"
  ];
  const regions = [
    "North America",
    "European Union",
    "United Kingdom",
    "Asia Pacific",
    "Latin America",
    "Middle East & Africa",
    "Global"
  ];
  return `<div class="bg-white rounded-xl shadow-soft overflow-hidden"><div class="bg-primary-50 p-6 border-b border-primary-100"><h2 class="text-2xl font-semibold text-secondary-800" data-svelte-h="svelte-1eflgoa">AI Policy Builder</h2> <p class="text-secondary-600 mt-2" data-svelte-h="svelte-3gk5kn">Create a customized AI governance policy for your organization</p>  <div class="mt-6"><div class="flex justify-between mb-2"><span class="text-sm font-medium text-secondary-700" data-svelte-h="svelte-1l0eyrp">Progress</span> <span class="text-sm font-medium text-secondary-700">${escape(
    Math.round((currentStep - 1) / (totalSteps - 1) * 100)
  )}%</span></div> <div class="h-2 bg-primary-100 rounded-full"><div class="h-2 bg-primary-600 rounded-full transition-all duration-300" style="${"width: " + escape(
    Math.round((currentStep - 1) / (totalSteps - 1) * 100),
    true
  ) + "%"}"></div></div></div></div> <div class="p-6"> ${`<div class="animate-fade-in"><h3 class="text-xl font-semibold text-secondary-800 mb-4" data-svelte-h="svelte-rzc554">Organization Information</h3> <div class="space-y-4"><div><label for="org-name" class="block text-sm font-medium text-secondary-700 mb-1" data-svelte-h="svelte-1w3wp44">Organization Name</label> <input type="text" id="org-name" class="w-full rounded-lg border border-secondary-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500" placeholder="Enter your organization's name"${add_attribute("value", form.organization.name, 0)}></div> <div><label for="industry" class="block text-sm font-medium text-secondary-700 mb-1" data-svelte-h="svelte-4mbzuk">Industry</label> <select id="industry" class="w-full rounded-lg border border-secondary-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"><option value="" disabled selected data-svelte-h="svelte-fv62ti">Select your industry</option>${each(industries, (industry) => {
    return `<option${add_attribute("value", industry, 0)}>${escape(industry)}</option>`;
  })}</select></div> <div><label for="size" class="block text-sm font-medium text-secondary-700 mb-1" data-svelte-h="svelte-q9xfxx">Organization Size</label> <select id="size" class="w-full rounded-lg border border-secondary-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"><option value="" disabled selected data-svelte-h="svelte-ndfm07">Select organization size</option>${each(sizes, (size) => {
    return `<option${add_attribute("value", size, 0)}>${escape(size)}</option>`;
  })}</select></div> <div><label for="region" class="block text-sm font-medium text-secondary-700 mb-1" data-svelte-h="svelte-1bj36eh">Primary Operating Region</label> <select id="region" class="w-full rounded-lg border border-secondary-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"><option value="" disabled selected data-svelte-h="svelte-zlvanz">Select primary region</option>${each(regions, (region) => {
    return `<option${add_attribute("value", region, 0)}>${escape(region)}</option>`;
  })}</select></div></div> <div class="mt-8 flex justify-end">${validate_component(Button, "Button").$$render($$result, { variant: "primary" }, {}, {
    default: () => {
      return `Continue`;
    }
  })}</div></div>`}  ${``}  ${``}  ${``}  ${``}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="bg-gradient-to-b from-primary-50 to-white py-16 md:py-24"><div class="container"><div class="max-w-3xl mx-auto text-center mb-12" data-svelte-h="svelte-odm20d"><h1 class="text-3xl md:text-4xl font-semibold text-secondary-900 mb-4">AI Policy Builder</h1> <p class="text-xl text-secondary-700">Create custom AI governance policies tailored to your organization&#39;s specific needs</p></div> <div class="max-w-4xl mx-auto">${validate_component(PolicyForm, "PolicyForm").$$render($$result, {}, {}, {})} <div class="mt-12 grid md:grid-cols-3 gap-6" data-svelte-h="svelte-1yrk1x2"><div class="bg-white rounded-xl shadow-soft p-6"><div class="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4"><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg></div> <h3 class="text-lg font-semibold text-secondary-800 mb-2">Complete Templates</h3> <p class="text-secondary-600">Professionally crafted policy templates based on industry standards</p></div> <div class="bg-white rounded-xl shadow-soft p-6"><div class="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4"><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg></div> <h3 class="text-lg font-semibold text-secondary-800 mb-2">Customizable</h3> <p class="text-secondary-600">Tailor policies to your specific industry, region, and compliance needs</p></div> <div class="bg-white rounded-xl shadow-soft p-6"><div class="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4"><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg></div> <h3 class="text-lg font-semibold text-secondary-800 mb-2">Compliance-Ready</h3> <p class="text-secondary-600">Aligned with key AI regulations and frameworks like NIST AI RMF and EU AI Act</p></div></div></div></div></section>`;
});
export {
  Page as default
};
