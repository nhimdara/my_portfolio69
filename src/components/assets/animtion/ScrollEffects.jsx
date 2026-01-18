import { useEffect } from 'react';

const ScrollEffects = () => {
  useEffect(() => {
    // Throttle function for performance
    const throttle = (func, limit) => {
      let inThrottle;
      return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
          func.apply(context, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      };
    };

    // Reveal elements on scroll
    const revealOnScroll = () => {
      const elements = document.querySelectorAll('.scroll-reveal, .scroll-fade-in, .scroll-scale');
      const windowHeight = window.innerHeight;
      
      elements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - 100) {
          setTimeout(() => {
            element.classList.add('visible');
          }, index * 100);
        }
      });
    };

    // Progress bar for scroll
    const createProgressBar = () => {
      if (document.getElementById('scroll-progress')) return;
      
      const progressBar = document.createElement('div');
      progressBar.id = 'scroll-progress';
      progressBar.className = 'fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 z-50 transition-all duration-300';
      progressBar.style.width = '0%';
      document.body.appendChild(progressBar);
    };

    const updateProgressBar = () => {
      const progressBar = document.getElementById('scroll-progress');
      if (progressBar) {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
      }
    };

    // Navbar scroll effect
    const handleNavbarScroll = () => {
      const navbar = document.querySelector('nav');
      if (!navbar) return;
      
      if (window.scrollY > 50) {
        navbar.style.background = 'rgba(17, 24, 39, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
      } else {
        navbar.style.background = 'rgb(17, 24, 39)';
        navbar.style.backdropFilter = 'none';
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
      }
    };

    // Add CSS styles
    const addScrollStyles = () => {
      const styleId = 'scroll-effects-styles';
      if (document.getElementById(styleId)) return;
      
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        /* Scroll reveal animations */
        .scroll-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        
        .scroll-fade-in {
          opacity: 0;
          transition: opacity 0.8s ease-out;
        }
        
        .scroll-scale {
          opacity: 0;
          transform: scale(0.95);
          transition: all 0.6s ease-out;
        }
        
        .scroll-reveal.visible,
        .scroll-fade-in.visible,
        .scroll-scale.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        
        /* Smooth scroll */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1f2937;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, rgb(6, 182, 212), rgb(168, 85, 247));
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, rgb(8, 200, 230), rgb(190, 100, 280));
        }
        
        /* Navbar scroll effect */
        nav {
          transition: all 0.3s ease-in-out !important;
        }
      `;
      document.head.appendChild(style);
    };

    // Initialize
    createProgressBar();
    addScrollStyles();
    revealOnScroll();
    handleNavbarScroll();

    // Throttled scroll handler
    const throttledScroll = throttle(() => {
      revealOnScroll();
      handleNavbarScroll();
      updateProgressBar();
    }, 16);

    // Event listeners
    window.addEventListener('scroll', throttledScroll);
    window.addEventListener('load', revealOnScroll);

    // Initial check
    setTimeout(() => {
      revealOnScroll();
      handleNavbarScroll();
    }, 100);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('load', revealOnScroll);
      const progressBar = document.getElementById('scroll-progress');
      if (progressBar) progressBar.remove();
      const styles = document.getElementById('scroll-effects-styles');
      if (styles) styles.remove();
    };
  }, []);

  return null;
};

export default ScrollEffects;