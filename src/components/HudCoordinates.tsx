'use client';
import { useEffect, useState } from 'react';

export default function HudCoordinates() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(0);
  const [scroll, setScroll] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      setScroll(window.scrollY);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalScroll > 0 ? window.scrollY / totalScroll : 0);
    };
    
    handleScroll();
    
    const startTime = Date.now();
    const interval = setInterval(() => {
      setTime((Date.now() - startTime) / 1000);
    }, 100);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const formatCoord = (val: number) => Math.round(val).toString().padStart(4, '0');
  const formatTime = (val: number) => val.toFixed(1) + 'S';
  const formatScroll = (val: number) => (val / 1000).toFixed(3);

  return (
    <div className="fixed inset-0 z-[50] pointer-events-none p-1 md:p-2">
      <div className="w-full h-full relative">
        
        {/* Left Border Scroll Progress Ruler */}
        <div className="absolute top-[48px] bottom-[64px] left-0 w-[1px]">
          {/* Tick marks */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <div key={i} className="absolute left-0 w-1.5 h-[1px] bg-[#333]" style={{ top: `${i * 10}%` }} />
          ))}
          
          {/* Active Progress */}
          <div 
            className="absolute top-0 left-0 w-[2px] bg-white origin-top transition-all duration-300 ease-out"
            style={{ height: `${scrollProgress * 100}%` }}
          />
          {/* Top Anchor Hook */}
          <div className="absolute top-0 left-0 w-2.5 h-[2px] bg-white" />
        </div>

        {/* Fixed Profile Box - Bottom Left inside the grid (Blurred Pill to prevent text collision) */}
        <div className="absolute bottom-[16px] left-[8px] md:left-[16px] z-10 hidden md:flex items-center gap-4 bg-[#050505]/90 backdrop-blur-md pr-4 p-1 rounded-full border border-[#111] pointer-events-auto">
          <div className="w-10 h-10 rounded-full border border-[#333] overflow-hidden shrink-0">
            <img src="/aseem_photo.jpg" alt="Aseem Kumar" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="text-[#888] text-[9px] font-sans leading-tight max-w-[180px]">
              I build complex AI models and systems for production.
            </span>
          </div>
        </div>
        



      </div>
    </div>
  );
}
