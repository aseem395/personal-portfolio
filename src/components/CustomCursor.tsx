'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    // Center elements based on their center rather than top-left
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(dot, { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.2, ease: 'power3' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.2, ease: 'power3' });
    
    // Dot tracks exactly 1:1, so duration is extremely short (near instantaneous)
    const xDotTo = gsap.quickTo(dot, 'x', { duration: 0.05, ease: 'power3' });
    const yDotTo = gsap.quickTo(dot, 'y', { duration: 0.05, ease: 'power3' });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xDotTo(e.clientX);
      yDotTo(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    const handleMouseEnter = () => {
      gsap.to(cursor, {
        width: 48,
        height: 48,
        duration: 0.3,
        ease: "power2.out"
      });
    };
    const handleMouseLeave = () => {
      gsap.to(cursor, {
        width: 12,
        height: 12,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    // Use MutationObserver to dynamically attach to .interactive elements
    const bindInteractive = () => {
      const interactives = document.querySelectorAll('.interactive');
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    bindInteractive();
    
    const observer = new MutationObserver(() => {
      bindInteractive();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
    />
  );
}
