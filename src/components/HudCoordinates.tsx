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

        {/* Profile Box - aligned to left border with same padding */}
        <div 
          className="absolute bottom-[80px] left-5 flex items-center gap-3 transition-opacity duration-700 ease-out"
          style={{ opacity: scroll > 100 ? 0 : 1 }}
        >
          <div className="w-8 h-8 rounded-full bg-[#111] border border-[#333] flex items-center justify-center font-mono text-[9px] text-white shrink-0 overflow-hidden">
            <img src="/aseem_photo.jpg" alt="Aseem Kumar" className="w-full h-full object-cover" />
          </div>
          <div className="text-[#888] text-[10px] font-light max-w-[150px] leading-tight hidden md:block">
            I build complex AI models and systems for production
          </div>
        </div>
        
        {/* SCROLL DOWN Button - precisely straddles the 64px bottom border and fades out on scroll */}
        <div 
          className="absolute bottom-[64px] left-1/2 -translate-x-1/2 translate-y-1/2 z-10 font-mono text-[9px] text-[#fff] tracking-widest flex items-center gap-2 px-4 py-1.5 rounded-full bg-black border border-[#222] transition-all duration-700 ease-out"
          style={{ opacity: scrollProgress > 0.02 ? 0 : 1, pointerEvents: scrollProgress > 0.02 ? 'none' : 'auto' }}
        >
          <svg width="8" height="12" viewBox="0 0 24 32" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#888]">
            <rect x="2" y="2" width="20" height="28" rx="10" />
            <line x1="12" y1="8" x2="12" y2="14" />
          </svg>
          SCROLL DOWN
        </div>

        {/* Footer Area (64px tall) */}
        <div className="absolute bottom-0 left-0 right-0 h-[64px] flex justify-between items-center pointer-events-none w-full">
          
          {/* Fading Top Line for Left & Middle */}
          <div 
             className="absolute top-0 left-0 right-[220px] h-[1px] bg-[#222] transition-opacity duration-700 ease-out"
             style={{ opacity: scroll > 100 ? 0 : 1 }}
          />

          {/* Left Tickers - Entire block fades out on scroll */}
          <div 
            className="hidden lg:flex items-center h-full transition-opacity duration-700 ease-out z-10"
            style={{ opacity: scroll > 100 ? 0 : 1 }}
          >
            <div className="flex flex-col justify-center h-full px-8 border-r border-[#222] min-w-[140px]">
              <span className="text-[#eee] font-bold text-[10px] tracking-widest mb-1">SYS_STATUS</span>
              <span className="text-[#888] text-[9px] tracking-widest">ACTIVE</span>
            </div>
            <div className="flex flex-col justify-center h-full px-8 border-r border-[#222] min-w-[160px]">
              <span className="text-[#eee] font-bold text-[10px] tracking-widest mb-1">MODEL_TRAINING</span>
              <span className="text-[#888] text-[9px] tracking-widest text-red-500">99.8%</span>
            </div>
            <div className="flex flex-col justify-center h-full px-8 min-w-[140px] border-r border-[#222] lg:border-none">
              <span className="text-[#eee] font-bold text-[10px] tracking-widest mb-1">STACK</span>
              <span className="text-[#888] text-[9px] tracking-widest">PYTHON // PT</span>
            </div>
          </div>
          
          {/* Right Tickers - Box remains constant */}
          <div className="hidden lg:flex items-center absolute right-0 top-0 bottom-0 px-4 gap-4 border-l border-t border-[#222] w-[220px]">
            {/* Crosshairs for this specific box */}
            <div className="absolute -top-[3.5px] -left-[3.5px] text-[#444] text-[8px] leading-none font-mono">+</div>
            <div className="absolute -top-[3.5px] -right-[3.5px] text-[#444] text-[8px] leading-none font-mono">+</div>
            <div className="absolute -bottom-[3.5px] -left-[3.5px] text-[#444] text-[8px] leading-none font-mono">+</div>
            <div className="absolute -bottom-[3.5px] -right-[3.5px] text-[#444] text-[8px] leading-none font-mono">+</div>
            
            <div className="flex flex-col justify-center gap-1.5 w-1/2">
              <div className="flex justify-between items-center w-full">
                <span className="text-[#555] font-bold text-[9px] tracking-widest whitespace-nowrap">CURSOR X:</span>
                <span className="text-[#eee] font-mono text-[9px] tracking-widest">{coords.x.toString().padStart(4, '0')}</span>
              </div>
              <div className="flex justify-between items-center w-full">
                <span className="text-[#555] font-bold text-[9px] tracking-widest whitespace-nowrap">CURSOR Y:</span>
                <span className="text-[#eee] font-mono text-[9px] tracking-widest">{coords.y.toString().padStart(4, '0')}</span>
              </div>
            </div>
            
            <div className="flex flex-col justify-center gap-1.5 w-1/2">
              <div className="flex justify-between items-center w-full">
                <span className="text-[#555] font-bold text-[9px] tracking-widest whitespace-nowrap">SCROLL:</span>
                <span className="text-[#eee] font-mono text-[9px] tracking-widest">{(scroll / 1000).toFixed(3)}</span>
              </div>
              <div className="flex justify-between items-center w-full">
                <span className="text-[#555] font-bold text-[9px] tracking-widest whitespace-nowrap">TIME:</span>
                <span className="text-[#eee] font-mono text-[9px] tracking-widest">{(time / 1000).toFixed(1)}S</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
