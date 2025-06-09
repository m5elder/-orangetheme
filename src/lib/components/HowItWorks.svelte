<script>
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
</script>

<section class="bg-white py-16 md:py-24">
  <div class="container">
    <div class="text-center max-w-3xl mx-auto mb-16">
      <h2 class="text-3xl md:text-4xl font-semibold text-secondary-900 mb-4">How It Works</h2>
      <p class="text-xl text-secondary-600">Simplify AI risk management with our comprehensive platform</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
      {#each steps as step, i}
        <div class="relative animate-on-scroll" style="transition-delay: {i * 100}ms">
          <div class="flex flex-col items-center text-center">
            <div class="mb-6 w-16 h-16 flex items-center justify-center bg-primary-100 text-primary-700 rounded-full text-xl font-bold">
              {step.number}
            </div>
            <h3 class="text-xl font-semibold mb-3 text-secondary-800">{step.title}</h3>
            <p class="text-secondary-600">{step.description}</p>
          </div>
          
          {#if i < steps.length - 1}
            <div class="hidden md:block absolute top-1/4 right-0 w-full h-0.5 bg-primary-100 transform translate-x-1/2">
              <div class="absolute right-0 top-1/2 w-3 h-3 bg-primary-500 rounded-full transform -translate-y-1/2 translate-x-1/2"></div>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>