<script lang="ts">
  export let title: string;
  export let description: string;
  export let icon: string;
</script>

<div class="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-soft hover:shadow-hover transition-shadow duration-200">
  <div class="mb-4 w-16 h-16 flex items-center justify-center bg-primary-50 text-primary-600 rounded-full">
    <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      {@html icon}
    </svg>
  </div>
  <h3 class="text-xl font-semibold mb-2 text-secondary-800">{title}</h3>
  <p class="text-secondary-600">{description}</p>
</div>