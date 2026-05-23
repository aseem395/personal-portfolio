import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects } from '../../../data/projects';
import FadeInSection from '../../../components/FadeInSection';

// Next.js requires params to be awaited in newer versions or treated as a Promise in some app router configs. 
// We use the standard Next.js 14/15 interface for dynamic route params.
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
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black pb-32">
      
      {/* Brutalist Top Nav */}
      <nav className="w-full border-b border-[#111] px-4 md:px-12 py-6 flex justify-between items-center sticky top-0 bg-black/80 backdrop-blur-md z-50">
        <Link href="/" className="group flex items-center gap-4 text-[#888] hover:text-white transition-colors">
          <div className="w-8 h-[1px] bg-[#888] group-hover:bg-white transition-colors relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 border-l border-b border-current rotate-45" />
          </div>
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase">BACK TO WORK</span>
        </Link>
        
        <div className="text-[10px] font-mono tracking-widest text-[#444] uppercase">
          PROJECT / {project.slug.replace('-', ' ')}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full px-4 md:px-[8.333%] pt-20 pb-12">
        <FadeInSection className="w-full flex flex-col items-start">
          <div className="text-[#666] font-mono text-[10px] tracking-[0.3em] uppercase mb-8">
            {project.category}
          </div>
          
          <h1 className="font-sans font-bold text-4xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tighter uppercase max-w-5xl mb-16">
            {project.title.includes('1xOwl') ? (
              <>1<span className="lowercase text-[0.75em] mx-[2px]">x</span>Owl {project.title.split('1xOwl')[1]}</>
            ) : project.title}
          </h1>
          
          {/* Tech Stack Grid */}
          {project.techStack && (
            <div className="flex flex-wrap gap-4 mb-20">
              {project.techStack.map((tech, i) => (
                <div key={i} className="border border-[#222] px-4 py-2 bg-[#050505]">
                  <span className="text-[#aaa] font-mono text-[9px] tracking-[0.1em] uppercase">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          )}
        </FadeInSection>
      </section>

      {/* Hero Image */}
      <FadeInSection className="w-full px-4 md:px-[8.333%] mb-24">
        <div className="w-full aspect-video bg-[#050505] border border-[#222] relative overflow-hidden group project-image cursor-none">
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

      {/* Content Section */}
      <section className="w-full px-4 md:px-[8.333%] grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-0">
        
        {/* Left Side: Metrics or Links */}
        <div className="col-span-1 md:col-span-4 flex flex-col gap-8 border-t border-[#111] pt-8">
          {(project.githubUrl || project.liveUrl) && (
            <div className="flex flex-col gap-4">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-white font-sans text-xs tracking-widest uppercase hover:underline underline-offset-8">
                  GITHUB REPOSITORY ↗
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-white font-sans text-xs tracking-widest uppercase hover:underline underline-offset-8">
                  LIVE DEPLOYMENT ↗
                </a>
              )}
            </div>
          )}
          
          <div className="flex flex-col gap-2">
            <span className="text-[#444] font-mono text-[9px] tracking-widest uppercase">ROLE</span>
            <span className="text-[#eee] font-sans text-xs tracking-widest uppercase">LEAD DEVELOPER</span>
          </div>
        </div>

        {/* Right Side: Description */}
        <div className="col-span-1 md:col-span-8 border-t border-[#111] pt-8 md:pl-16">
          <h2 className="text-[#eee] font-sans text-xl md:text-2xl tracking-widest uppercase mb-8">
            PROJECT OVERVIEW
          </h2>
          
          <div className="text-[#888] font-light leading-[2] text-sm md:text-base space-y-6">
            <p className="text-[#ccc] text-lg leading-relaxed mb-10">{project.description}</p>
            
            {project.fullDescription?.split('\n').map((line, i) => {
              const trimmed = line.trim();
              if (!trimmed) return <br key={i} />;
              
              if (trimmed.startsWith('-')) {
                return (
                  <div key={i} className="flex items-start gap-4 ml-2 md:ml-4">
                    <span className="text-[#555] mt-[10px] block w-1.5 h-1.5 bg-white rounded-full flex-shrink-0 mix-blend-difference" />
                    <p>{trimmed.replace(/^- /, '')}</p>
                  </div>
                );
              }
              
              if (trimmed.endsWith(':')) {
                return (
                  <h3 key={i} className="text-[#eee] font-sans text-base md:text-lg tracking-widest uppercase mt-12 mb-4">
                    {trimmed}
                  </h3>
                );
              }
              
              return <p key={i}>{line}</p>;
            })}
          </div>
        </div>

      </section>

    </main>
  );
}
