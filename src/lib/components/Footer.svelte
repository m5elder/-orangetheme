<script>
  const currentYear = new Date().getFullYear();
</script>

<footer class="bg-secondary-50 border-t border-secondary-100">
  <div class="container py-12 md:py-16">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
      <!-- Logo and Info -->
      <div class="lg:col-span-2">
        <div class="flex items-center">
          <img src="/LOGO copy copy copy.svg" alt="8020 Rule AI" class="h-6" />
        </div>
        <p class="mt-4 text-secondary-600 max-w-md">
          Your expert AI risk analyst, built to help you navigate compliance, strategy, and risk without the overhead.
        </p>
        <div class="mt-6 flex items-center space-x-4">
          <a href="#" class="text-secondary-500 hover:text-primary-600 transition-colors">
            <span class="sr-only">Twitter</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a href="#" class="text-secondary-500 hover:text-primary-600 transition-colors">
            <span class="sr-only">LinkedIn</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
      
      <!-- Products -->
      <div>
        <h3 class="text-sm font-semibold text-secondary-800 uppercase tracking-wider">Products</h3>
        <ul role="list" class="mt-4 space-y-3">
          <li>
            <a href="/chat" class="text-base text-secondary-600 hover:text-primary-600 transition-colors">
              AI Risk Checker
            </a>
          </li>
          <li>
            <a href="/policy-builder" class="text-base text-secondary-600 hover:text-primary-600 transition-colors">
              Policy Builder
            </a>
          </li>
          <li>
            <a href="/consult" class="text-base text-secondary-600 hover:text-primary-600 transition-colors">
              Expert Consultation
            </a>
          </li>
          <li>
            <a href="/pricing" class="text-base text-secondary-600 hover:text-primary-600 transition-colors">
              Pricing
            </a>
          </li>
        </ul>
      </div>
      
      <!-- Company -->
      <div>
        <h3 class="text-sm font-semibold text-secondary-800 uppercase tracking-wider">Company</h3>
        <ul role="list" class="mt-4 space-y-3">
          <li>
            <a href="/about" class="text-base text-secondary-600 hover:text-primary-600 transition-colors">
              About Us
            </a>
          </li>
          <li>
            <a href="/insights" class="text-base text-secondary-600 hover:text-primary-600 transition-colors">
              Insights
            </a>
          </li>
          <li>
            <a href="#" class="text-base text-secondary-600 hover:text-primary-600 transition-colors">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" class="text-base text-secondary-600 hover:text-primary-600 transition-colors">
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
      
      <!-- Contact -->
      <div>
        <h3 class="text-sm font-semibold text-secondary-800 uppercase tracking-wider">Contact</h3>
        <ul role="list" class="mt-4 space-y-3">
          <li>
            <a href="mailto:info@8020ruleai.io" class="text-base text-secondary-600 hover:text-primary-600 transition-colors">
              info@8020ruleai.io
            </a>
          </li>
          <li>
            <a href="/contact" class="text-base text-secondary-600 hover:text-primary-600 transition-colors">
              Contact Form
            </a>
          </li>
          <li>
            <a href="/support" class="text-base text-secondary-600 hover:text-primary-600 transition-colors">
              Support
            </a>
          </li>
        </ul>
      </div>
    </div>
    
    <div class="mt-12 pt-8 border-t border-secondary-100 flex flex-col md:flex-row justify-between items-center">
      <p class="text-base text-secondary-500">
        &copy; {currentYear} 8020 Rule AI. All rights reserved.
      </p>
      <p class="mt-4 md:mt-0 text-base text-secondary-500">
        Privacy-first AI risk management
      </p>
    </div>
  </div>
</footer>