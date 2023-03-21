import { useState, useEffect } from 'react';

type ScrollDirection = 'down' | 'up';

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<
    ScrollDirection | undefined
  >(undefined);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const updateScrollDirection = () => {
      setScrollDirection(window.scrollY > lastScrollY ? 'down' : 'up');
      lastScrollY = window.scrollY;
    };

    addEventListener('scroll', updateScrollDirection);

    return () => removeEventListener('scroll', updateScrollDirection);
  }, [scrollDirection]);

  return scrollDirection;
};
