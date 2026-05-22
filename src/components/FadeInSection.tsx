'use client';
import { useEffect, useRef, useState } from 'react';

export default function FadeInSection({ children, className = "w-full flex justify-center" }: { children: React.ReactNode, className?: string }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    }, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
    
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div
      ref={domRef}
      className={`transition-all duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${className} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
      }`}
    >
      {children}
    </div>
  );
}
