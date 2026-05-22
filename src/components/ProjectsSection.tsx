'use client';
import FadeInSection from './FadeInSection';

const projects = [
  {
    title: "Diabetic Retinopathy Detection using U-Net Variants",
    category: "DEEP LEARNING / MEDICAL IMAGING / ARCHITECTURE COMPARISON",
    description: "Compared 8 U-Net architectures for retinal image segmentation and optical disc analysis. Performed end-to-end segmentation, masking, preprocessing, and augmentation on retinal datasets. Evaluated models using Dice coefficient and IoU metrics. Built using Python and TensorFlow/PyTorch.",
    image: "/projects/unet.png"
  },
  {
    title: "PCOS / PCOD Detection using Machine Learning",
    category: "MACHINE LEARNING / PREDICTIVE MODELING / CLINICAL DATA",
    description: "Developing predictive machine learning models using structured clinical datasets. Performing feature engineering, preprocessing, and model comparison. Evaluating models using accuracy, precision, recall, and F1-score to explore real-world deployment possibilities for early diagnosis support.",
    image: "/projects/2.png"
  },
  {
    title: "Actikev – Mobile Application",
    category: "MOBILE SYSTEMS / REAL-TIME DATA / PAYMENT GATEWAYS",
    description: "Built and deployed a production-grade React Native application. Implemented authentication, booking flows, payments via Stripe, and comprehensive user management. Integrated REST APIs and real-time data handling, with deployment managed via Expo EAS and TestFlight.",
    image: "/projects/3.png"
  },
  {
    title: "AUTONOMOUS BUSINESS WORKFLOWS & AGENTS",
    category: "APPLIED AI / WORKFLOW AUTOMATION / SYSTEM APIS",
    description: "Architected cross-functional LLM conversational engines and automated data management layers utilizing direct REST API mappings. Developed tailored internal operational software, custom programmatic connectors, and automated messaging pipelines to eliminate overhead across transaction layers.",
    image: "/projects/4.png"
  }
];

export default function ProjectsSection() {
  return (
    <section id="work" className="py-12 relative z-10 w-full">
      <div className="flex flex-col w-full">
        {/* Section Heading */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 w-full mt-12 mb-4">
          <div className="col-span-1 md:col-span-10 md:col-start-2">
            <FadeInSection>
              <h2 className="text-white font-sans font-bold text-xl md:text-2xl tracking-[0.2em] uppercase">
                MY PROJECTS
              </h2>
            </FadeInSection>
          </div>
        </div>

        {projects.map((proj, idx) => {
          const isReversed = idx % 2 !== 0;
          return (
            <div key={idx} className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 items-end pb-24 md:pb-32 border-b border-[#141414] ${idx === 0 ? 'pt-4 md:pt-8' : 'pt-24 md:pt-32'}`}>
              
              {/* Image Side - 7 columns scaled down to ~6.5 columns */}
              <div className={`col-span-1 md:col-span-7 flex ${isReversed ? 'justify-end md:col-start-6 md:row-start-1' : 'justify-start md:col-start-2'}`}>
                 <div className="w-full md:w-[92%] relative md:-translate-x-6">
                   {/* Crosshair corners perfectly overlaying the border */}
                   <div className="absolute -top-[5.5px] -left-[4.5px] text-[#eee] text-[10px] leading-none font-mono font-light">+</div>
                   <div className="absolute -top-[5.5px] -right-[4.5px] text-[#eee] text-[10px] leading-none font-mono font-light">+</div>
                   <div className="absolute -bottom-[5.5px] -left-[4.5px] text-[#eee] text-[10px] leading-none font-mono font-light">+</div>
                   <div className="absolute -bottom-[5.5px] -right-[4.5px] text-[#eee] text-[10px] leading-none font-mono font-light">+</div>
                   
                   <div className="aspect-[634/402] w-full bg-black border border-[#141414] overflow-hidden flex items-center justify-center relative group">
                      <img src={proj.image} alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                   </div>
                 </div>
              </div>

              {/* Text Side - 4 columns, shifted visually closer to the image for normal layout */}
              <div className={`col-span-1 md:col-span-4 ${isReversed ? 'md:col-start-2 md:row-start-1' : 'md:col-start-9 md:-translate-x-10'}`}>
                <FadeInSection className="w-full flex flex-col items-start">
                  <div className="text-[#444] font-mono text-[8px] md:text-[9px] tracking-[0.2em] uppercase mb-4">
                    {proj.category}
                  </div>
                  
                  <h3 className="text-[#eee] text-lg md:text-xl font-sans font-normal tracking-widest leading-[1.3] uppercase mb-6">
                    {proj.title}
                  </h3>
                  
                  <p className="text-[#777] text-xs font-light leading-[1.8] mb-6">
                    {proj.description}
                  </p>
                  
                  {/* View Project Button matching reference design exactly */}
                  <div className="relative group cursor-pointer inline-block">
                    <div className="absolute -top-[5.5px] -left-[4.5px] text-[#eee] text-[10px] leading-none font-mono font-light">+</div>
                    <div className="absolute -top-[5.5px] -right-[4.5px] text-[#eee] text-[10px] leading-none font-mono font-light">+</div>
                    <div className="absolute -bottom-[5.5px] -left-[4.5px] text-[#eee] text-[10px] leading-none font-mono font-light">+</div>
                    <div className="absolute -bottom-[5.5px] -right-[4.5px] text-[#eee] text-[10px] leading-none font-mono font-light">+</div>
                    <div className="border border-[#333] px-5 py-3 bg-transparent transition-colors group-hover:bg-white/5">
                      <span className="text-white font-sans font-bold text-[11px] tracking-[0.2em] uppercase">
                        VIEW PROJECT
                      </span>
                    </div>
                  </div>
                </FadeInSection>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
