// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when the pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // can also use 'smooth' if you want animated scroll
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
