<script lang="ts">
  import { page } from '$app/stores';
  
  // Get the slug from the URL parameters
  $: slug = $page.params.slug;
</script>

<div class="max-w-4xl mx-auto px-4 py-12">
  <div class="prose prose-lg">
    <!-- Temporary content until data fetching is implemented -->
    <h1>Article: {slug}</h1>
    <p>This page is under construction. The full article content will be displayed here.</p>
  </div>
</div>

<style>
  :global(.prose) {
    max-width: 65ch;
    margin-left: auto;
    margin-right: auto;
  }
</style>