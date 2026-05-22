'use client';
import { useEffect, useState } from 'react';

export default function ScrollFadeOutWrapper({ children }: { children: React.ReactNode }) {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // The hero fades out completely after 500px of scrolling
  const opacity = Math.max(0, 1 - scroll / 500);
  
  // Parallax effect: moves down slightly to scroll slower than the rest of the page
  const translateY = scroll * 0.35;
  
  // Slight scale down effect
  const scale = Math.max(0.95, 1 - scroll / 3000);

  return (
    <div 
      style={{ 
        opacity, 
        transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
        willChange: 'transform, opacity',
        pointerEvents: opacity < 0.1 ? 'none' : 'auto'
      }}
    >
      {children}
    </div>
  );
}
