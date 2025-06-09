<script lang="ts">
  export let title: string;
  export let excerpt: string;
  export let date: string;
  export let author: string;
  export let category: string;
  export let imageUrl: string;
  export let slug: string;
</script>

<a href={`/insights/${slug}`} class="group">
  <article class="glass-card overflow-hidden transition-all duration-200 hover:shadow-hover hover:border-primary-100">
    <div class="aspect-w-16 aspect-h-9 relative overflow-hidden">
      <img 
        src={imageUrl} 
        alt={title} 
        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div class="absolute top-4 left-4">
        <span class="inline-block bg-white/90 backdrop-blur-sm text-primary-700 text-xs font-medium px-2.5 py-1 rounded-full">
          {category}
        </span>
      </div>
    </div>
    <div class="p-6">
      <div class="flex items-center text-sm text-secondary-500 mb-2">
        <span>{date}</span>
        <span class="mx-2">•</span>
        <span>{author}</span>
      </div>
      <h3 class="text-xl font-semibold text-secondary-800 mb-2 group-hover:text-primary-600 transition-colors">{title}</h3>
      <p class="text-secondary-600 line-clamp-3">{excerpt}</p>
      <div class="mt-4">
        <span class="inline-flex items-center text-primary-600 font-medium group-hover:text-primary-700">
          Read more
          <svg class="ml-1 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>
      </div>
    </div>
  </article>
</a>

<style>
  .aspect-w-16 {
    position: relative;
    padding-bottom: 56.25%;
  }
  
  .aspect-w-16 > img {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    object-fit: cover;
    object-position: center;
  }
  
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>