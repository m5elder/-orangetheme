import { c as create_ssr_component, d as add_attribute, e as escape, f as each, v as validate_component } from "../../../chunks/ssr.js";
const css = {
  code: ".aspect-w-16.svelte-2jjbb5.svelte-2jjbb5{position:relative;padding-bottom:56.25%}.aspect-w-16.svelte-2jjbb5>img.svelte-2jjbb5{position:absolute;height:100%;width:100%;top:0;right:0;bottom:0;left:0;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center}.line-clamp-3.svelte-2jjbb5.svelte-2jjbb5{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}",
  map: '{"version":3,"file":"InsightCard.svelte","sources":["InsightCard.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let title;\\nexport let excerpt;\\nexport let date;\\nexport let author;\\nexport let category;\\nexport let imageUrl;\\nexport let slug;\\n<\/script>\\n\\n<a href={`/insights/${slug}`} class=\\"group\\">\\n  <article class=\\"glass-card overflow-hidden transition-all duration-200 hover:shadow-hover hover:border-primary-100\\">\\n    <div class=\\"aspect-w-16 aspect-h-9 relative overflow-hidden\\">\\n      <img \\n        src={imageUrl} \\n        alt={title} \\n        class=\\"w-full h-full object-cover transition-transform duration-300 group-hover:scale-105\\"\\n      />\\n      <div class=\\"absolute top-4 left-4\\">\\n        <span class=\\"inline-block bg-white/90 backdrop-blur-sm text-primary-700 text-xs font-medium px-2.5 py-1 rounded-full\\">\\n          {category}\\n        </span>\\n      </div>\\n    </div>\\n    <div class=\\"p-6\\">\\n      <div class=\\"flex items-center text-sm text-secondary-500 mb-2\\">\\n        <span>{date}</span>\\n        <span class=\\"mx-2\\">•</span>\\n        <span>{author}</span>\\n      </div>\\n      <h3 class=\\"text-xl font-semibold text-secondary-800 mb-2 group-hover:text-primary-600 transition-colors\\">{title}</h3>\\n      <p class=\\"text-secondary-600 line-clamp-3\\">{excerpt}</p>\\n      <div class=\\"mt-4\\">\\n        <span class=\\"inline-flex items-center text-primary-600 font-medium group-hover:text-primary-700\\">\\n          Read more\\n          <svg class=\\"ml-1 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1\\" fill=\\"none\\" viewBox=\\"0 0 24 24\\" stroke=\\"currentColor\\">\\n            <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M14 5l7 7m0 0l-7 7m7-7H3\\" />\\n          </svg>\\n        </span>\\n      </div>\\n    </div>\\n  </article>\\n</a>\\n\\n<style>\\n  .aspect-w-16 {\\n    position: relative;\\n    padding-bottom: 56.25%;\\n  }\\n  \\n  .aspect-w-16 > img {\\n    position: absolute;\\n    height: 100%;\\n    width: 100%;\\n    top: 0;\\n    right: 0;\\n    bottom: 0;\\n    left: 0;\\n    -o-object-fit: cover;\\n       object-fit: cover;\\n    -o-object-position: center;\\n       object-position: center;\\n  }\\n  \\n  .line-clamp-3 {\\n    display: -webkit-box;\\n    -webkit-line-clamp: 3;\\n    -webkit-box-orient: vertical;\\n    overflow: hidden;\\n  }\\n</style>"],"names":[],"mappings":"AA4CE,wCAAa,CACX,QAAQ,CAAE,QAAQ,CAClB,cAAc,CAAE,MAClB,CAEA,0BAAY,CAAG,iBAAI,CACjB,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,GAAG,CAAE,CAAC,CACN,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CAAC,CACT,IAAI,CAAE,CAAC,CACP,aAAa,CAAE,KAAK,CACjB,UAAU,CAAE,KAAK,CACpB,kBAAkB,CAAE,MAAM,CACvB,eAAe,CAAE,MACtB,CAEA,yCAAc,CACZ,OAAO,CAAE,WAAW,CACpB,kBAAkB,CAAE,CAAC,CACrB,kBAAkB,CAAE,QAAQ,CAC5B,QAAQ,CAAE,MACZ"}'
};
const InsightCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { excerpt } = $$props;
  let { date } = $$props;
  let { author } = $$props;
  let { category } = $$props;
  let { imageUrl } = $$props;
  let { slug } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.excerpt === void 0 && $$bindings.excerpt && excerpt !== void 0) $$bindings.excerpt(excerpt);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0) $$bindings.date(date);
  if ($$props.author === void 0 && $$bindings.author && author !== void 0) $$bindings.author(author);
  if ($$props.category === void 0 && $$bindings.category && category !== void 0) $$bindings.category(category);
  if ($$props.imageUrl === void 0 && $$bindings.imageUrl && imageUrl !== void 0) $$bindings.imageUrl(imageUrl);
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0) $$bindings.slug(slug);
  $$result.css.add(css);
  return `<a${add_attribute("href", `/insights/${slug}`, 0)} class="group"><article class="glass-card overflow-hidden transition-all duration-200 hover:shadow-hover hover:border-primary-100"><div class="aspect-w-16 aspect-h-9 relative overflow-hidden svelte-2jjbb5"><img${add_attribute("src", imageUrl, 0)}${add_attribute("alt", title, 0)} class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 svelte-2jjbb5"> <div class="absolute top-4 left-4"><span class="inline-block bg-white/90 backdrop-blur-sm text-primary-700 text-xs font-medium px-2.5 py-1 rounded-full">${escape(category)}</span></div></div> <div class="p-6"><div class="flex items-center text-sm text-secondary-500 mb-2"><span>${escape(date)}</span> <span class="mx-2" data-svelte-h="svelte-ybth69">•</span> <span>${escape(author)}</span></div> <h3 class="text-xl font-semibold text-secondary-800 mb-2 group-hover:text-primary-600 transition-colors">${escape(title)}</h3> <p class="text-secondary-600 line-clamp-3 svelte-2jjbb5">${escape(excerpt)}</p> <div class="mt-4" data-svelte-h="svelte-16udzqw"><span class="inline-flex items-center text-primary-600 font-medium group-hover:text-primary-700">Read more
          <svg class="ml-1 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></span></div></div></article> </a>`;
});
const Insights = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredArticles;
  const featuredArticles = [
    {
      title: "Navigating the EU AI Act: A Comprehensive Guide",
      excerpt: "A detailed breakdown of the EU's new AI regulation and what it means for organizations developing or deploying AI systems.",
      date: "March 15, 2024",
      author: "Dr. Sarah Chen",
      category: "Regulation",
      imageUrl: "https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      slug: "eu-ai-act-guide"
    },
    {
      title: "AI Risk Assessment Framework for Healthcare",
      excerpt: "Essential guidelines for healthcare organizations to evaluate and mitigate AI-related risks while ensuring patient safety.",
      date: "March 12, 2024",
      author: "Mark Johnson",
      category: "Healthcare",
      imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      slug: "healthcare-ai-risk-framework"
    },
    {
      title: "Privacy-Preserving AI Development",
      excerpt: "Best practices for building AI systems that protect user privacy while maintaining high performance and utility.",
      date: "March 8, 2024",
      author: "Lisa Wong",
      category: "Privacy",
      imageUrl: "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      slug: "privacy-preserving-ai"
    }
  ];
  const articles = [
    {
      title: "NIST AI Risk Management Framework: Implementation Guide",
      excerpt: "A step-by-step guide to implementing the NIST AI RMF in your organization, with practical examples and templates.",
      date: "March 5, 2024",
      author: "Dr. Sarah Chen",
      category: "Compliance",
      imageUrl: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      slug: "nist-ai-rmf-guide"
    },
    {
      title: "AI Vendor Due Diligence Checklist",
      excerpt: "Essential criteria and red flags to evaluate when assessing AI vendors for compliance and risk management.",
      date: "March 1, 2024",
      author: "Mark Johnson",
      category: "Procurement",
      imageUrl: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      slug: "ai-vendor-checklist"
    },
    {
      title: "Building an AI Governance Committee",
      excerpt: "How to structure and operate an effective AI governance committee in your organization.",
      date: "February 25, 2024",
      author: "Lisa Wong",
      category: "Governance",
      imageUrl: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      slug: "ai-governance-committee"
    },
    {
      title: "AI Documentation Best Practices",
      excerpt: "Comprehensive guide to documenting AI systems for transparency, compliance, and risk management.",
      date: "February 20, 2024",
      author: "James Peterson",
      category: "Documentation",
      imageUrl: "https://images.pexels.com/photos/3205568/pexels-photo-3205568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      slug: "ai-documentation-guide"
    },
    {
      title: "Ethical AI Development Guidelines",
      excerpt: "Framework for ensuring ethical considerations are embedded throughout the AI development lifecycle.",
      date: "February 15, 2024",
      author: "Dr. Sarah Chen",
      category: "Ethics",
      imageUrl: "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      slug: "ethical-ai-guidelines"
    },
    {
      title: "AI Incident Response Planning",
      excerpt: "How to prepare for and respond to AI-related incidents and failures in production systems.",
      date: "February 10, 2024",
      author: "Mark Johnson",
      category: "Risk Management",
      imageUrl: "https://images.pexels.com/photos/7691714/pexels-photo-7691714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      slug: "ai-incident-response"
    }
  ];
  const categories = [
    "All",
    "Regulation",
    "Healthcare",
    "Privacy",
    "Compliance",
    "Procurement",
    "Governance",
    "Documentation",
    "Ethics",
    "Risk Management"
  ];
  let selectedCategory = "All";
  filteredArticles = articles;
  return `<section class="bg-gradient-to-b from-primary-50 to-white py-16 md:py-24"><div class="container"><div class="max-w-3xl mx-auto text-center mb-12" data-svelte-h="svelte-f2u1xj"><h1 class="text-3xl md:text-4xl font-semibold text-secondary-900 mb-4">AI Risk Insights</h1> <p class="text-xl text-secondary-700">Expert analysis and guidance on AI risk management, compliance, and governance</p></div>  <div class="mb-16"><h2 class="text-2xl font-semibold text-secondary-800 mb-8" data-svelte-h="svelte-1fomcbe">Featured Articles</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-8">${each(featuredArticles, (article) => {
    return `${validate_component(InsightCard, "InsightCard").$$render($$result, Object.assign({}, article), {}, {})}`;
  })}</div></div>  <div class="mb-8"><div class="flex flex-wrap gap-2">${each(categories, (category) => {
    return `<button class="${"px-4 py-2 rounded-full text-sm font-medium transition-colors " + escape(
      selectedCategory === category ? "bg-primary-600 text-white" : "glass-card hover:bg-white/80",
      true
    )}">${escape(category)} </button>`;
  })}</div></div>  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">${each(filteredArticles, (article) => {
    return `${validate_component(InsightCard, "InsightCard").$$render($$result, Object.assign({}, article), {}, {})}`;
  })}</div>  <div class="mt-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl shadow-soft overflow-hidden" data-svelte-h="svelte-b2yi4a"><div class="p-8 md:p-12"><div class="md:flex md:items-center md:justify-between"><div class="mb-6 md:mb-0 md:mr-8"><h2 class="text-2xl font-semibold text-white mb-2">Stay informed on AI risk</h2> <p class="text-primary-100">Get our latest insights and expert guidance delivered straight to your inbox</p></div> <div class="flex-shrink-0 flex flex-col sm:flex-row gap-4"><input type="email" placeholder="Enter your email" class="glass-card px-4 py-3 text-secondary-800 focus:outline-none focus:ring-2 focus:ring-white border-white/20"> <button class="bg-white text-primary-700 font-medium rounded-xl px-6 py-3 hover:bg-primary-50 transition-colors">Subscribe</button></div></div></div></div></div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Insights, "Insights").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
