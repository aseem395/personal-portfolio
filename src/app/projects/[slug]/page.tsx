import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects } from '../../../data/projects';
import FadeInSection from '../../../components/FadeInSection';

// Next.js 15 requires params to be a Promise
interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: Props) {
  const resolvedParams = await params;
  const project = projects.find(p => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="w-full text-white selection:bg-white selection:text-black pb-32">
      
      {/* Global Blur to prevent scroll bleed in the 8px top margin */}
      <div className="fixed top-0 left-0 right-0 h-[56px] bg-[#050505]/90 backdrop-blur-md z-[35] pointer-events-none" />

      {/* Fixed Brutalist Top Nav - perfectly aligns inside GridFrame */}
      <div className="fixed inset-0 z-[45] pointer-events-none p-1 md:p-2">
        <div className="w-full h-full relative">
          <header className="absolute top-[1px] left-[1px] right-[1px] h-[47px] flex justify-between items-center px-4 md:px-8 pointer-events-auto bg-transparent">
            <Link href="/" className="group flex items-center gap-4 text-[#888] hover:text-white transition-colors interactive">
              <div className="w-6 md:w-8 h-[1px] bg-[#888] group-hover:bg-white transition-colors relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-l border-b border-current rotate-45" />
              </div>
              <span className="font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase leading-none mt-[2px]">BACK TO WORK</span>
            </Link>
            
            <div className="text-[9px] md:text-[10px] font-mono tracking-widest text-[#555] uppercase leading-none mt-[2px]">
              CASE STUDY / {project.slug.replace('-', ' ')}
            </div>
          </header>
        </div>
      </div>

      {/* Hero Section */}
      <section className="w-full px-4 md:px-[8.333%] pt-20 pb-12">
        <FadeInSection className="w-full flex flex-col items-start">
          <div className="text-[#666] font-mono text-[10px] tracking-[0.3em] uppercase mb-8 flex items-center gap-4">
            <div className="w-2 h-2 bg-[#666] rounded-full animate-pulse" />
            {project.category}
          </div>
          
          <h1 className="font-sans font-black text-4xl md:text-6xl lg:text-[5.5rem] leading-[0.85] tracking-tighter uppercase max-w-6xl mb-12">
            {project.title.includes('1xOwl') ? (
              <>1<span className="lowercase text-[0.75em] mx-[2px]">x</span>Owl {project.title.split('1xOwl')[1]}</>
            ) : project.title}
          </h1>
          
          <p className="text-[#888] font-light leading-[1.8] text-base md:text-xl max-w-4xl mb-16">
            {project.description}
          </p>
        </FadeInSection>
      </section>

      {/* Hero Image */}
      <FadeInSection className="w-full px-4 md:px-[8.333%] mb-0">
        <div className="w-full aspect-video bg-[#050505] border border-[#222] relative overflow-hidden group">
          {/* Brutalist Corner Markers */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/20 z-10" />
          <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-white/20 z-10" />
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-white/20 z-10" />
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/20 z-10" />
          
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
          />
        </div>
      </FadeInSection>

      {/* Massive Metrics Banner */}
      {project.metrics && project.metrics.length > 0 && (
        <section className="w-full border-b border-[#111] bg-[#020202]">
          <div className="w-full px-4 md:px-[8.333%]">
            <div className="flex flex-wrap md:grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#111]">
              {project.metrics.map((metric, i) => (
                <div key={i} className="w-full py-12 md:py-16 px-4 md:px-8 flex flex-col items-center justify-center text-center hover:bg-[#050505] transition-colors">
                  <span className="text-white font-mono text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4">
                    {metric.value}
                  </span>
                  <span className="text-[#555] font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Structured Content Grid */}
      <section className="w-full px-4 md:px-[8.333%] mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative">
          
          {/* Left Column: Sticky Metadata Sidebar */}
          <div className="col-span-1 lg:col-span-4">
            <div className="sticky top-[120px] flex flex-col gap-12">
              
              {/* Role & Scope */}
              <div>
                <h3 className="text-[#444] font-mono text-[10px] tracking-widest uppercase mb-4">SCOPE & ROLE</h3>
                <div className="w-6 h-[1px] bg-[#333] mb-4" />
                <p className="text-[#eee] font-sans text-sm tracking-widest uppercase mb-2">LEAD AI/ML ENGINEER</p>
                <p className="text-[#888] font-light text-xs">End-to-end Architecture & Deployment</p>
              </div>

              {/* Links */}
              {(project.githubUrl || project.liveUrl) && (
                <div>
                  <h3 className="text-[#444] font-mono text-[10px] tracking-widest uppercase mb-4">EXTERNAL DEPLOYMENT</h3>
                  <div className="w-6 h-[1px] bg-[#333] mb-4" />
                  <div className="flex flex-col gap-4">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-white font-sans text-xs tracking-widest uppercase interactive">
                        <div className="w-4 h-4 rounded-full border border-[#555] flex items-center justify-center group-hover:border-white transition-colors">
                          <div className="w-1 h-1 bg-white rounded-full scale-0 group-hover:scale-100 transition-transform" />
                        </div>
                        GITHUB REPOSITORY ↗
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-white font-sans text-xs tracking-widest uppercase interactive">
                        <div className="w-4 h-4 rounded-full border border-[#555] flex items-center justify-center group-hover:border-white transition-colors">
                          <div className="w-1 h-1 bg-white rounded-full scale-0 group-hover:scale-100 transition-transform" />
                        </div>
                        LIVE DEPLOYMENT ↗
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              {project.techStack && (
                <div>
                  <h3 className="text-[#444] font-mono text-[10px] tracking-widest uppercase mb-4">TECHNOLOGY STACK</h3>
                  <div className="w-6 h-[1px] bg-[#333] mb-6" />
                  <div className="flex flex-col gap-3">
                    {project.techStack.map((tech, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="text-[#333] font-mono text-[9px]">0{i + 1}</span>
                        <span className="text-[#ccc] font-mono text-xs tracking-widest uppercase">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Right Column: Case Study Text */}
          <div className="col-span-1 lg:col-span-8">
            <FadeInSection className="flex flex-col gap-24">
              
              {/* Challenge */}
              {project.challenge && (
                <div>
                  <h2 className="text-white font-sans text-2xl md:text-3xl font-black tracking-tighter uppercase mb-8 flex items-center gap-4">
                    <div className="w-3 h-3 bg-white" />
                    The Challenge
                  </h2>
                  <p className="text-[#888] font-light leading-[2] text-base md:text-lg">
                    {project.challenge}
                  </p>
                </div>
              )}

              {/* Architecture / Solution */}
              {project.solution && (
                <div>
                  <h2 className="text-white font-sans text-2xl md:text-3xl font-black tracking-tighter uppercase mb-8 flex items-center gap-4">
                    <div className="w-3 h-3 bg-white" />
                    System Architecture
                  </h2>
                  <p className="text-[#888] font-light leading-[2] text-base md:text-lg">
                    {project.solution}
                  </p>
                </div>
              )}

              {/* Capabilities / Features */}
              {project.features && project.features.length > 0 && (
                <div>
                  <h2 className="text-white font-sans text-2xl md:text-3xl font-black tracking-tighter uppercase mb-8 flex items-center gap-4">
                    <div className="w-3 h-3 bg-white" />
                    Core Capabilities
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {project.features.map((feature, i) => (
                      <div key={i} className="p-6 border border-[#111] bg-[#020202] hover:bg-[#050505] transition-colors group">
                        <div className="text-[#444] font-mono text-[10px] mb-3 group-hover:text-white transition-colors">CAPABILITY // {i + 1}</div>
                        <p className="text-[#ccc] font-sans text-sm md:text-base leading-relaxed">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </FadeInSection>
          </div>

        </div>
      </section>

    </main>
  );
}
