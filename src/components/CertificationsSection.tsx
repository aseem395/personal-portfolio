export default function CertificationsSection() {
  const certifications = [
    {
      issuer: "NPTEL / IIT Madras",
      title: "Introduction to Machine Learning",
      desc: "Completed a 12-week intensive curriculum on Machine Learning concepts and applications."
    },
    {
      issuer: "Udemy",
      title: "Google Certified Professional Machine Learning Engineer",
      desc: "Extensive 16.5-hour training covering advanced ML engineering and Google Cloud architectures."
    },
    {
      issuer: "Google Cloud",
      title: "Introduction to Generative AI",
      desc: "Completion badge covering the fundamentals of Generative AI."
    }
  ];

  return (
    <section className="flex flex-col w-full relative z-10">
      <h2 className="text-[22px] font-normal tracking-wide text-white mb-12 uppercase">Certifications</h2>

      <div className="flex flex-col border-l border-[#222]">
        {certifications.map((cert, idx) => (
          <div key={idx} className="relative pl-8 pb-10 border-b border-[#141414] mb-10 last:border-b-0 last:mb-0">
            {/* Timeline Tick Mark */}
            <div className="absolute left-[-1px] top-2 w-[4px] h-[1px] bg-[#555]" />
            
            <div className="flex justify-between items-center mb-2">
              <div className="text-[10px] font-bold text-[#888] tracking-widest uppercase">
                {cert.issuer}
              </div>
              <div className="text-[#333] font-mono text-[10px]">
                {(idx + 1).toString().padStart(2, '0')}
              </div>
            </div>
            
            <div className="text-white font-bold text-[14px] tracking-wide mb-3">
              {cert.title}
            </div>
            
            <div className="text-[#888] text-[12px] leading-relaxed font-light">
              {cert.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
