'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function BentoMediaCanvas({ isHovered }: { isHovered: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    
    const draw = (offset: number) => {
      ctx.clearRect(0, 0, 400, 400);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
      for(let i=0; i<30; i++) {
        ctx.fillRect(
          Math.sin(i + offset) * 200 + 200, 
          Math.cos(i * 2 + offset) * 200 + 200, 
          Math.random() * 80, 
          Math.random() * 80
        );
      }
    };
    
    draw(0);
    
    if (isHovered) {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: 10,
        duration: 3,
        ease: 'power1.inOut',
        onUpdate: () => draw(obj.val)
      });
    }
  }, [isHovered]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden opacity-30 pointer-events-none mix-blend-overlay">
      <canvas ref={canvasRef} width={400} height={400} className="w-full h-full object-cover filter contrast-150 grayscale" />
    </div>
  );
}
