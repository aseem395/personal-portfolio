export default function ExperienceSection() {
  const experiences = [
    {
      time: "Feb 2026 - May 2026",
      company: "Bondigitally",
      role: "Application and AI Automation Developer",
      desc: "Constructed multi-agent conversational tools, engineered automated enterprise pipelines integrating API pathways, and shipped functional internal utility software layers."
    },
    {
      time: "Jul 2025 - Jan 2026",
      company: "Pathnovo Solutions",
      role: "Sole Mobile Engineer",
      desc: "Held structural end-to-end accountability for designing, testing, optimizing, and launching production-level mobile architecture solutions backed by real-time synchronization."
    },
    {
      time: "Jun 2025 - Sep 2025",
      company: "M/s eHealth-Care",
      role: "App Developer Intern",
      desc: "Developed scalable backend structures and full-stack system routes combining high-performance FastAPI configurations with structured PostgreSQL relational schemas."
    }
  ];

  return (
    <div className="flex flex-col w-full relative z-10">
      <h2 className="text-[22px] font-normal tracking-wide text-white mb-12">EXPERIENCE</h2>

      <div className="flex flex-col border-l border-[#222]">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative pl-8 pb-10 border-b border-[#141414] mb-10 last:border-b-0 last:mb-0">
            {/* Timeline Tick Mark */}
            <div className="absolute left-[-1px] top-2 w-[4px] h-[1px] bg-[#555]" />
            
            <div className="flex justify-between items-center mb-1">
              <div className="text-[10px] font-bold text-[#888] tracking-widest uppercase">
                {exp.time}
              </div>
              <div className="text-[#333] font-mono text-[10px]">
                {(idx + 1).toString().padStart(2, '0')}
              </div>
            </div>
            
            <div className="text-white font-bold text-[14px] tracking-wide mb-1">
              {exp.role}
            </div>

            <div className="text-[#555] font-semibold text-[11px] tracking-wide mb-3 uppercase">
              {exp.company}
            </div>
            
            <div className="text-[#888] text-[12px] leading-relaxed font-light">
              {exp.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
