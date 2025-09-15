import { useEffect } from 'react';

const usePerformanceOptimizer = () => {
  useEffect(() => {
    // Enable passive event listeners for better scroll performance
    const addPassiveSupport = () => {
      let supportsPassive = false;
      try {
        const opts = Object.defineProperty({}, 'passive', {
          get: () => {
            supportsPassive = true;
            return true;
          }
        });
        window.addEventListener('testPassive', null as any, opts);
        window.removeEventListener('testPassive', null as any, opts);
      } catch (e) {}
      
      return supportsPassive ? { passive: true } : false;
    };

    const passiveOption = addPassiveSupport();

    // Optimize scroll events
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Handle scroll events here
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, passiveOption as any);

    // Preconnect to external domains
    const preconnectLinks = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
    ];

    preconnectLinks.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = href;
      document.head.appendChild(link);
    });

    // Enable font-display swap for better text rendering
    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-display: swap;
      }
    `;
    document.head.appendChild(style);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Debounce function for expensive operations
  const debounce = (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  // Throttle function for frequent events
  const throttle = (func: Function, limit: number) => {
    let inThrottle: boolean;
    return (...args: any[]) => {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  };

  return { debounce, throttle };
};

export default usePerformanceOptimizer;