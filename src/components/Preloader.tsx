'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Preloader() {
  const [count, setCount] = useState(0);
  const preloaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentCount = 0;
    const interval = setInterval(() => {
      currentCount += Math.floor(Math.random() * 5) + 1;
      if (currentCount >= 100) {
        currentCount = 100;
        clearInterval(interval);
        
        // GSAP Glitch/Slice Exit
        const tl = gsap.timeline();
        tl.to(preloaderRef.current, {
          clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)',
          duration: 0.15,
          ease: 'power4.inOut'
        })
        .to(preloaderRef.current, {
          clipPath: 'polygon(0 40%, 100% 40%, 100% 60%, 0 60%)',
          duration: 0.1,
          ease: 'power4.inOut'
        })
        .to(preloaderRef.current, {
          opacity: 0,
          duration: 0.4,
          ease: 'power2.out',
          onComplete: () => {
            if (preloaderRef.current) {
              preloaderRef.current.style.display = 'none';
            }
          }
        });
      }
      setCount(currentCount);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[10000] bg-[#000000] flex flex-col justify-center items-center font-mono"
    >
      <div className="text-3xl mb-5 animate-pulse text-white">⎔</div>
      <div className="text-[11px] tracking-widest text-[#8c8c8c] uppercase">
        <span className="text-white font-bold">{count}</span>%
      </div>
    </div>
  );
}
