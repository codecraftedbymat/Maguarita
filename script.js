document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Unobserve after animating once
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Select elements to animate
  const animatedElements = document.querySelectorAll('.step, .trust-card, .location-card');
  
  // Stagger animations for step items
  const steps = document.querySelectorAll('.step');
  steps.forEach((step, index) => {
    step.style.transitionDelay = `${index * 0.15}s`;
    observer.observe(step);
  });

  // Observe other elements
  document.querySelectorAll('.trust-card, .location-card').forEach(el => {
    observer.observe(el);
  });
});
