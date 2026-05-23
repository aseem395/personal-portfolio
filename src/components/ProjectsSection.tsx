'use client';
import Link from 'next/link';
import FadeInSection from './FadeInSection';
import { projects } from '../data/projects';

export default function ProjectsSection() {
  const featuredProjects = projects.slice(0, 4);
  const otherProjects = projects.slice(4);

  return (
    <section id="work" className="py-12 relative z-10 w-full">
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
      <div className="flex flex-col w-full">
        {/* Section Heading */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 w-full mt-12 mb-4">
          <div className="col-span-1 md:col-span-10 md:col-start-2">
            <FadeInSection>
              <h2 className="text-white font-sans font-bold text-xl md:text-2xl tracking-[0.2em] uppercase">
                FEATURED WORK
              </h2>
            </FadeInSection>
          </div>
        </div>

        {/* FEATURED PROJECTS (TOP 4) */}
        {featuredProjects.map((proj, idx) => {
          const isReversed = idx % 2 !== 0;
          const isLastFeatured = idx === featuredProjects.length - 1;
          return (
            <div key={idx} className={`${isLastFeatured ? 'relative' : 'sticky top-0'} w-full min-h-[100svh] bg-[#020202] flex flex-col justify-center overflow-hidden border-t border-[#111] shadow-[0_-20px_50px_rgba(0,0,0,0.9)]`}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 items-end w-full py-12 md:py-20">
                
                {/* Image Side - 7 columns scaled down to ~6.5 columns */}
                <div className={`col-span-1 md:col-span-7 flex ${isReversed ? 'justify-end md:col-start-6 md:row-start-1' : 'justify-start md:col-start-2'}`}>
                 <div className="w-full md:w-[92%] relative md:-translate-x-6">
                   {/* Crosshair corners perfectly overlaying the border */}
                   <div className="absolute -top-[5.5px] -left-[4.5px] text-[#eee] text-[10px] leading-none font-mono font-light">+</div>
                   <div className="absolute -top-[5.5px] -right-[4.5px] text-[#eee] text-[10px] leading-none font-mono font-light">+</div>
                   <div className="absolute -bottom-[5.5px] -left-[4.5px] text-[#eee] text-[10px] leading-none font-mono font-light">+</div>
                   <div className="absolute -bottom-[5.5px] -right-[4.5px] text-[#eee] text-[10px] leading-none font-mono font-light">+</div>
                   
                   <Link href={`/projects/${proj.slug}`} className="aspect-[634/402] w-full bg-black border border-[#141414] overflow-hidden flex items-center justify-center relative group project-image cursor-none block">
                      <img src={proj.image} alt={proj.title} className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 opacity-60 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal" />
                   </Link>
                 </div>
              </div>

              {/* Text Side - 4 columns, shifted visually closer to the image for normal layout */}
              <div className={`col-span-1 md:col-span-4 ${isReversed ? 'md:col-start-2 md:row-start-1' : 'md:col-start-9 md:-translate-x-10'}`}>
                <FadeInSection className="w-full flex flex-col items-start px-4 md:px-0">
                  <div className="text-[#444] font-mono text-[8px] md:text-[9px] tracking-[0.2em] uppercase mb-4">
                    {proj.category}
                  </div>
                  
                  <h3 className="text-[#eee] text-lg md:text-xl font-sans font-normal tracking-widest leading-[1.3] uppercase mb-6">
                    {proj.title.includes('1xOwl') ? (
                      <>1<span className="lowercase text-[0.75em] mx-[1px]">x</span>Owl {proj.title.split('1xOwl')[1]}</>
                    ) : proj.title}
                  </h3>
                  
                  <p className="text-[#777] text-xs font-light leading-[1.8] mb-6">
                    {proj.description}
                  </p>
                  
                  {/* View Project Button matching reference design exactly */}
                  <Link href={`/projects/${proj.slug}`} className="relative group cursor-pointer inline-block interactive">
                    <div className="absolute -top-[5.5px] -left-[4.5px] text-[#eee] text-[10px] leading-none font-mono font-light">+</div>
                    <div className="absolute -top-[5.5px] -right-[4.5px] text-[#eee] text-[10px] leading-none font-mono font-light">+</div>
                    <div className="absolute -bottom-[5.5px] -left-[4.5px] text-[#eee] text-[10px] leading-none font-mono font-light">+</div>
                    <div className="absolute -bottom-[5.5px] -right-[4.5px] text-[#eee] text-[10px] leading-none font-mono font-light">+</div>
                    <div className="border border-[#333] px-5 py-3 bg-transparent transition-colors group-hover:bg-white/5">
                      <span className="text-white font-sans font-bold text-[11px] tracking-[0.2em] uppercase">
                        VIEW PROJECT
                      </span>
                    </div>
                  </Link>
                </FadeInSection>
              </div>

              </div>
            </div>
          );
        })}

        {/* OTHER PROJECTS GALLERY (CAROUSEL) */}
        {otherProjects.length > 0 && (
          <div className="w-full pt-32 pb-12 relative z-20 bg-black border-t border-[#111]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 w-full mb-16">
              <div className="col-span-1 md:col-span-10 md:col-start-2 px-4 md:px-0">
                <FadeInSection>
                  <h2 className="text-white font-sans font-bold text-lg md:text-xl tracking-[0.2em] uppercase">
                    OTHER EXPERIMENTS
                  </h2>
                </FadeInSection>
              </div>
            </div>
            
            <div className="w-full flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-12 px-4 md:px-[8.333%] hide-scrollbar pb-12 cursor-grab active:cursor-grabbing">
              {otherProjects.map((proj, idx) => (
                <Link href={`/projects/${proj.slug}`} key={idx} className="snap-start flex-none w-[85%] md:w-[calc(33.3333%-2rem)] flex flex-col group cursor-none project-image">
                  {/* Image */}
                  <div className="relative w-full aspect-[16/10] bg-[#050505] border border-[#222] overflow-hidden mb-6">
                    <img src={proj.image} alt={proj.title} className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 opacity-60 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal" />
                  </div>
                  {/* Text */}
                  <div className="text-[#555] font-mono text-[8px] tracking-[0.2em] uppercase mb-3">
                    {proj.category.split('/')[0].trim()}
                  </div>
                  <h3 className="text-[#ddd] text-sm md:text-base font-sans font-medium tracking-widest leading-[1.3] uppercase mb-3 group-hover:text-white transition-colors">
                    {proj.title.includes('1xOwl') ? (
                      <>1<span className="lowercase text-[0.75em] mx-[1px]">x</span>Owl {proj.title.split('1xOwl')[1]}</>
                    ) : proj.title}
                  </h3>
                  <p className="text-[#666] text-[10px] md:text-xs font-light leading-[1.6] line-clamp-3">
                    {proj.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
