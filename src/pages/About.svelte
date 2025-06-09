<script>
  import Button from '../lib/components/Button.svelte';
  import { CheckCircle, Users, Target } from 'lucide-svelte';
</script>

<div class="relative overflow-hidden">
  <!-- Background pattern -->
  <div class="absolute inset-0 mesh-gradient opacity-30" />
  
  <!-- Gradient orbs -->
  <div class="absolute top-40 -right-32 w-96 h-96 rounded-full bg-primary-500/10 blur-3xl" />
  <div class="absolute bottom-40 -left-32 w-96 h-96 rounded-full bg-accent-500/10 blur-3xl" />
  <div class="absolute top-[60%] left-1/2 -translate-x-1/2 w-full h-96 rounded-full bg-primary-500/5 blur-3xl" />
  
  <div class="relative z-10">
    <div class="bg-white relative overflow-hidden py-16">
      <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-accent-500" />
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <div class="inline-block mb-4">
            <div class="inline-flex items-center rounded-full border border-primary-500/20 bg-white/80 backdrop-blur-sm px-3 py-1 text-sm">
              <span class="mr-2 bg-primary-500/10 rounded-full p-1">
                <Target class="w-4 h-4 text-primary-500" />
              </span>
              <span class="text-secondary-600">Our story</span>
            </div>
          </div>
          
          <h1 class="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            About <span class="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">80/20 Rule AI</span>
          </h1>
          <p class="text-lg mb-8 text-secondary-600">
            We're building tools to help organizations navigate the complex world of AI risk and compliance.
          </p>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <div>
          <h2 class="text-2xl font-bold mb-6">Our Mission</h2>
          <p class="mb-6 text-secondary-600">
            We believe that organizations shouldn't have to choose between innovation and compliance. Our mission is to make AI risk management accessible, straightforward, and effective.
          </p>
          <p class="mb-6 text-secondary-600">
            The 80/20 Rule AI platform helps you identify and address the 20% of AI risks that cause 80% of potential harm, so you can focus your resources where they matter most.
          </p>
          <div class="space-y-4">
            <div class="flex gap-3 p-4 rounded-lg border bg-white hover:shadow-hover transition-all duration-200">
              <CheckCircle class="w-6 h-6 text-primary-500 flex-shrink-0" />
              <div>
                <h3 class="font-medium">Simplify Compliance</h3>
                <p class="text-secondary-600">We translate complex regulations into actionable steps.</p>
              </div>
            </div>
            <div class="flex gap-3 p-4 rounded-lg border bg-white hover:shadow-hover transition-all duration-200">
              <CheckCircle class="w-6 h-6 text-primary-500 flex-shrink-0" />
              <div>
                <h3 class="font-medium">Protect Your Organization</h3>
                <p class="text-secondary-600">Identify hidden risks in AI tool terms and contracts.</p>
              </div>
            </div>
            <div class="flex gap-3 p-4 rounded-lg border bg-white hover:shadow-hover transition-all duration-200">
              <CheckCircle class="w-6 h-6 text-primary-500 flex-shrink-0" />
              <div>
                <h3 class="font-medium">Enable Responsible Innovation</h3>
                <p class="text-secondary-600">Use AI confidently with proper safeguards in place.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="relative">
          <div class="absolute -z-10 inset-0 bg-gradient-to-tr from-primary-500/10 to-accent-500/10 rounded-3xl transform rotate-3"></div>
          <div class="absolute -z-10 inset-0 bg-gradient-to-bl from-primary-500/10 to-accent-500/10 rounded-3xl transform -rotate-3"></div>
          
          <div class="bg-secondary-50 rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop"
              alt="Team collaboration"
              class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>

      <div class="mb-20">
        <div class="text-center mb-10">
          <div class="inline-block mb-4">
            <div class="inline-flex items-center rounded-full border border-primary-500/20 bg-white/80 backdrop-blur-sm px-3 py-1 text-sm">
              <span class="mr-2 bg-primary-500/10 rounded-full p-1">
                <Users class="w-4 h-4 text-primary-500" />
              </span>
              <span class="text-secondary-600">Meet our experts</span>
            </div>
          </div>
          <h2 class="text-2xl font-bold mb-4">Our Team</h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
          <div class="bg-white border border-secondary-200 rounded-lg p-6 flex flex-col items-center text-center hover:shadow-hover transition-all duration-200">
            <div class="w-48 h-48 rounded-full overflow-hidden mb-6 ring-4 ring-primary-500/10">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2574&auto=format&fit=crop"
                alt="Marcy Elder"
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <h3 class="text-xl font-semibold mb-2">Marcy Elder</h3>
            <p class="text-primary-500 mb-4">Co-founder & CEO</p>
            <p class="text-secondary-600 mb-4">
              Former head of AI security at a Fortune 500 company with 15+ years of experience in cybersecurity and regulatory compliance.
            </p>
          </div>
          <div class="bg-white border border-secondary-200 rounded-lg p-6 flex flex-col items-center text-center hover:shadow-hover transition-all duration-200">
            <div class="w-48 h-48 rounded-full overflow-hidden mb-6 ring-4 ring-primary-500/10">
              <img
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=2670&auto=format&fit=crop"
                alt="Zach Drake"
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <h3 class="text-xl font-semibold mb-2">Zach Drake</h3>
            <p class="text-primary-500 mb-4">Co-founder & CTO</p>
            <p class="text-secondary-600 mb-4">
              AI engineer with a background in building secure AI systems for healthcare and financial services. Expert in ML operations and risk mitigation.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-20">
        <h2 class="text-2xl font-bold mb-6 text-center">Why We Built This</h2>
        <div class="max-w-3xl mx-auto">
          <div class="relative px-8 py-10 rounded-xl bg-white border border-secondary-200">
            <div class="absolute -z-10 inset-0 bg-gradient-to-tr from-primary-500/5 to-accent-500/5 rounded-xl"></div>
            <p class="mb-6 text-secondary-600">
              After years of building AI systems for enterprise clients, we saw firsthand how organizations struggled with managing AI risk. The problem wasn't a lack of willingness to comply—it was the overwhelming complexity of regulations and hidden risks in vendor agreements.
            </p>
            <p class="mb-6 text-secondary-600">
              We realized that our expertise in both AI development and compliance could help bridge this gap. So we built 80/20 Rule AI to automate the risk identification and policy creation processes we had been doing manually for clients.
            </p>
            <p class="mb-0 text-center font-medium bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              We do this for real, and that's why we can automate it.
            </p>
          </div>
        </div>
      </div>

      <div class="bg-white border border-secondary-200 rounded-lg p-8 text-center max-w-3xl mx-auto relative">
        <div class="absolute -z-10 inset-0 bg-gradient-to-tr from-primary-500/5 to-accent-500/5 rounded-xl"></div>
        <div class="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-500/10 flex items-center justify-center">
          <Users class="w-7 h-7 text-primary-500" />
        </div>
        <h2 class="text-2xl font-bold mb-4">Join Us in Building Responsible AI</h2>
        <p class="mb-6 text-secondary-600">
          Ready to implement safe, compliant AI practices in your organization? Get started with our free tools or book a consultation.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/chat" variant="primary" size="lg">
            Try Free AI Assistant
          </Button>
          <Button href="/consult" variant="secondary" size="lg">
            Book a Consultation
          </Button>
        </div>
      </div>
    </div>
  </div>
</div>