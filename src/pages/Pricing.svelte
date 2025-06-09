<script>
  import PricingCard from '../lib/components/PricingCard.svelte';
  import Button from '../lib/components/Button.svelte';
  
  // Define pricing tiers
  const pricingTiers = [
    {
      tier: "Free",
      price: "$0",
      description: "Try our AI risk assistant with basic features",
      features: [
        "5 AI Assistant messages per day",
        "Basic AI policy templates",
        "Public article access",
        "Single user account"
      ],
      buttonText: "Get Started",
      buttonVariant: "secondary",
      popular: false
    },
    {
      tier: "Pro",
      price: "$79",
      description: "Enhanced AI risk management for individuals and small teams",
      features: [
        "Unlimited AI Assistant messages",
        "Full policy builder access",
        "Document upload & analysis",
        "1 consultation session/month",
        "Team access (up to 3 users)"
        "Third Party Terms & Conditions change monitoring & alerting"
      ],
      buttonText: "Subscribe Now",
      buttonVariant: "primary",
      popular: true
    },
    {
      tier: "Enterprise",
      price: "Custom",
      period: "",
      description: "Comprehensive AI risk management for organizations",
      features: [
        "Everything in Pro",
        "Unlimited document analysis",
        "Priority consultation access",
        "Custom policy integration",
        "Regulatory monitoring",
        "Dedicated account manager",
        "SSO & advanced security"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "secondary",
      popular: false
    }
  ];
  
  // FAQ data
  const faqs = [
    {
      question: "Can I switch between plans?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to new features. Downgrades take effect at the end of your current billing cycle."
    },
    {
      question: "Is there a trial period?",
      answer: "Yes, we offer a 14-day free trial of our Pro plan with no credit card required. Experience all Pro features before deciding if it's right for you."
    },
    {
      question: "How do consultations work?",
      answer: "Consultations are 30-minute sessions with our AI risk specialists. Pro members get one session per month, and Enterprise users have unlimited access. You can schedule these through our consultation booking system."
    },
    {
      question: "Can I share my account with my team?",
      answer: "The Pro plan includes access for up to 3 team members. Enterprise plans offer customizable user management for larger teams with role-based permissions."
    },
    {
      question: "How do you handle my data?",
      answer: "We follow strict privacy-first principles. Your data is never used to train our models, and all uploaded documents are automatically deleted after processing. See our Privacy Policy for more details."
    },
    {
      question: "Do you offer discounts for non-profits or educational institutions?",
      answer: "Yes, we offer special pricing for non-profit organizations, educational institutions, and startups. Please contact our sales team for more information."
    }
  ];
</script>

<section class="bg-gradient-to-b from-primary-50 to-white py-16 md:py-24">
  <div class="container">
    <div class="max-w-3xl mx-auto text-center mb-16">
      <h1 class="text-3xl md:text-4xl font-semibold text-secondary-900 mb-4">
        Transparent, Simple Pricing
      </h1>
      <p class="text-xl text-secondary-700">
        Choose the plan that fits your AI risk management needs
      </p>
    </div>
    
    <!-- Pricing Cards -->
    <div class="max-w-5xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {#each pricingTiers as tier}
          <PricingCard {...tier} />
        {/each}
      </div>
      
      <!-- Features Comparison -->
      <div class="mt-16 bg-white rounded-xl shadow-soft overflow-hidden">
        <div class="px-6 py-8 border-b border-secondary-200">
          <h2 class="text-2xl font-semibold text-secondary-800">
            Compare Features
          </h2>
        </div>
        
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="bg-secondary-50">
                <th class="py-4 px-6 text-left text-secondary-700 font-medium">Feature</th>
                <th class="py-4 px-6 text-center text-secondary-700 font-medium">Free</th>
                <th class="py-4 px-6 text-center text-secondary-700 font-medium">Pro</th>
                <th class="py-4 px-6 text-center text-secondary-700 font-medium">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t border-secondary-200">
                <td class="py-4 px-6 text-secondary-800 font-medium">AI Assistant Messages</td>
                <td class="py-4 px-6 text-center text-secondary-700">5/day</td>
                <td class="py-4 px-6 text-center text-secondary-700">Unlimited</td>
                <td class="py-4 px-6 text-center text-secondary-700">Unlimited</td>
              </tr>
              <tr class="border-t border-secondary-200 bg-secondary-50">
                <td class="py-4 px-6 text-secondary-800 font-medium">Policy Builder</td>
                <td class="py-4 px-6 text-center text-secondary-700">Basic templates</td>
                <td class="py-4 px-6 text-center text-secondary-700">Full access</td>
                <td class="py-4 px-6 text-center text-secondary-700">Custom integration</td>
              </tr>
              <tr class="border-t border-secondary-200">
                <td class="py-4 px-6 text-secondary-800 font-medium">Document Analysis</td>
                <td class="py-4 px-6 text-center text-secondary-700">
                  <svg class="w-5 h-5 text-secondary-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </td>
                <td class="py-4 px-6 text-center text-secondary-700">5/month</td>
                <td class="py-4 px-6 text-center text-secondary-700">Unlimited</td>
              </tr>
              <tr class="border-t border-secondary-200 bg-secondary-50">
                <td class="py-4 px-6 text-secondary-800 font-medium">Expert Consultations</td>
                <td class="py-4 px-6 text-center text-secondary-700">
                  <svg class="w-5 h-5 text-secondary-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </td>
                <td class="py-4 px-6 text-center text-secondary-700">1/month</td>
                <td class="py-4 px-6 text-center text-secondary-700">Unlimited</td>
              </tr>
              <tr class="border-t border-secondary-200">
                <td class="py-4 px-6 text-secondary-800 font-medium">Team Access</td>
                <td class="py-4 px-6 text-center text-secondary-700">1 user</td>
                <td class="py-4 px-6 text-center text-secondary-700">Up to 3 users</td>
                <td class="py-4 px-6 text-center text-secondary-700">Unlimited</td>
              </tr>
              <tr class="border-t border-secondary-200 bg-secondary-50">
                <td class="py-4 px-6 text-secondary-800 font-medium">Regulatory Monitoring</td>
                <td class="py-4 px-6 text-center text-secondary-700">
                  <svg class="w-5 h-5 text-secondary-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </td>
                <td class="py-4 px-6 text-center text-secondary-700">
                  <svg class="w-5 h-5 text-secondary-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </td>
                <td class="py-4 px-6 text-center text-secondary-700">
                  <svg class="w-5 h-5 text-accent-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </td>
              </tr>
              <tr class="border-t border-secondary-200">
                <td class="py-4 px-6 text-secondary-800 font-medium">Priority Support</td>
                <td class="py-4 px-6 text-center text-secondary-700">
                  <svg class="w-5 h-5 text-secondary-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </td>
                <td class="py-4 px-6 text-center text-secondary-700">
                  <svg class="w-5 h-5 text-secondary-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </td>
                <td class="py-4 px-6 text-center text-secondary-700">
                  <svg class="w-5 h-5 text-accent-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <!-- FAQs -->
      <div class="mt-16">
        <h2 class="text-2xl font-semibold text-secondary-800 text-center mb-8">
          Frequently Asked Questions
        </h2>
        
        <div class="max-w-3xl mx-auto">
          <div class="space-y-6">
            {#each faqs as faq, i}
              <div class="bg-white rounded-xl shadow-soft overflow-hidden">
                <details class="group">
                  <summary class="flex justify-between items-center cursor-pointer px-6 py-4">
                    <h3 class="text-lg font-medium text-secondary-800">{faq.question}</h3>
                    <svg class="w-5 h-5 text-secondary-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div class="px-6 pb-4 text-secondary-700">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              </div>
            {/each}
          </div>
        </div>
      </div>
      
      <!-- Additional Info -->
      <div class="mt-16 text-center">
        <p class="text-secondary-600 mb-4">
          All plans include our privacy-first architecture and secure data handling
        </p>
        <p class="text-secondary-800 font-medium">
          Have questions about which plan is right for you?
        </p>
        <div class="mt-4">
          <Button href="/contact" variant="secondary">Contact Sales</Button>
        </div>
      </div>
    </div>
  </div>
</section>