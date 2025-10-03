// Fade-up animation using Intersection Observer
document.addEventListener('DOMContentLoaded', function() {
  
  // Create CSS styles for fade-up animation
  const style = document.createElement('style');
  style.textContent = `
    .fade-up {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }
    
    .fade-up.visible {
      opacity: 1;
      transform: translateY(0);
    }
    
    /* Optional: Add different animation delays for staggered effects */
    .fade-up.delay-100 { transition-delay: 0.1s; }
    .fade-up.delay-200 { transition-delay: 0.2s; }
    .fade-up.delay-300 { transition-delay: 0.3s; }
    .fade-up.delay-400 { transition-delay: 0.4s; }
    .fade-up.delay-500 { transition-delay: 0.5s; }
  `;
  document.head.appendChild(style);
  
  // Intersection Observer options
  const observerOptions = {
    root: null, // Use viewport as root
    rootMargin: '0px 0px -50px 0px', // Trigger when element is 50px from bottom of viewport
    threshold: 0.1 // Trigger when 10% of element is visible
  };
  
  // Create the observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the visible class to trigger animation
        entry.target.classList.add('visible');
        
        // Optional: Stop observing this element after animation
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Find all elements with fade-up class and observe them
  const fadeUpElements = document.querySelectorAll('.fade-up');
  fadeUpElements.forEach(element => {
    observer.observe(element);
  });
  
  // Button functionality (keeping existing functionality)
  const button = document.querySelector('button');
  if (button) {
    button.addEventListener('click', function() {
      alert('Welcome to your HTML + Tailwind CSS project!');
    });
  }
  
  console.log(`Fade-up animation initialized for ${fadeUpElements.length} elements`);
  
  // Mobile navigation dropdown functionality
  const submenuToggles = document.querySelectorAll('[data-submenu-toggle]');
  
  submenuToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      const submenuId = this.getAttribute('data-submenu-toggle');
      const submenu = document.querySelector(`[data-submenu-content="${submenuId}"]`);
      const arrow = this.querySelector('svg');
      
      if (submenu) {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        
        // Toggle expanded state
        this.setAttribute('aria-expanded', !isExpanded);
        
        // Toggle submenu visibility
        if (isExpanded) {
          submenu.style.maxHeight = '0px';
          submenu.style.opacity = '0';
          if (arrow) arrow.style.transform = 'rotate(0deg)';
        } else {
          submenu.style.maxHeight = submenu.scrollHeight + 'px';
          submenu.style.opacity = '1';
          if (arrow) arrow.style.transform = 'rotate(180deg)';
        }
      }
    });
  });
});

// Optional: Function to manually trigger fade-up animation
function triggerFadeUp(selector) {
  const elements = document.querySelectorAll(selector);
  elements.forEach(element => {
    if (element.classList.contains('fade-up')) {
      element.classList.add('visible');
    }
  });
}
