<script>
  export let compact = false;
</script>

<div class="bg-white rounded-xl shadow-soft overflow-hidden {compact ? 'p-4' : 'p-6 md:p-8'}">
  <h3 class="text-xl md:text-2xl font-semibold mb-6 text-secondary-800">Privacy-First Architecture</h3>
  
  <div class="relative {compact ? 'py-6' : 'py-10'} px-4 overflow-x-auto">
    <!-- Diagram container -->
    <div class="min-w-[600px] mx-auto">
      <!-- User Layer -->
      <div class="flex justify-center mb-8">
        <div class="bg-secondary-50 border border-secondary-200 rounded-lg p-4 w-64 text-center">
          <div class="mb-2 w-12 h-12 mx-auto flex items-center justify-center bg-secondary-100 text-secondary-700 rounded-full">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h4 class="font-semibold text-secondary-800">Your Data</h4>
          <p class="text-sm text-secondary-600 mt-1">Documents & Requests</p>
        </div>
      </div>
      
      <!-- Arrow Down -->
      <div class="flex justify-center mb-4">
        <svg class="w-6 h-8 text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
      
      <!-- Anonymization Layer -->
      <div class="flex justify-center mb-8">
        <div class="bg-primary-50 border border-primary-200 rounded-lg p-4 w-80 text-center relative">
          <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white text-xs font-medium px-3 py-1 rounded-full">
            Secured Layer
          </div>
          <div class="mb-2 w-12 h-12 mx-auto flex items-center justify-center bg-primary-100 text-primary-700 rounded-full">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
            </svg>
          </div>
          <h4 class="font-semibold text-secondary-800">Anonymization Layer</h4>
          <p class="text-sm text-secondary-600 mt-1">Removes identifiable information before processing</p>
        </div>
      </div>
      
      <!-- Arrow Down -->
      <div class="flex justify-center mb-4">
        <svg class="w-6 h-8 text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
      
      <!-- Processing Layer -->
      <div class="flex justify-center mb-8">
        <div class="bg-accent-50 border border-accent-200 rounded-lg p-4 w-80 text-center">
          <div class="mb-2 w-12 h-12 mx-auto flex items-center justify-center bg-accent-100 text-accent-700 rounded-full">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h4 class="font-semibold text-secondary-800">Secure Processing</h4>
          <p class="text-sm text-secondary-600 mt-1">Analysis without storing or training on your data</p>
        </div>
      </div>
      
      <!-- Arrow Up -->
      <div class="flex justify-center mb-4">
        <svg class="w-6 h-8 text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </div>
      
      <!-- Result Layer -->
      <div class="flex justify-center">
        <div class="bg-secondary-50 border border-secondary-200 rounded-lg p-4 w-64 text-center">
          <div class="mb-2 w-12 h-12 mx-auto flex items-center justify-center bg-secondary-100 text-secondary-700 rounded-full">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h4 class="font-semibold text-secondary-800">Secure Results</h4>
          <p class="text-sm text-secondary-600 mt-1">Insights delivered without data retention</p>
        </div>
      </div>
    </div>
  </div>
  
  <div class="mt-4">
    <ul class="space-y-2">
      <li class="flex items-start">
        <svg class="w-5 h-5 text-accent-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <span class="text-secondary-700">No training on your data</span>
      </li>
      <li class="flex items-start">
        <svg class="w-5 h-5 text-accent-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <span class="text-secondary-700">No data sharing with third parties</span>
      </li>
      <li class="flex items-start">
        <svg class="w-5 h-5 text-accent-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <span class="text-secondary-700">Automatic document deletion after processing</span>
      </li>
    </ul>
  </div>
</div>