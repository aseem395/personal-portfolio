import FadeInSection from './FadeInSection';
import { BrainCircuit, Server, Database } from 'lucide-react';

export default function SpecializationSection() {
  return (
    <section id="specialization" className="flex flex-col justify-center items-center pt-[32px] pb-[64px] relative z-10 w-full px-4">
      <FadeInSection>
        <div className="flex flex-col items-center w-full max-w-5xl">
          
          {/* Top Category Tags */}
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 text-[#555] font-mono text-[9px] md:text-[10px] tracking-widest uppercase mb-12">
            <span>MEDICAL IMAGE SEGMENTATION</span>
            <span className="text-[#333]">/</span>
            <span>APPLIED AI SYSTEMS</span>
            <span className="text-[#333]">/</span>
            <span>BACKEND ENG</span>
            <span className="text-[#333]">/</span>
            <span>MOBILE APPS</span>
          </div>

          {/* Main Specialization Typography */}
          <h2 className="text-white text-2xl md:text-[38px] font-sans font-black tracking-tighter text-center leading-[1.25] max-w-5xl uppercase">
            ARCHITECTING PRECISION <BrainCircuit className="inline w-8 h-8 md:w-11 md:h-11 mx-2 md:mx-4 -mt-2 text-white" /> MEDICAL IMAGE SEGMENTATION, <Server className="inline w-8 h-8 md:w-11 md:h-11 mx-2 md:mx-4 -mt-2 text-white" /> HIGH-PERFORMANCE CLOUD INFRASTRUCTURE, AND <Database className="inline w-8 h-8 md:w-11 md:h-11 mx-2 md:mx-4 -mt-2 text-white" /> AUTONOMOUS AI SYSTEMS
          </h2>

          {/* Subtitle description */}
          <p className="text-[#888] text-xs md:text-sm mt-10 max-w-2xl text-center font-light leading-[1.8]">
            Engineering the intersection of deep learning research and production-grade software. Focused on delivering highly scalable, fault-tolerant intelligent systems—from core algorithmic architecture to end-to-end deployment.
          </p>

          {/* Call to Actions with exact reference styling */}
          <div className="flex gap-8 mt-16 relative">
            <a href="mailto:aseemajit@gmail.com" className="relative group cursor-pointer inline-block interactive">
              <div className="absolute -top-[5.5px] -left-[4.5px] text-[#eee] text-[10px] leading-none font-mono font-light">+</div>
              <div className="absolute -top-[5.5px] -right-[4.5px] text-[#eee] text-[10px] leading-none font-mono font-light">+</div>
              <div className="absolute -bottom-[5.5px] -left-[4.5px] text-[#eee] text-[10px] leading-none font-mono font-light">+</div>
              <div className="absolute -bottom-[5.5px] -right-[4.5px] text-[#eee] text-[10px] leading-none font-mono font-light">+</div>
              <div className="border border-[#333] px-5 py-3 bg-transparent transition-colors group-hover:bg-white/5">
                <span className="text-white font-sans font-bold text-[11px] tracking-[0.2em] uppercase">
                  CONTACT
                </span>
              </div>
            </a>
            
            <a href="/Aseem%20Resume.pdf" download="Aseem_Resume.pdf" className="relative group cursor-pointer inline-block interactive">
              <div className="absolute -top-[5.5px] -left-[4.5px] text-[#eee] text-[10px] leading-none font-mono font-light">+</div>
              <div className="absolute -top-[5.5px] -right-[4.5px] text-[#eee] text-[10px] leading-none font-mono font-light">+</div>
              <div className="absolute -bottom-[5.5px] -left-[4.5px] text-[#eee] text-[10px] leading-none font-mono font-light">+</div>
              <div className="absolute -bottom-[5.5px] -right-[4.5px] text-[#eee] text-[10px] leading-none font-mono font-light">+</div>
              <div className="border border-[#333] px-5 py-3 bg-transparent transition-colors group-hover:bg-white/5">
                <span className="text-white font-sans font-bold text-[11px] tracking-[0.2em] uppercase">
                  DOWNLOAD CV
                </span>
              </div>
            </a>
          </div>
          
        </div>
      </FadeInSection>
    </section>
  );
}
