<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  
  let scrolled = false;
  let menuOpen = false;
  
  function isActive(path: string): boolean {
    return $page.url.pathname === path;
  }
  
  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 20;
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  
  function toggleMenu() {
    menuOpen = !menuOpen;
  }
  
  function closeMenu() {
    menuOpen = false;
  }
</script>

<header class="{scrolled ? 'bg-white/80 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'} fixed top-0 left-0 right-0 z-50 transition-all duration-300">
  <div class="container flex items-center justify-between">
    <a href="/" class="flex items-center group" on:click={closeMenu}>
      <div class="flex items-center">
        <img src="/LOGO copy copy copy.svg" alt="8020 Rule AI" class="h-6" />
      </div>
    </a>
    
    <!-- Desktop Navigation -->
    <nav class="hidden md:flex items-center space-x-8">
      <a href="/" class="nav-link {isActive('/') ? 'active' : ''}">Home</a>
      <a href="/chat" class="nav-link {isActive('/chat') ? 'active' : ''}">AI Assistant</a>
      <a href="/policy-builder" class="nav-link {isActive('/policy-builder') ? 'active' : ''}">Policy Builder</a>
      <a href="/consult" class="nav-link {isActive('/consult') ? 'active' : ''}">Consultation</a>
      <a href="/insights" class="nav-link {isActive('/insights') ? 'active' : ''}">Insights</a>
      <a href="/pricing" class="nav-link {isActive('/pricing') ? 'active' : ''}">Pricing</a>
      <a href="/about" class="nav-link {isActive('/about') ? 'active' : ''}">About</a>
    </nav>
    
    <div class="hidden md:flex items-center space-x-4 ml-8">
      <a href="/login" class="btn btn-secondary py-2 px-4">Log In</a>
      <a href="/signup" class="btn btn-primary py-2 px-4">Sign Up</a>
    </div>
    
    <!-- Mobile Menu Button -->
    <button class="md:hidden p-2 rounded-lg text-secondary-600 hover:bg-secondary-100" on:click={toggleMenu} aria-label="Menu">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
      </svg>
    </button>
  </div>
  
  <!-- Mobile Navigation -->
  {#if menuOpen}
    <div class="md:hidden absolute top-full left-0 right-0 bg-white/80 backdrop-blur-sm shadow-md animate-fade-in">
      <div class="container py-4 flex flex-col space-y-4">
        <a href="/" class="nav-link py-2 {isActive('/') ? 'active' : ''}" on:click={closeMenu}>Home</a>
        <a href="/chat" class="nav-link py-2 {isActive('/chat') ? 'active' : ''}" on:click={closeMenu}>AI Assistant</a>
        <a href="/policy-builder" class="nav-link py-2 {isActive('/policy-builder') ? 'active' : ''}" on:click={closeMenu}>Policy Builder</a>
        <a href="/consult" class="nav-link py-2 {isActive('/consult') ? 'active' : ''}" on:click={closeMenu}>Consultation</a>
        <a href="/insights" class="nav-link py-2 {isActive('/insights') ? 'active' : ''}" on:click={closeMenu}>Insights</a>
        <a href="/pricing" class="nav-link py-2 {isActive('/pricing') ? 'active' : ''}" on:click={closeMenu}>Pricing</a>
        <a href="/about" class="nav-link py-2 {isActive('/about') ? 'active' : ''}" on:click={closeMenu}>About</a>
        <div class="flex space-x-3 pt-2">
          <a href="/login" class="btn btn-secondary py-2 px-4 flex-1" on:click={closeMenu}>Log In</a>
          <a href="/signup" class="btn btn-primary py-2 px-4 flex-1" on:click={closeMenu}>Sign Up</a>
        </div>
      </div>
    </div>
  {/if}
</header>

<div class="{scrolled ? 'h-16' : 'h-20'} md:{scrolled ? 'h-16' : 'h-24'} transition-all duration-300"></div>