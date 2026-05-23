import Preloader from "@/components/Preloader";
import TopNav from "@/components/TopNav";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import SpecializationSection from "@/components/SpecializationSection";
import HeroText from "@/components/HeroText";
import ScrollFadeOutWrapper from "@/components/ScrollFadeOutWrapper";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      
      <main className="w-full relative z-10 p-2 md:p-4">
        <div className="w-full h-full relative">
          <TopNav />
          
          {/* Hero Section */}
          <ScrollFadeOutWrapper>
            <section className="min-h-[calc(100vh-48px)] flex flex-col justify-center items-center pt-[48px] pb-[64px] relative">
              {/* Deep Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-white opacity-[0.03] blur-[120px] rounded-full pointer-events-none z-0" />
              
              <div className="relative z-10 flex flex-col items-center w-full -mt-[10vh]">
                <span className="font-mono text-[#444] mb-12 text-[9px] md:text-[10px] tracking-widest uppercase block">
                  // CORE INFRASTRUCTURE LOGGED //
                </span>
                <HeroText text1="ASEEM KUMAR" text2="AI ✕ ML ENGINEER" highlightCount={11} />
                
                {/* Tech-spec subtitle block */}
                <div className="relative mt-4 mb-2 border border-[#222] bg-[#050505] p-6 max-w-[600px] w-full group">
                  <div className="absolute -top-[5.5px] -left-[4.5px] text-[#444] text-[10px] leading-none font-mono font-light">+</div>
                  <div className="absolute -top-[5.5px] -right-[4.5px] text-[#444] text-[10px] leading-none font-mono font-light">+</div>
                  <div className="absolute -bottom-[5.5px] -left-[4.5px] text-[#444] text-[10px] leading-none font-mono font-light">+</div>
                  <div className="absolute -bottom-[5.5px] -right-[4.5px] text-[#444] text-[10px] leading-none font-mono font-light">+</div>
                  
                  <div className="flex justify-center w-full">
                    <p className="text-[#888] text-[12px] md:text-[13px] leading-relaxed font-mono tracking-tight text-center">
                      <span className="text-white font-semibold">STATUS: </span>AI/ML Engineer specializing in applied artificial intelligence, medical image segmentation architectures, and scalable full-stack infrastructures.
                    </p>
                  </div>
                </div>

                <div className="flex justify-center mt-6">
                <a href="#work" className="relative group cursor-pointer inline-block interactive">
                  <div className="absolute -top-[5.5px] -left-[4.5px] text-[#eee] text-[10px] leading-none font-mono font-light">+</div>
                  <div className="absolute -top-[5.5px] -right-[4.5px] text-[#eee] text-[10px] leading-none font-mono font-light">+</div>
                  <div className="absolute -bottom-[5.5px] -left-[4.5px] text-[#eee] text-[10px] leading-none font-mono font-light">+</div>
                  <div className="absolute -bottom-[5.5px] -right-[4.5px] text-[#eee] text-[10px] leading-none font-mono font-light">+</div>
                  <div className="border border-[#333] px-5 py-3 bg-transparent transition-colors group-hover:bg-white/5">
                    <span className="text-white font-sans font-bold text-[11px] tracking-[0.2em] uppercase">
                      EXPLORE WORK
                    </span>
                  </div>
                </a>
              </div>
              </div>
            </section>
          </ScrollFadeOutWrapper>

          {/* Specialization Fade-In Section */}
          <SpecializationSection />

          <ProjectsSection />
          
          {/* Triple Column Layout for Experience, Skills, and Certifications */}
          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 lg:gap-24 py-24 border-t border-[#141414]">
            <ExperienceSection />
            <SkillsSection />
            <CertificationsSection />
          </section>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
