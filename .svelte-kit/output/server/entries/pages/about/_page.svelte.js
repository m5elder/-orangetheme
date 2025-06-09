import { c as create_ssr_component, g as compute_rest_props, h as spread, f as each, i as escape_object, j as escape_attribute_value, v as validate_component } from "../../../chunks/ssr.js";
import { B as Button } from "../../../chunks/Button.js";
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
/**
 * @license lucide-svelte v0.309.0 - ISC

This source code is licensed under the ISC license.
See the LICENSE file in the root directory of this source tree.
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["name", "color", "size", "strokeWidth", "absoluteStrokeWidth", "iconNode"]);
  let { name } = $$props;
  let { color = "currentColor" } = $$props;
  let { size = 24 } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { absoluteStrokeWidth = false } = $$props;
  let { iconNode } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  if ($$props.absoluteStrokeWidth === void 0 && $$bindings.absoluteStrokeWidth && absoluteStrokeWidth !== void 0) $$bindings.absoluteStrokeWidth(absoluteStrokeWidth);
  if ($$props.iconNode === void 0 && $$bindings.iconNode && iconNode !== void 0) $$bindings.iconNode(iconNode);
  return `  <svg${spread(
    [
      escape_object(defaultAttributes),
      escape_object($$restProps),
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { stroke: escape_attribute_value(color) },
      {
        "stroke-width": escape_attribute_value(absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth)
      },
      {
        class: escape_attribute_value(`lucide-icon lucide lucide-${name} ${$$props.class ?? ""}`)
      }
    ],
    {}
  )}>${each(iconNode, ([tag, attrs]) => {
    return `${((tag$1) => {
      return tag$1 ? `<${tag}${spread([escape_object(attrs)], {})}>${is_void(tag$1) ? "" : ``}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
    })(tag)}`;
  })}${slots.default ? slots.default({}) : ``}</svg>`;
});
const Check_circle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M22 11.08V12a10 10 0 1 1-5.93-9.14"
      }
    ],
    ["path", { "d": "m9 11 3 3L22 4" }]
  ];
  return `  ${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "check-circle" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Target = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["circle", { "cx": "12", "cy": "12", "r": "6" }],
    ["circle", { "cx": "12", "cy": "12", "r": "2" }]
  ];
  return `  ${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "target" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Users = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
      }
    ],
    ["circle", { "cx": "9", "cy": "7", "r": "4" }],
    ["path", { "d": "M22 21v-2a4 4 0 0 0-3-3.87" }],
    ["path", { "d": "M16 3.13a4 4 0 0 1 0 7.75" }]
  ];
  return `  ${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "users" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="relative overflow-hidden"> <div class="absolute inset-0 mesh-gradient opacity-30"></div>  <div class="absolute top-40 -right-32 w-96 h-96 rounded-full bg-primary-500/10 blur-3xl"></div> <div class="absolute bottom-40 -left-32 w-96 h-96 rounded-full bg-accent-500/10 blur-3xl"></div> <div class="absolute top-[60%] left-1/2 -translate-x-1/2 w-full h-96 rounded-full bg-primary-500/5 blur-3xl"></div> <div class="relative z-10"><div class="bg-white relative overflow-hidden py-16"><div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-accent-500"></div> <div class="container mx-auto px-4"><div class="max-w-3xl mx-auto text-center"><div class="inline-block mb-4"><div class="inline-flex items-center rounded-full border border-primary-500/20 bg-white/80 backdrop-blur-sm px-3 py-1 text-sm"><span class="mr-2 bg-primary-500/10 rounded-full p-1">${validate_component(Target, "Target").$$render($$result, { class: "w-4 h-4 text-primary-500" }, {}, {})}</span> <span class="text-secondary-600" data-svelte-h="svelte-s96ku7">Our story</span></div></div> <h1 class="text-3xl md:text-4xl font-bold mb-6 tracking-tight" data-svelte-h="svelte-1t8lqqu">About <span class="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">80/20 Rule AI</span></h1> <p class="text-lg mb-8 text-secondary-600" data-svelte-h="svelte-1nhy91q">We&#39;re building tools to help organizations navigate the complex world of AI risk and compliance.</p></div></div></div> <div class="container mx-auto px-4 py-16"><div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20"><div><h2 class="text-2xl font-bold mb-6" data-svelte-h="svelte-conuac">Our Mission</h2> <p class="mb-6 text-secondary-600" data-svelte-h="svelte-e0wrww">We believe that organizations shouldn&#39;t have to choose between innovation and compliance. Our mission is to make AI risk management accessible, straightforward, and effective.</p> <p class="mb-6 text-secondary-600" data-svelte-h="svelte-1mb14ik">The 80/20 Rule AI platform helps you identify and address the 20% of AI risks that cause 80% of potential harm, so you can focus your resources where they matter most.</p> <div class="space-y-4"><div class="flex gap-3 p-4 rounded-lg border bg-white hover:shadow-hover transition-all duration-200">${validate_component(Check_circle, "CheckCircle").$$render(
    $$result,
    {
      class: "w-6 h-6 text-primary-500 flex-shrink-0"
    },
    {},
    {}
  )} <div data-svelte-h="svelte-1s0d2re"><h3 class="font-medium">Simplify Compliance</h3> <p class="text-secondary-600">We translate complex regulations into actionable steps.</p></div></div> <div class="flex gap-3 p-4 rounded-lg border bg-white hover:shadow-hover transition-all duration-200">${validate_component(Check_circle, "CheckCircle").$$render(
    $$result,
    {
      class: "w-6 h-6 text-primary-500 flex-shrink-0"
    },
    {},
    {}
  )} <div data-svelte-h="svelte-kwy2q1"><h3 class="font-medium">Protect Your Organization</h3> <p class="text-secondary-600">Identify hidden risks in AI tool terms and contracts.</p></div></div> <div class="flex gap-3 p-4 rounded-lg border bg-white hover:shadow-hover transition-all duration-200">${validate_component(Check_circle, "CheckCircle").$$render(
    $$result,
    {
      class: "w-6 h-6 text-primary-500 flex-shrink-0"
    },
    {},
    {}
  )} <div data-svelte-h="svelte-1dqmgtn"><h3 class="font-medium">Enable Responsible Innovation</h3> <p class="text-secondary-600">Use AI confidently with proper safeguards in place.</p></div></div></div></div> <div class="relative" data-svelte-h="svelte-a3hp3t"><div class="absolute -z-10 inset-0 bg-gradient-to-tr from-primary-500/10 to-accent-500/10 rounded-3xl transform rotate-3"></div> <div class="absolute -z-10 inset-0 bg-gradient-to-bl from-primary-500/10 to-accent-500/10 rounded-3xl transform -rotate-3"></div> <div class="bg-secondary-50 rounded-lg overflow-hidden shadow-xl"><img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&amp;w=2670&amp;auto=format&amp;fit=crop" alt="Team collaboration" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"></div></div></div> <div class="mb-20"><div class="text-center mb-10"><div class="inline-block mb-4"><div class="inline-flex items-center rounded-full border border-primary-500/20 bg-white/80 backdrop-blur-sm px-3 py-1 text-sm"><span class="mr-2 bg-primary-500/10 rounded-full p-1">${validate_component(Users, "Users").$$render($$result, { class: "w-4 h-4 text-primary-500" }, {}, {})}</span> <span class="text-secondary-600" data-svelte-h="svelte-j671kc">Meet our experts</span></div></div> <h2 class="text-2xl font-bold mb-4" data-svelte-h="svelte-1201ik5">Our Team</h2></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto" data-svelte-h="svelte-rqlt1d"><div class="bg-white border border-secondary-200 rounded-lg p-6 flex flex-col items-center text-center hover:shadow-hover transition-all duration-200"><div class="w-48 h-48 rounded-full overflow-hidden mb-6 ring-4 ring-primary-500/10"><img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&amp;w=2574&amp;auto=format&amp;fit=crop" alt="Marcy Elder" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"></div> <h3 class="text-xl font-semibold mb-2">Marcy Elder</h3> <p class="text-primary-500 mb-4">Co-founder &amp; CEO</p> <p class="text-secondary-600 mb-4">Former head of AI security at a Fortune 500 company with 15+ years of experience in cybersecurity and regulatory compliance.</p></div> <div class="bg-white border border-secondary-200 rounded-lg p-6 flex flex-col items-center text-center hover:shadow-hover transition-all duration-200"><div class="w-48 h-48 rounded-full overflow-hidden mb-6 ring-4 ring-primary-500/10"><img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&amp;w=2670&amp;auto=format&amp;fit=crop" alt="Zach Drake" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"></div> <h3 class="text-xl font-semibold mb-2">Zach Drake</h3> <p class="text-primary-500 mb-4">Co-founder &amp; CTO</p> <p class="text-secondary-600 mb-4">AI engineer with a background in building secure AI systems for healthcare and financial services. Expert in ML operations and risk mitigation.</p></div></div></div> <div class="mb-20" data-svelte-h="svelte-nv3pt8"><h2 class="text-2xl font-bold mb-6 text-center">Why We Built This</h2> <div class="max-w-3xl mx-auto"><div class="relative px-8 py-10 rounded-xl bg-white border border-secondary-200"><div class="absolute -z-10 inset-0 bg-gradient-to-tr from-primary-500/5 to-accent-500/5 rounded-xl"></div> <p class="mb-6 text-secondary-600">After years of building AI systems for enterprise clients, we saw firsthand how organizations struggled with managing AI risk. The problem wasn&#39;t a lack of willingness to comply—it was the overwhelming complexity of regulations and hidden risks in vendor agreements.</p> <p class="mb-6 text-secondary-600">We realized that our expertise in both AI development and compliance could help bridge this gap. So we built 80/20 Rule AI to automate the risk identification and policy creation processes we had been doing manually for clients.</p> <p class="mb-0 text-center font-medium bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">We do this for real, and that&#39;s why we can automate it.</p></div></div></div> <div class="bg-white border border-secondary-200 rounded-lg p-8 text-center max-w-3xl mx-auto relative"><div class="absolute -z-10 inset-0 bg-gradient-to-tr from-primary-500/5 to-accent-500/5 rounded-xl"></div> <div class="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-500/10 flex items-center justify-center">${validate_component(Users, "Users").$$render($$result, { class: "w-7 h-7 text-primary-500" }, {}, {})}</div> <h2 class="text-2xl font-bold mb-4" data-svelte-h="svelte-rv7kvz">Join Us in Building Responsible AI</h2> <p class="mb-6 text-secondary-600" data-svelte-h="svelte-that8v">Ready to implement safe, compliant AI practices in your organization? Get started with our free tools or book a consultation.</p> <div class="flex flex-col sm:flex-row gap-4 justify-center">${validate_component(Button, "Button").$$render(
    $$result,
    {
      href: "/chat",
      variant: "primary",
      size: "lg"
    },
    {},
    {
      default: () => {
        return `Try Free AI Assistant`;
      }
    }
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      href: "/consult",
      variant: "secondary",
      size: "lg"
    },
    {},
    {
      default: () => {
        return `Book a Consultation`;
      }
    }
  )}</div></div></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(About, "About").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
