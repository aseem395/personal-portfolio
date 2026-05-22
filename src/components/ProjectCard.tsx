'use client';
import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import BentoMediaCanvas from './BentoMediaCanvas';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  metrics: string;
  className?: string;
  onHover: (hovered: boolean) => void;
  isDimmed: boolean;
}

export default function ProjectCard({ title, category, description, metrics, className, onHover, isDimmed }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ✕♦₿⎔0123456789//_#";

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isHovered && titleRef.current) {
      let iteration = 0;
      const originalText = title;
      
      interval = setInterval(() => {
        if (titleRef.current) {
          titleRef.current.innerText = originalText
            .split("")
            .map((letter, index) => {
              if (letter === " " || index < iteration) return originalText[index];
              return letters[Math.floor(Math.random() * letters.length)];
            })
            .join("");
        }
        if (iteration >= originalText.length) {
          clearInterval(interval);
        }
        iteration += 1/2;
      }, 30);
    } else if (titleRef.current) {
      titleRef.current.innerText = title;
    }
    return () => clearInterval(interval);
  }, [isHovered, title]);

  useEffect(() => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        opacity: isDimmed ? 0.25 : 1,
        y: isHovered ? -4 : 0,
        borderColor: isHovered ? '#2c2c2c' : '#121212',
        duration: 0.4,
        ease: 'power2.out'
      });
    }
  }, [isDimmed, isHovered]);

  return (
    <div 
      ref={cardRef}
      className={`relative bg-[#030303] border border-[#121212] rounded-lg p-10 flex flex-col justify-between min-h-[420px] interactive overflow-hidden ${className}`}
      onMouseEnter={() => { setIsHovered(true); onHover(true); }}
      onMouseLeave={() => { setIsHovered(false); onHover(false); }}
    >
      <BentoMediaCanvas isHovered={isHovered} />
      <div className="relative z-10">
        <div className="font-mono text-[11px] text-[#555] tracking-widest uppercase mb-6">{category}</div>
        <h3 ref={titleRef} className="text-[26px] font-medium mb-4 leading-tight tracking-tight text-white">{title}</h3>
        <p className="text-[#888] text-sm leading-relaxed font-light">{description}</p>
      </div>
      <span className="relative z-10 font-mono text-[11px] tracking-widest uppercase text-[#444] mt-8 group-hover:text-white transition-colors duration-200">
        [ {metrics} ]
      </span>
    </div>
  );
}
