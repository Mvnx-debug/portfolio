// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
        
        // Close mobile menu after clicking
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
          navbarCollapse.classList.remove('show');
        }
      }
    });
  });

  // Animation on scroll
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.classList.add('animate__animated', 'animate__fadeInUp');
      }
    });
  };

  // Initialize elements to animate
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('animate-on-scroll');
  });

  // Run on load and scroll
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);

  // Project modals
  const projectModals = document.querySelectorAll('.project-modal-trigger');
  projectModals.forEach(modal => {
    modal.addEventListener('click', function() {
      const modalId = this.getAttribute('data-modal-target');
      const targetModal = document.querySelector(modalId);
      
      if (targetModal) {
        const modalInstance = new bootstrap.Modal(targetModal);
        modalInstance.show();
      }
    });
  });

  // Typewriter effect for hero section
  const typewriter = function() {
    const texts = ["Desenvolvedor Full Stack", "Especialista em Front-end", "Entusiasta de Automação"];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';
    
    (function type() {
      if (count === texts.length) {
        count = 0;
      }
      
      currentText = texts[count];
      letter = currentText.slice(0, ++index);
      
      document.querySelector('.typewriter').textContent = letter;
      
      if (letter.length === currentText.length) {
        setTimeout(() => {
          count++;
          index = 0;
          setTimeout(type, 1000);
        }, 2000);
        return;
      }
      
      setTimeout(type, 100);
    })();
  };
  
  // Uncomment to activate typewriter effect
  // typewriter();
  
  // Dark mode toggle (optional)
  const darkModeToggle = document.getElementById('darkModeToggle');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });
    
    // Check for saved preference
    if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark-mode');
    }
  }
  
  // Tooltip initialization
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
  
  // Initialize carousels
  const carousels = document.querySelectorAll('.carousel');
  carousels.forEach(carousel => {
    new bootstrap.Carousel(carousel, {
      interval: 5000,
      pause: 'hover'
    });
  });
});