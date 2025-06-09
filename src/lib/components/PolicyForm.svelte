<script lang="ts">
  import Button from './Button.svelte';
  import { onMount } from 'svelte';
  
  let currentStep = 1;
  const totalSteps = 4;
  
  let form = {
    organization: {
      name: '',
      industry: '',
      size: '',
      region: ''
    },
    aiUsage: {
      types: [],
      purposes: [],
      dataTypes: []
    },
    governance: {
      existingPolicies: '',
      oversight: '',
      riskLevel: 'medium'
    },
    compliance: {
      standards: [],
      specific: ''
    }
  };
  
  const industries = [
    'Healthcare', 
    'Finance', 
    'Manufacturing', 
    'Retail', 
    'Technology', 
    'Education', 
    'Government',
    'Non-profit',
    'Other'
  ];
  
  const sizes = [
    '1-50 employees',
    '51-250 employees',
    '251-1000 employees',
    '1001-5000 employees',
    '5000+ employees'
  ];
  
  const regions = [
    'North America',
    'European Union',
    'United Kingdom',
    'Asia Pacific',
    'Latin America',
    'Middle East & Africa',
    'Global'
  ];
  
  const aiTypes = [
    'Machine Learning',
    'Natural Language Processing',
    'Computer Vision',
    'Generative AI',
    'Predictive Analytics',
    'Robotics/Autonomous Systems',
    'Recommendation Systems',
    'Other'
  ];
  
  const aiPurposes = [
    'Customer Service',
    'Decision Support',
    'Automation',
    'Research & Development',
    'Content Creation',
    'Security',
    'Analytics',
    'Other'
  ];
  
  const dataTypes = [
    'Customer Data',
    'Employee Data',
    'Public Data',
    'Sensitive Personal Data',
    'Healthcare Data',
    'Financial Data',
    'Operational Data',
    'Other'
  ];
  
  const standards = [
    'GDPR',
    'CCPA/CPRA',
    'HIPAA',
    'NIST AI RMF',
    'EU AI Act',
    'ISO 42001',
    'Industry-specific standards',
    'None/Not sure'
  ];
  
  function nextStep() {
    if (currentStep < totalSteps) {
      currentStep++;
      scrollToTop();
    }
  }
  
  function prevStep() {
    if (currentStep > 1) {
      currentStep--;
      scrollToTop();
    }
  }
  
  function toggleSelection(array: string[], item: string) {
    const index = array.indexOf(item);
    if (index === -1) {
      array.push(item);
    } else {
      array.splice(index, 1);
    }
    return array;
  }
  
  function generatePolicy() {
    // In a real application, this would send the form data to an API
    // For demo purposes, we'll just advance to step 5 (completion)
    currentStep = 5;
    scrollToTop();
  }
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  function downloadPolicy() {
    // In a real application, this would download the generated policy
    alert('In a real application, this would download your PDF policy');
  }
  
  function savePolicy() {
    // In a real application, this would save the policy to the user's account
    alert('In a real application, this would save the policy to your account');
  }
  
  onMount(() => {
    // This would typically load any saved draft or user preferences
  });
</script>

<div class="bg-white rounded-xl shadow-soft overflow-hidden">
  <div class="bg-primary-50 p-6 border-b border-primary-100">
    <h2 class="text-2xl font-semibold text-secondary-800">AI Policy Builder</h2>
    <p class="text-secondary-600 mt-2">Create a customized AI governance policy for your organization</p>
    
    <!-- Progress Bar -->
    <div class="mt-6">
      <div class="flex justify-between mb-2">
        <span class="text-sm font-medium text-secondary-700">Progress</span>
        <span class="text-sm font-medium text-secondary-700">{currentStep < 5 ? Math.round((currentStep - 1) / (totalSteps - 1) * 100) : 100}%</span>
      </div>
      <div class="h-2 bg-primary-100 rounded-full">
        <div 
          class="h-2 bg-primary-600 rounded-full transition-all duration-300"
          style="width: {currentStep < 5 ? Math.round((currentStep - 1) / (totalSteps - 1) * 100) : 100}%"
        ></div>
      </div>
    </div>
  </div>
  
  <div class="p-6">
    <!-- Step 1: Organization Info -->
    {#if currentStep === 1}
      <div class="animate-fade-in">
        <h3 class="text-xl font-semibold text-secondary-800 mb-4">Organization Information</h3>
        
        <div class="space-y-4">
          <div>
            <label for="org-name" class="block text-sm font-medium text-secondary-700 mb-1">
              Organization Name
            </label>
            <input
              type="text"
              id="org-name"
              bind:value={form.organization.name}
              class="w-full rounded-lg border border-secondary-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Enter your organization's name"
            />
          </div>
          
          <div>
            <label for="industry" class="block text-sm font-medium text-secondary-700 mb-1">
              Industry
            </label>
            <select
              id="industry"
              bind:value={form.organization.industry}
              class="w-full rounded-lg border border-secondary-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="" disabled selected>Select your industry</option>
              {#each industries as industry}
                <option value={industry}>{industry}</option>
              {/each}
            </select>
          </div>
          
          <div>
            <label for="size" class="block text-sm font-medium text-secondary-700 mb-1">
              Organization Size
            </label>
            <select
              id="size"
              bind:value={form.organization.size}
              class="w-full rounded-lg border border-secondary-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="" disabled selected>Select organization size</option>
              {#each sizes as size}
                <option value={size}>{size}</option>
              {/each}
            </select>
          </div>
          
          <div>
            <label for="region" class="block text-sm font-medium text-secondary-700 mb-1">
              Primary Operating Region
            </label>
            <select
              id="region"
              bind:value={form.organization.region}
              class="w-full rounded-lg border border-secondary-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="" disabled selected>Select primary region</option>
              {#each regions as region}
                <option value={region}>{region}</option>
              {/each}
            </select>
          </div>
        </div>
        
        <div class="mt-8 flex justify-end">
          <Button on:click={nextStep} variant="primary">Continue</Button>
        </div>
      </div>
    {/if}
    
    <!-- Step 2: AI Usage -->
    {#if currentStep === 2}
      <div class="animate-fade-in">
        <h3 class="text-xl font-semibold text-secondary-800 mb-4">AI Usage Information</h3>
        
        <div class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-secondary-700 mb-2">
              What types of AI does your organization use or plan to use?
            </label>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
              {#each aiTypes as type}
                <label class="flex items-center p-3 border rounded-lg cursor-pointer {form.aiUsage.types.includes(type) ? 'border-primary-400 bg-primary-50' : 'border-secondary-200'}">
                  <input
                    type="checkbox"
                    class="h-4 w-4 text-primary-600 rounded focus:ring-primary-500"
                    checked={form.aiUsage.types.includes(type)}
                    on:change={() => form.aiUsage.types = toggleSelection([...form.aiUsage.types], type)}
                  />
                  <span class="ml-2 text-secondary-700">{type}</span>
                </label>
              {/each}
            </div>
          </div>
          
          <div>
            <label class="block text-sm font-medium text-secondary-700 mb-2">
              What are the primary purposes for AI in your organization?
            </label>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
              {#each aiPurposes as purpose}
                <label class="flex items-center p-3 border rounded-lg cursor-pointer {form.aiUsage.purposes.includes(purpose) ? 'border-primary-400 bg-primary-50' : 'border-secondary-200'}">
                  <input
                    type="checkbox"
                    class="h-4 w-4 text-primary-600 rounded focus:ring-primary-500"
                    checked={form.aiUsage.purposes.includes(purpose)}
                    on:change={() => form.aiUsage.purposes = toggleSelection([...form.aiUsage.purposes], purpose)}
                  />
                  <span class="ml-2 text-secondary-700">{purpose}</span>
                </label>
              {/each}
            </div>
          </div>
          
          <div>
            <label class="block text-sm font-medium text-secondary-700 mb-2">
              What types of data does your AI process?
            </label>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
              {#each dataTypes as type}
                <label class="flex items-center p-3 border rounded-lg cursor-pointer {form.aiUsage.dataTypes.includes(type) ? 'border-primary-400 bg-primary-50' : 'border-secondary-200'}">
                  <input
                    type="checkbox"
                    class="h-4 w-4 text-primary-600 rounded focus:ring-primary-500"
                    checked={form.aiUsage.dataTypes.includes(type)}
                    on:change={() => form.aiUsage.dataTypes = toggleSelection([...form.aiUsage.dataTypes], type)}
                  />
                  <span class="ml-2 text-secondary-700">{type}</span>
                </label>
              {/each}
            </div>
          </div>
        </div>
        
        <div class="mt-8 flex justify-between">
          <Button on:click={prevStep} variant="secondary">Back</Button>
          <Button on:click={nextStep} variant="primary">Continue</Button>
        </div>
      </div>
    {/if}
    
    <!-- Step 3: Governance -->
    {#if currentStep === 3}
      <div class="animate-fade-in">
        <h3 class="text-xl font-semibold text-secondary-800 mb-4">AI Governance</h3>
        
        <div class="space-y-4">
          <div>
            <label for="existing-policies" class="block text-sm font-medium text-secondary-700 mb-1">
              Does your organization have existing AI or data policies?
            </label>
            <select
              id="existing-policies"
              bind:value={form.governance.existingPolicies}
              class="w-full rounded-lg border border-secondary-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="" disabled selected>Please select</option>
              <option value="none">No existing policies</option>
              <option value="data-only">Data policies only</option>
              <option value="ai-basic">Basic AI guidelines</option>
              <option value="comprehensive">Comprehensive AI governance</option>
            </select>
          </div>
          
          <div>
            <label for="oversight" class="block text-sm font-medium text-secondary-700 mb-1">
              Who oversees AI governance in your organization?
            </label>
            <select
              id="oversight"
              bind:value={form.governance.oversight}
              class="w-full rounded-lg border border-secondary-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="" disabled selected>Please select</option>
              <option value="none">No formal oversight</option>
              <option value="it">IT Department</option>
              <option value="legal">Legal/Compliance</option>
              <option value="dedicated">Dedicated AI Ethics Team</option>
              <option value="executive">Executive Leadership</option>
              <option value="committee">Cross-functional Committee</option>
            </select>
          </div>
          
          <div>
            <label class="block text-sm font-medium text-secondary-700 mb-3">
              How would you rate the AI risk level for your organization?
            </label>
            <div class="space-y-2">
              <label class="flex items-center p-3 border rounded-lg cursor-pointer {form.governance.riskLevel === 'low' ? 'border-primary-400 bg-primary-50' : 'border-secondary-200'}">
                <input
                  type="radio"
                  name="risk-level"
                  value="low"
                  bind:group={form.governance.riskLevel}
                  class="h-4 w-4 text-primary-600 focus:ring-primary-500"
                />
                <div class="ml-3">
                  <span class="block font-medium text-secondary-800">Low Risk</span>
                  <span class="text-sm text-secondary-600">Limited AI use, non-critical decisions, minimal personal data</span>
                </div>
              </label>
              
              <label class="flex items-center p-3 border rounded-lg cursor-pointer {form.governance.riskLevel === 'medium' ? 'border-primary-400 bg-primary-50' : 'border-secondary-200'}">
                <input
                  type="radio"
                  name="risk-level"
                  value="medium"
                  bind:group={form.governance.riskLevel}
                  class="h-4 w-4 text-primary-600 focus:ring-primary-500"
                />
                <div class="ml-3">
                  <span class="block font-medium text-secondary-800">Medium Risk</span>
                  <span class="text-sm text-secondary-600">Moderate AI use, some automated decisions, regular personal data processing</span>
                </div>
              </label>
              
              <label class="flex items-center p-3 border rounded-lg cursor-pointer {form.governance.riskLevel === 'high' ? 'border-primary-400 bg-primary-50' : 'border-secondary-200'}">
                <input
                  type="radio"
                  name="risk-level"
                  value="high"
                  bind:group={form.governance.riskLevel}
                  class="h-4 w-4 text-primary-600 focus:ring-primary-500"
                />
                <div class="ml-3">
                  <span class="block font-medium text-secondary-800">High Risk</span>
                  <span class="text-sm text-secondary-600">Extensive AI use, critical automated decisions, sensitive data processing</span>
                </div>
              </label>
            </div>
          </div>
        </div>
        
        <div class="mt-8 flex justify-between">
          <Button on:click={prevStep} variant="secondary">Back</Button>
          <Button on:click={nextStep} variant="primary">Continue</Button>
        </div>
      </div>
    {/if}
    
    <!-- Step 4: Compliance -->
    {#if currentStep === 4}
      <div class="animate-fade-in">
        <h3 class="text-xl font-semibold text-secondary-800 mb-4">Compliance Requirements</h3>
        
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-secondary-700 mb-2">
              Which compliance standards apply to your AI systems?
            </label>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
              {#each standards as standard}
                <label class="flex items-center p-3 border rounded-lg cursor-pointer {form.compliance.standards.includes(standard) ? 'border-primary-400 bg-primary-50' : 'border-secondary-200'}">
                  <input
                    type="checkbox"
                    class="h-4 w-4 text-primary-600 rounded focus:ring-primary-500"
                    checked={form.compliance.standards.includes(standard)}
                    on:change={() => form.compliance.standards = toggleSelection([...form.compliance.standards], standard)}
                  />
                  <span class="ml-2 text-secondary-700">{standard}</span>
                </label>
              {/each}
            </div>
          </div>
          
          <div>
            <label for="specific-reqs" class="block text-sm font-medium text-secondary-700 mb-1">
              Any specific compliance requirements or concerns?
            </label>
            <textarea
              id="specific-reqs"
              bind:value={form.compliance.specific}
              rows="4"
              class="w-full rounded-lg border border-secondary-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Enter any specific requirements or concerns..."
            ></textarea>
          </div>
        </div>
        
        <div class="mt-8 flex justify-between">
          <Button on:click={prevStep} variant="secondary">Back</Button>
          <Button on:click={generatePolicy} variant="primary">Generate Policy</Button>
        </div>
      </div>
    {/if}
    
    <!-- Step 5: Results -->
    {#if currentStep === 5}
      <div class="animate-fade-in">
        <div class="text-center mb-8">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
            <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 class="text-2xl font-semibold text-secondary-800 mb-2">Your Policy is Ready!</h3>
          <p class="text-secondary-600">We've generated a customized AI governance policy for {form.organization.name || 'your organization'}</p>
        </div>
        
        <div class="bg-secondary-50 rounded-lg p-6 mb-6">
          <h4 class="font-medium text-secondary-800 mb-4">Policy Overview</h4>
          <ul class="space-y-3">
            <li class="flex items-start">
              <svg class="w-5 h-5 text-accent-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-secondary-700">AI Ethics & Responsible Use Guidelines</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-accent-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-secondary-700">AI Risk Assessment Framework</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-accent-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-secondary-700">Data Governance Standards for AI</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-accent-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-secondary-700">AI Procurement & Vendor Assessment Guidelines</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-accent-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-secondary-700">Compliance Documentation Templates</span>
            </li>
          </ul>
        </div>
        
        <div class="flex flex-col sm:flex-row gap-4">
          <Button on:click={downloadPolicy} variant="primary" fullWidth={true}>
            <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Policy (PDF)
          </Button>
          <Button on:click={savePolicy} variant="secondary" fullWidth={true}>
            <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
            </svg>
            Save to My Account
          </Button>
        </div>
        
        <div class="mt-8 pt-6 border-t border-secondary-200">
          <div class="bg-primary-50 rounded-lg p-4">
            <h4 class="font-medium text-secondary-800 mb-2">Need expert guidance?</h4>
            <p class="text-secondary-600 text-sm mb-4">Get personalized advice from our AI governance specialists</p>
            <Button href="/consult" variant="accent" size="sm">Book a Consultation</Button>
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>