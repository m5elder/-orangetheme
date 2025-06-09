<script lang="ts">
  import Button from './Button.svelte';
  
  export let tier: string;
  export let price: string;
  export let period: string = 'month';
  export let description: string;
  export let features: string[];
  export let popular: boolean = false;
  export let buttonText: string = 'Get Started';
  export let buttonVariant: 'primary' | 'accent' | 'secondary' = 'primary';
</script>

<div class="bg-white rounded-xl shadow-soft {popular ? 'ring-2 ring-primary-500' : ''} overflow-hidden transition-all duration-200 hover:shadow-hover">
  {#if popular}
    <div class="bg-primary-500 text-white text-center py-2 text-sm font-medium">
      Most Popular
    </div>
  {/if}
  
  <div class="p-6 md:p-8">
    <h3 class="text-xl font-semibold text-secondary-800">{tier}</h3>
    <div class="mt-4 flex items-baseline">
      <span class="text-4xl font-extrabold text-secondary-900">{price}</span>
      {#if period}
        <span class="ml-1 text-xl font-medium text-secondary-500">/{period}</span>
      {/if}
    </div>
    <p class="mt-4 text-secondary-600">{description}</p>
    
    <ul class="mt-6 space-y-4">
      {#each features as feature}
        <li class="flex">
          <svg class="h-5 w-5 text-accent-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <span class="ml-3 text-secondary-700">{feature}</span>
        </li>
      {/each}
    </ul>
    
    <div class="mt-8">
      <Button variant={buttonVariant} fullWidth={true} size="lg">{buttonText}</Button>
    </div>
  </div>
</div>