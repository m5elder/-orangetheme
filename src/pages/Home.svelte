<script>
  import { onMount } from 'svelte';
  import Button from '$lib/components/Button.svelte';
  import HowItWorks from '$lib/components/HowItWorks.svelte';
  import TrustIndicator from '$lib/components/TrustIndicator.svelte';
  
  // Trust indicators data
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
  
  onMount(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    elements.forEach(element => {
      observer.observe(element);
    });
  });
</script>

<!-- Hero Section -->
<section class="bg-gradient-to-b from-primary-50 to-white pt-16 pb-24 md:pt-24 md:pb-32">
  <div class="container">
    <div class="max-w-3xl mx-auto text-center">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6 leading-tight">
        AI moves fast, risk moves faster.
      </h1>
      <p class="text-xl md:text-2xl text-secondary-700 mb-8 md:mb-12">
        Your expert AI risk analyst, built to help you navigate compliance, strategy, and risk without the overhead.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <Button href="/chat" variant="primary" size="lg">Try the AI Risk Assistant – Free</Button>
        <Button href="/consult" variant="secondary" size="lg">Book a Live Consultation</Button>
      </div>
    </div>
  </div>
</section>

<!-- Trust Indicators Section -->
<section class="py-16 md:py-24 bg-white">
  <div class="container">
    <h2 class="text-3xl md:text-4xl font-semibold text-center text-secondary-900 mb-12">
      Trusted AI Risk Guidance
    </h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each trustIndicators as indicator, i}
        <div class="animate-on-scroll" style="transition-delay: {i * 100}ms">
          <TrustIndicator 
            title={indicator.title} 
            description={indicator.description} 
            icon={indicator.icon} 
          />
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- How It Works Section -->
<HowItWorks />

<!-- Features Highlight Section -->
<section class="bg-primary-50 py-16 md:py-24">
  <div class="container">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div class="order-2 lg:order-1 animate-on-scroll">
        <h2 class="text-3xl md:text-4xl font-semibold text-secondary-900 mb-6">
          Simplify AI Risk Management
        </h2>
        <p class="text-xl text-secondary-700 mb-8">
          Stop spending valuable time trying to keep up with the rapidly evolving AI risk landscape.
        </p>
        
        <ul class="space-y-4 mb-8">
          <li class="flex items-start">
            <svg class="w-6 h-6 text-accent-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-lg text-secondary-700">Get instant answers to complex AI compliance questions</span>
          </li>
          <li class="flex items-start">
            <svg class="w-6 h-6 text-accent-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-lg text-secondary-700">Generate tailored policies and governance frameworks</span>
          </li>
          <li class="flex items-start">
            <svg class="w-6 h-6 text-accent-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-lg text-secondary-700">Access expert guidance when needed for complex scenarios</span>
          </li>
        </ul>
        
        <Button href="/chat" variant="primary" size="lg">
          Try the AI Risk Assistant
        </Button>
      </div>
      
      <div class="order-1 lg:order-2 animate-on-scroll">
        <div class="glass-card overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="AI Risk Management Dashboard" 
            class="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="bg-gradient-to-br from-white to-primary-50/50 py-16 md:py-20 text-secondary-900">
  <div class="container text-center">
    <h2 class="text-3xl md:text-4xl font-semibold mb-6">
      Ready to simplify your AI risk management?
    </h2>
    <p class="text-xl text-secondary-700 mb-8 max-w-2xl mx-auto">
      Join organizations that are staying ahead of AI risks while focusing on innovation.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <Button href="/signup" variant="accent" size="lg">Start Free Trial</Button>
      <Button href="/pricing" variant="secondary" size="lg">View Pricing</Button>
    </div>
  </div>
</section>