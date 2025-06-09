<script>
  import ChatBox from '../lib/components/Chat/ChatBox.svelte';
  import Button from '../lib/components/Button.svelte';
</script>

<section class="bg-gradient-to-b from-primary-50 to-white py-16 md:py-24">
  <div class="container">
    <div class="max-w-3xl mx-auto text-center mb-12">
      <h1 class="text-3xl md:text-4xl font-semibold text-secondary-900 mb-4">
        AI Risk Assistant
      </h1>
      <p class="text-xl text-secondary-700">
        Get expert guidance on AI regulations, compliance requirements, and best practices in real-time.
      </p>
    </div>
    
    <div class="max-w-4xl mx-auto">
      <ChatBox />
      
      <div class="mt-10 grid md:grid-cols-3 gap-6">
        <div class="bg-white rounded-xl shadow-soft p-6">
          <div class="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-secondary-800 mb-2">Ask About Regulations</h3>
          <p class="text-secondary-600 mb-4">
            "What does the EU AI Act require for my generative AI system?"
          </p>
          <Button variant="text" size="sm">Ask this question</Button>
        </div>
        
        <div class="bg-white rounded-xl shadow-soft p-6">
          <div class="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-secondary-800 mb-2">Vendor Assessment</h3>
          <p class="text-secondary-600 mb-4">
            "What should I look for when evaluating an AI vendor's compliance?"
          </p>
          <Button variant="text" size="sm">Ask this question</Button>
        </div>
        
        <div class="bg-white rounded-xl shadow-soft p-6">
          <div class="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-secondary-800 mb-2">Policy Requirements</h3>
          <p class="text-secondary-600 mb-4">
            "What policies should my organization have for AI governance?"
          </p>
          <Button variant="text" size="sm">Ask this question</Button>
        </div>
      </div>
      
      <div class="mt-12 bg-secondary-50 rounded-xl p-6 md:p-8">
        <div class="flex flex-col md:flex-row items-center">
          <div class="mb-6 md:mb-0 md:mr-8">
            <h3 class="text-xl font-semibold text-secondary-800 mb-2">Need more comprehensive assistance?</h3>
            <p class="text-secondary-600">
              Upgrade to our Pro plan for unlimited access, document analysis, and additional features.
            </p>
          </div>
          <div class="flex-shrink-0">
            <Button href="/pricing" variant="primary">View Pricing Plans</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>