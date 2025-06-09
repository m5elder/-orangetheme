<script>
  import PolicyForm from '../lib/components/PolicyForm.svelte';
</script>

<section class="bg-gradient-to-b from-primary-50 to-white py-16 md:py-24">
  <div class="container">
    <div class="max-w-3xl mx-auto text-center mb-12">
      <h1 class="text-3xl md:text-4xl font-semibold text-secondary-900 mb-4">
        AI Policy Builder
      </h1>
      <p class="text-xl text-secondary-700">
        Create custom AI governance policies tailored to your organization's specific needs
      </p>
    </div>
    
    <div class="max-w-4xl mx-auto">
      <PolicyForm />
      
      <div class="mt-12 grid md:grid-cols-3 gap-6">
        <div class="bg-white rounded-xl shadow-soft p-6">
          <div class="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-secondary-800 mb-2">Complete Templates</h3>
          <p class="text-secondary-600">
            Professionally crafted policy templates based on industry standards
          </p>
        </div>
        
        <div class="bg-white rounded-xl shadow-soft p-6">
          <div class="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-secondary-800 mb-2">Customizable</h3>
          <p class="text-secondary-600">
            Tailor policies to your specific industry, region, and compliance needs
          </p>
        </div>
        
        <div class="bg-white rounded-xl shadow-soft p-6">
          <div class="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-secondary-800 mb-2">Compliance-Ready</h3>
          <p class="text-secondary-600">
            Aligned with key AI regulations and frameworks like NIST AI RMF and EU AI Act
          </p>
        </div>
      </div>
    </div>
  </div>
</section>