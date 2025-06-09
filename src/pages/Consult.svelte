<script>
  import Button from '../lib/components/Button.svelte';
</script>

<section class="bg-gradient-to-b from-primary-50 to-white py-16 md:py-24">
  <div class="container">
    <div class="max-w-3xl mx-auto text-center mb-12">
      <h1 class="text-3xl md:text-4xl font-semibold text-secondary-900 mb-4">
        Expert AI Risk Consultation
      </h1>
      <p class="text-xl text-secondary-700">
        Schedule a one-on-one session with our AI risk specialists for personalized guidance
      </p>
    </div>
    
    <div class="max-w-5xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Consultation Info -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-xl shadow-soft p-6 md:p-8 h-full">
            <h2 class="text-xl font-semibold text-secondary-800 mb-6">
              Why Book a Consultation
            </h2>
            
            <ul class="space-y-4 mb-8">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-accent-500 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-secondary-700">Personalized guidance for complex AI risk scenarios</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-accent-500 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-secondary-700">Strategic advice for AI governance implementation</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-accent-500 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-secondary-700">Deep dive into your specific regulatory compliance needs</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-accent-500 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-secondary-700">Expert review of your AI policy implementation</span>
              </li>
            </ul>
            
            <div class="pt-4 border-t border-secondary-100">
              <h3 class="font-medium text-secondary-800 mb-3">
                Our Consultation Team
              </h3>
              <div class="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="AI Risk Consultant" 
                  class="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p class="font-medium text-secondary-800">Dr. Sarah Chen</p>
                  <p class="text-sm text-secondary-600">AI Ethics Specialist</p>
                </div>
              </div>
              <div class="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="AI Risk Consultant" 
                  class="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p class="font-medium text-secondary-800">Mark Johnson</p>
                  <p class="text-sm text-secondary-600">AI Compliance Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Calendar Embed -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-xl shadow-soft p-6 md:p-8">
            <h2 class="text-xl font-semibold text-secondary-800 mb-6">
              Schedule Your Consultation
            </h2>
            
            <!-- Calendar Placeholder - In a real app, this would be a Calendly or similar embed -->
            <div class="border border-secondary-200 rounded-lg bg-secondary-50 p-6 text-center h-96 flex flex-col items-center justify-center">
              <svg class="w-16 h-16 text-secondary-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p class="text-secondary-700 mb-4">Select a date and time for your consultation</p>
              <Button variant="primary">View Available Times</Button>
              <p class="text-sm text-secondary-500 mt-4">In a live implementation, a calendar booking system would be embedded here</p>
            </div>
            
            <div class="mt-6">
              <h3 class="font-medium text-secondary-800 mb-3">Consultation Options</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="border border-secondary-200 rounded-lg p-4">
                  <div class="flex justify-between items-center mb-2">
                    <h4 class="font-medium text-secondary-800">Standard Consultation</h4>
                    <span class="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-1 rounded">30 min</span>
                  </div>
                  <p class="text-secondary-600 text-sm mb-3">
                    Quick guidance on specific AI risk questions
                  </p>
                  <div class="flex justify-between items-center">
                    <span class="font-medium text-secondary-800">$149</span>
                    <span class="text-sm text-secondary-500">Free for Pro users</span>
                  </div>
                </div>
                
                <div class="border border-primary-200 bg-primary-50 rounded-lg p-4">
                  <div class="flex justify-between items-center mb-2">
                    <h4 class="font-medium text-secondary-800">Deep Dive Session</h4>
                    <span class="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-1 rounded">60 min</span>
                  </div>
                  <p class="text-secondary-600 text-sm mb-3">
                    Comprehensive review and strategic planning
                  </p>
                  <div class="flex justify-between items-center">
                    <span class="font-medium text-secondary-800">$299</span>
                    <span class="text-sm text-secondary-500">Free for Enterprise</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Testimonials -->
      <div class="mt-16">
        <h2 class="text-2xl font-semibold text-secondary-800 text-center mb-8">
          What Our Clients Say
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white rounded-xl shadow-soft p-6">
            <div class="flex items-center mb-4">
              <img 
                src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Client" 
                class="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <p class="font-medium text-secondary-800">Emily Rodriguez</p>
                <p class="text-sm text-secondary-600">CTO, HealthTech Innovations</p>
              </div>
            </div>
            <p class="text-secondary-700 italic">
              "The consultation session provided exactly what we needed to navigate AI compliance in healthcare. The guidance was practical and immediately actionable."
            </p>
          </div>
          
          <div class="bg-white rounded-xl shadow-soft p-6">
            <div class="flex items-center mb-4">
              <img 
                src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Client" 
                class="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <p class="font-medium text-secondary-800">David Kim</p>
                <p class="text-sm text-secondary-600">Legal Director, Finance Solutions</p>
              </div>
            </div>
            <p class="text-secondary-700 italic">
              "Having an expert walk through our specific AI governance challenges saved us months of research and potential compliance issues."
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>