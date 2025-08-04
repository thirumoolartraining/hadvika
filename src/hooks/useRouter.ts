import { useState, useEffect } from 'react';

export function useRouter() {
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');

  // Scroll to top helper function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const newPath = window.location.hash.slice(1) || '/';
      setCurrentPath(newPath);
      scrollToTop();
    };

    // Initial scroll to top on page load
    scrollToTop();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path: string) => {
    // Only update if path is different to avoid unnecessary re-renders
    if (window.location.hash.slice(1) !== path) {
      window.location.hash = path;
      setCurrentPath(path);
      scrollToTop();
    }
  };

  return { currentPath, navigate };
}