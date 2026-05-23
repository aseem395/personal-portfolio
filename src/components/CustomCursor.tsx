'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

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
      gsap.to(cursor, { width: 48, height: 48, duration: 0.3, ease: "power2.out" });
      gsap.to('.cursor-brackets', { rotation: 90, duration: 0.3, ease: "power2.out" });
      gsap.to('.cursor-corner', { opacity: 1, duration: 0.3 });
    };
    
    const handleMouseLeave = () => {
      gsap.to(cursor, { width: 32, height: 32, duration: 0.3, ease: "power2.out" });
      gsap.to('.cursor-brackets', { rotation: 0, duration: 0.3, ease: "power2.out" });
      gsap.to('.cursor-corner', { opacity: 0.4, duration: 0.3 });
    };

    const handleProjectEnter = () => {
      gsap.to(cursor, { width: 48, height: 48, duration: 0.3, ease: "power2.out" });
      gsap.to('.cursor-brackets', { rotation: 90, duration: 0.3, ease: "power2.out" });
      gsap.to('.cursor-corner', { opacity: 1, duration: 0.3 });
      gsap.to(textRef.current, { opacity: 1, x: 10, duration: 0.3, ease: "power2.out" });
    };

    const handleProjectLeave = () => {
      gsap.to(cursor, { width: 32, height: 32, duration: 0.3, ease: "power2.out" });
      gsap.to('.cursor-brackets', { rotation: 0, duration: 0.3, ease: "power2.out" });
      gsap.to('.cursor-corner', { opacity: 0.4, duration: 0.3 });
      gsap.to(textRef.current, { opacity: 0, x: 0, duration: 0.2, ease: "power2.in" });
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

      const projectImages = document.querySelectorAll('.project-image');
      projectImages.forEach(el => {
        el.removeEventListener('mouseenter', handleProjectEnter);
        el.removeEventListener('mouseleave', handleProjectLeave);
        el.addEventListener('mouseenter', handleProjectEnter);
        el.addEventListener('mouseleave', handleProjectLeave);
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
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center"
      >
        <div className="absolute inset-0 w-full h-full cursor-brackets">
          <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-[1.5px] border-l-[1.5px] border-white opacity-40 cursor-corner" />
          <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-[1.5px] border-r-[1.5px] border-white opacity-40 cursor-corner" />
          <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-[1.5px] border-l-[1.5px] border-white opacity-40 cursor-corner" />
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-[1.5px] border-r-[1.5px] border-white opacity-40 cursor-corner" />
        </div>
        
        <div ref={textRef} className="absolute left-full ml-3 text-white text-[10px] font-sans font-medium tracking-[0.2em] opacity-0 whitespace-nowrap">
          VIEW PROJECT
        </div>
      </div>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[10000] mix-blend-difference"
      />
    </>
  );
}
