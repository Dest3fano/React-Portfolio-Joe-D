import { useState, useEffect } from 'react';

const useScrollDetection = (threshold = 20) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let timeoutId: number | null = null;

    const handleScroll = () => {
      if (timeoutId !== null) {
        return;
      }

      timeoutId = window.setTimeout(() => {
        setScrolled(window.scrollY > threshold);
        timeoutId = null;
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
    };
  }, [threshold]);

  return scrolled;
};

export default useScrollDetection;
