import { useEffect } from 'react';

const useIntersectionObserver = (rootSelector) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing once the element is visible
        }
      });
    });

    const rootElement = document.querySelector(rootSelector);
    if (rootElement) {
      const elements = rootElement.querySelectorAll('*:not(svg)');
      elements.forEach((el) => {
        el.classList.add('fade-in');
        observer.observe(el);
      });

      return () => {
        elements.forEach((el) => observer.unobserve(el));
      };
    }
  }, [rootSelector]);
};

export default useIntersectionObserver;
