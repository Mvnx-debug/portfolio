document.addEventListener('DOMContentLoaded', function() {
  const transparentPixel = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

  const loadImage = (img) => {
    if (!img || !img.dataset.lazy) return;
    img.src = img.dataset.lazy;
    img.removeAttribute('data-lazy');
  };

  const lazyImages = document.querySelectorAll('img[data-lazy]');
  lazyImages.forEach((img) => {
    if (!img.getAttribute('src')) {
      img.src = transparentPixel;
    }
    img.loading = 'lazy';
    img.decoding = 'async';
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: '200px 0px' });

    lazyImages.forEach((img) => observer.observe(img));
  } else {
    lazyImages.forEach(loadImage);
  }

  document.querySelectorAll('.modal').forEach((modal) => {
    modal.addEventListener('show.bs.modal', () => {
      // Carrega apenas imagens visíveis
      modal.querySelectorAll('img[data-lazy]').forEach(loadImage);
      // Remover scroll do body ao abrir modal
      document.body.style.overflow = 'hidden';
    });
    
    modal.addEventListener('hidden.bs.modal', () => {
      // Restaurar scroll do body
      document.body.style.overflow = 'auto';
    });
  });

  const preloadFirstImage = (modalId) => {
    const modal = document.querySelector(modalId);
    if (!modal) return;
    const firstImg = modal.querySelector('img[data-lazy]');
    if (firstImg) loadImage(firstImg);
  };

  document.querySelectorAll('[data-bs-target^="#projectModal"]').forEach((btn) => {
    const target = btn.getAttribute('data-bs-target');
    btn.addEventListener('mouseenter', () => preloadFirstImage(target));
    btn.addEventListener('touchstart', () => preloadFirstImage(target), { passive: true });
  });

  // Navbar scroll effect - otimizado com throttling
  const navbar = document.querySelector('.navbar');
  let scrollTimeout;
  let lastScroll = 0;
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.scrollY;
    
    if (!scrollTimeout) {
      scrollTimeout = requestAnimationFrame(() => {
        if (currentScroll > 50 && !navbar.classList.contains('scrolled')) {
          navbar.classList.add('scrolled');
        } else if (currentScroll <= 50 && navbar.classList.contains('scrolled')) {
          navbar.classList.remove('scrolled');
        }
        scrollTimeout = null;
      });
    }
  }, { passive: true });

  // Suavidade em links de âncora
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
        
        // Fechar menu mobile ao clicar
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
          navbarCollapse.classList.remove('show');
        }
      }
    });
  });

  // Animação de scroll
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

  document.querySelectorAll('section').forEach(section => {
    section.classList.add('animate-on-scroll');
  });

  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);

  // Typewriter com proteção
  const typewriter = function() {
    const target = document.querySelector('.typewriter');
    if (!target) return;

    const texts = ["Bun + Elysia + Drizzle", "React, Tailwind e DX", "Testes: Jest + E2E", "APIs tipadas com PostgreSQL"];
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
      
      target.textContent = letter;
      
      if (letter.length === currentText.length) {
        setTimeout(() => {
          count++;
          index = 0;
          setTimeout(type, 1000);
        }, 2000);
        return;
      }
      
      setTimeout(type, 90);
    })();
  };
  typewriter();


});
