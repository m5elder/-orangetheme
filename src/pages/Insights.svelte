<script lang="ts">
  import InsightCard from '$lib/components/InsightCard.svelte';
  
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
  
  function filterByCategory(category: string) {
    selectedCategory = category;
  }
  
  $: filteredArticles = selectedCategory === "All" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);
</script>

<section class="bg-gradient-to-b from-primary-50 to-white py-16 md:py-24">
  <div class="container">
    <div class="max-w-3xl mx-auto text-center mb-12">
      <h1 class="text-3xl md:text-4xl font-semibold text-secondary-900 mb-4">
        AI Risk Insights
      </h1>
      <p class="text-xl text-secondary-700">
        Expert analysis and guidance on AI risk management, compliance, and governance
      </p>
    </div>
    
    <!-- Featured Articles -->
    <div class="mb-16">
      <h2 class="text-2xl font-semibold text-secondary-800 mb-8">
        Featured Articles
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {#each featuredArticles as article}
          <InsightCard {...article} />
        {/each}
      </div>
    </div>
    
    <!-- Category Filters -->
    <div class="mb-8">
      <div class="flex flex-wrap gap-2">
        {#each categories as category}
          <button 
            class="px-4 py-2 rounded-full text-sm font-medium transition-colors {selectedCategory === category ? 'bg-primary-600 text-white' : 'glass-card hover:bg-white/80'}"
            on:click={() => filterByCategory(category)}
          >
            {category}
          </button>
        {/each}
      </div>
    </div>
    
    <!-- Articles Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each filteredArticles as article}
        <InsightCard {...article} />
      {/each}
    </div>
    
    <!-- Newsletter Signup -->
    <div class="mt-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl shadow-soft overflow-hidden">
      <div class="p-8 md:p-12">
        <div class="md:flex md:items-center md:justify-between">
          <div class="mb-6 md:mb-0 md:mr-8">
            <h2 class="text-2xl font-semibold text-white mb-2">
              Stay informed on AI risk
            </h2>
            <p class="text-primary-100">
              Get our latest insights and expert guidance delivered straight to your inbox
            </p>
          </div>
          <div class="flex-shrink-0 flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              class="glass-card px-4 py-3 text-secondary-800 focus:outline-none focus:ring-2 focus:ring-white border-white/20"
            />
            <button class="bg-white text-primary-700 font-medium rounded-xl px-6 py-3 hover:bg-primary-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>