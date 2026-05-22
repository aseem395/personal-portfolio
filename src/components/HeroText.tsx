'use client';
import { useEffect, useRef } from 'react';

interface HeroTextProps {
  text1: string;
  text2: string;
  highlightCount?: number;
}

export default function HeroText({ text1, text2, highlightCount = 7 }: HeroTextProps) {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    if (!h1Ref.current) return;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ✕♦₿⎔0123456789//_#";
    let iteration = 0;
    const originalText = `${text1}\n${text2}`;
    
    let interval: NodeJS.Timeout;
    
    const startAnimation = () => {
      interval = setInterval(() => {
        if (h1Ref.current) {
          h1Ref.current.innerHTML = originalText
            .split("")
            .map((char, index) => {
              if (char === "\n") return "<br/>";
              if (char === " ") return " ";
              
              if (index < iteration) {
                const isHighlight = index < highlightCount;
                if (char === "✕") {
                  return `<span class="${isHighlight ? 'text-white font-black' : 'text-[#888] font-black'} text-[0.6em] mx-1 relative -top-[0.15em]">${char}</span>`;
                }
                return `<span class="${isHighlight ? 'text-white font-black' : 'text-[#888] font-black'}">${char}</span>`;
              }
              
              const randomChar = letters[Math.floor(Math.random() * letters.length)];
              return `<span class="text-[#444]">${randomChar}</span>`;
            })
            .join("");
        }

        if (iteration >= originalText.length) {
          clearInterval(interval);
        }
        iteration += 1 / 3;
      }, 30);
    };

    const timeout = setTimeout(startAnimation, 500); // Small delay before animation starts
    
    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [text1, text2, highlightCount]);

  const renderInitial = (text: string) => {
    return text.split("").map((char, i) => {
      if (char === "✕") {
        return <span key={i} className="text-[0.6em] mx-1 relative -top-[0.15em]">{char}</span>;
      }
      return char;
    });
  };

  return (
    <h1 ref={h1Ref} className="text-[11vw] md:text-[8vw] lg:text-[7vw] tracking-tighter leading-[0.85] mb-2 font-black uppercase text-center w-full whitespace-nowrap">
      <span className="text-white">{renderInitial(text1)}</span><br/>
      <span className="text-[#888]">{renderInitial(text2)}</span>
    </h1>
  );
}
