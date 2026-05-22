'use client';
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function AudioToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const barsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!barsRef.current) return;
    const bars = barsRef.current.children;
    
    if (isPlaying) {
      // Create independent tweens for random behavior
      Array.from(bars).forEach((bar) => {
        gsap.to(bar, {
          height: () => Math.random() * 12 + 4,
          duration: 0.2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: Math.random() * 0.2
        });
      });
    } else {
      gsap.killTweensOf(bars);
      gsap.to(bars, { height: 4, duration: 0.3, ease: 'power2.out' });
    }
  }, [isPlaying]);

  return (
    <button 
      onClick={() => setIsPlaying(!isPlaying)}
      className="interactive flex items-center gap-3 font-mono text-[11px] tracking-widest text-[#8c8c8c] hover:text-white transition-colors"
    >
      <span>[AUDIO: {isPlaying ? 'ON' : 'OFF'}]</span>
      <div ref={barsRef} className="flex items-end gap-[2px] h-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-1 bg-current h-1" />
        ))}
      </div>
    </button>
  );
}
