import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')!,
})

export default app

// Function to initialize scroll animations
function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  elements.forEach(element => {
    observer.observe(element);
  });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
});

// Re-initialize animations when view changes
window.addEventListener('navchange', () => {
  setTimeout(() => {
    initScrollAnimations();
  }, 100);
});