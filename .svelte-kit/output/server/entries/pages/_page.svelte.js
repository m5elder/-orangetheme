import { c as create_ssr_component, f as each, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { B as Button } from "../../chunks/Button.js";
const HowItWorks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const steps = [
    {
      number: 1,
      title: "Ask AI about risk",
      description: "Use our AI to get instant, expert answers about AI regulation, vendor risks, or policy compliance questions.",
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />'
    },
    {
      number: 2,
      title: "Generate policies",
      description: "Transform your requirements into complete, compliant AI policies tailored to your organization's needs.",
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />'
    },
    {
      number: 3,
      title: "Get expert help",
      description: "Book live consultations with AI risk specialists for deeper strategic guidance and implementation support.",
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />'
    }
  ];
  return `<section class="bg-white py-16 md:py-24"><div class="container"><div class="text-center max-w-3xl mx-auto mb-16" data-svelte-h="svelte-4bavvz"><h2 class="text-3xl md:text-4xl font-semibold text-secondary-900 mb-4">How It Works</h2> <p class="text-xl text-secondary-600">Simplify AI risk management with our comprehensive platform</p></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">${each(steps, (step, i) => {
    return `<div class="relative animate-on-scroll" style="${"transition-delay: " + escape(i * 100, true) + "ms"}"><div class="flex flex-col items-center text-center"><div class="mb-6 w-16 h-16 flex items-center justify-center bg-primary-100 text-primary-700 rounded-full text-xl font-bold">${escape(step.number)}</div> <h3 class="text-xl font-semibold mb-3 text-secondary-800">${escape(step.title)}</h3> <p class="text-secondary-600">${escape(step.description)}</p></div> ${i < steps.length - 1 ? `<div class="hidden md:block absolute top-1/4 right-0 w-full h-0.5 bg-primary-100 transform translate-x-1/2" data-svelte-h="svelte-16ibpii"><div class="absolute right-0 top-1/2 w-3 h-3 bg-primary-500 rounded-full transform -translate-y-1/2 translate-x-1/2"></div> </div>` : ``} </div>`;
  })}</div></div></section>`;
});
const TrustIndicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { description } = $$props;
  let { icon } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0) $$bindings.description(description);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0) $$bindings.icon(icon);
  return `<div class="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-soft hover:shadow-hover transition-shadow duration-200"><div class="mb-4 w-16 h-16 flex items-center justify-center bg-primary-50 text-primary-600 rounded-full"><svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><!-- HTML_TAG_START -->${icon}<!-- HTML_TAG_END --></svg></div> <h3 class="text-xl font-semibold mb-2 text-secondary-800">${escape(title)}</h3> <p class="text-secondary-600">${escape(description)}</p></div>`;
});
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const trustIndicators = [
    {
      title: "Privacy-First Architecture",
      description: "Your data never trains our models and is automatically deleted after processing.",
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />'
    },
    {
      title: "Built by Cybersecurity Professionals",
      description: "Our team combines decades of security, compliance, and AI expertise.",
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />'
    },
    {
      title: "Aligned to NIST AI RMF",
      description: "Our approach follows the most trusted AI risk management frameworks in the industry.",
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />'
    }
  ];
  return ` <section class="bg-gradient-to-b from-primary-50 to-white pt-16 pb-24 md:pt-24 md:pb-32"><div class="container"><div class="max-w-3xl mx-auto text-center"><h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6 leading-tight" data-svelte-h="svelte-anyynm">AI moves fast, risk moves faster.</h1> <p class="text-xl md:text-2xl text-secondary-700 mb-8 md:mb-12" data-svelte-h="svelte-1u5j8t">Your expert AI risk analyst, built to help you navigate compliance, strategy, and risk without the overhead.</p> <div class="flex flex-col sm:flex-row gap-4 justify-center">${validate_component(Button, "Button").$$render(
    $$result,
    {
      href: "/chat",
      variant: "primary",
      size: "lg"
    },
    {},
    {
      default: () => {
        return `Try the AI Risk Assistant – Free`;
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
        return `Book a Live Consultation`;
      }
    }
  )}</div></div></div></section>  <section class="py-16 md:py-24 bg-white"><div class="container"><h2 class="text-3xl md:text-4xl font-semibold text-center text-secondary-900 mb-12" data-svelte-h="svelte-18j3pks">Trusted AI Risk Guidance</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-8">${each(trustIndicators, (indicator, i) => {
    return `<div class="animate-on-scroll" style="${"transition-delay: " + escape(i * 100, true) + "ms"}">${validate_component(TrustIndicator, "TrustIndicator").$$render(
      $$result,
      {
        title: indicator.title,
        description: indicator.description,
        icon: indicator.icon
      },
      {},
      {}
    )} </div>`;
  })}</div></div></section>  ${validate_component(HowItWorks, "HowItWorks").$$render($$result, {}, {}, {})}  <section class="bg-primary-50 py-16 md:py-24"><div class="container"><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"><div class="order-2 lg:order-1 animate-on-scroll"><h2 class="text-3xl md:text-4xl font-semibold text-secondary-900 mb-6" data-svelte-h="svelte-1nbxz53">Simplify AI Risk Management</h2> <p class="text-xl text-secondary-700 mb-8" data-svelte-h="svelte-193mbq0">Stop spending valuable time trying to keep up with the rapidly evolving AI risk landscape.</p> <ul class="space-y-4 mb-8" data-svelte-h="svelte-l6yl7c"><li class="flex items-start"><svg class="w-6 h-6 text-accent-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> <span class="text-lg text-secondary-700">Get instant answers to complex AI compliance questions</span></li> <li class="flex items-start"><svg class="w-6 h-6 text-accent-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> <span class="text-lg text-secondary-700">Generate tailored policies and governance frameworks</span></li> <li class="flex items-start"><svg class="w-6 h-6 text-accent-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> <span class="text-lg text-secondary-700">Access expert guidance when needed for complex scenarios</span></li></ul> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      href: "/chat",
      variant: "primary",
      size: "lg"
    },
    {},
    {
      default: () => {
        return `Try the AI Risk Assistant`;
      }
    }
  )}</div> <div class="order-1 lg:order-2 animate-on-scroll" data-svelte-h="svelte-sz95rh"><div class="glass-card overflow-hidden"><img src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2" alt="AI Risk Management Dashboard" class="w-full h-auto object-cover"></div></div></div></div></section>  <section class="bg-gradient-to-br from-white to-primary-50/50 py-16 md:py-20 text-secondary-900"><div class="container text-center"><h2 class="text-3xl md:text-4xl font-semibold mb-6" data-svelte-h="svelte-1wi8ngz">Ready to simplify your AI risk management?</h2> <p class="text-xl text-secondary-700 mb-8 max-w-2xl mx-auto" data-svelte-h="svelte-1jtfzg6">Join organizations that are staying ahead of AI risks while focusing on innovation.</p> <div class="flex flex-col sm:flex-row gap-4 justify-center">${validate_component(Button, "Button").$$render(
    $$result,
    {
      href: "/signup",
      variant: "accent",
      size: "lg"
    },
    {},
    {
      default: () => {
        return `Start Free Trial`;
      }
    }
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      href: "/pricing",
      variant: "secondary",
      size: "lg"
    },
    {},
    {
      default: () => {
        return `View Pricing`;
      }
    }
  )}</div></div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Home, "Home").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
