<script lang="ts">
  export let variant: 'primary' | 'secondary' | 'accent' | 'outline' | 'text' = 'primary';
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let type: 'button' | 'submit' | 'reset' = 'button';
  export let disabled: boolean = false;
  export let fullWidth: boolean = false;
  export let href: string | null = null;
  export let target: string = '_self';
  export let rel: string = '';
  export let animate: boolean = true;
  
  // Classes based on props
  $: variantClasses = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
    secondary: 'bg-white text-primary-700 border border-primary-200 hover:bg-primary-50 focus:ring-primary-500',
    accent: 'bg-accent-500 text-white hover:bg-accent-600 focus:ring-accent-500',
    outline: 'bg-transparent text-secondary-700 border border-secondary-300 hover:bg-secondary-50 hover:text-secondary-800 focus:ring-secondary-500',
    text: 'bg-transparent text-primary-600 hover:text-primary-700 focus:ring-primary-500 p-0'
  }[variant];
  
  $: sizeClasses = {
    sm: variant === 'text' ? 'text-sm' : 'py-2 px-4 text-sm',
    md: variant === 'text' ? 'text-base' : 'py-3 px-6',
    lg: variant === 'text' ? 'text-lg' : 'py-4 px-8 text-lg'
  }[size];
  
  $: widthClass = fullWidth ? 'w-full' : '';
  $: animationClass = animate ? 'transition-all duration-200' : '';
</script>

{#if href}
  <a
    {href}
    {target}
    {rel}
    class="inline-flex items-center justify-center rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 {variantClasses} {sizeClasses} {widthClass} {animationClass} {disabled ? 'opacity-50 cursor-not-allowed' : ''}"
    class:pointer-events-none={disabled}
    on:click
  >
    <slot></slot>
  </a>
{:else}
  <button
    {type}
    {disabled}
    class="inline-flex items-center justify-center rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 {variantClasses} {sizeClasses} {widthClass} {animationClass} {disabled ? 'opacity-50 cursor-not-allowed' : ''}"
    on:click
  >
    <slot></slot>
  </button>
{/if}