export default function SkillsSection() {
  const skills = [
    {
      id: "01",
      title: "AI/ML & DEEP LEARNING",
      body: "Medical Image Segmentation, U-Net Architectures, Deep Learning, Model Evaluation (Dice, IoU)."
    },
    {
      id: "02",
      title: "MACHINE LEARNING",
      body: "Classification, Feature Engineering, Model Comparison, Performance Evaluation."
    },
    {
      id: "03",
      title: "LANGUAGES & FRAMEWORKS",
      body: "Python, TensorFlow, PyTorch, JavaScript, React Native."
    },
    {
      id: "04",
      title: "BACKEND & TOOLS",
      body: "FastAPI, REST APIs, Git, GitHub, Postman, PostgreSQL, TestFlight, Expo EAS."
    }
  ];

  return (
    <div className="flex flex-col w-full relative z-10">
      <h2 className="text-[22px] font-normal tracking-wide text-white mb-12">SKILLS</h2>

      <div className="flex flex-col">
        {skills.map((skill, idx) => (
          <div key={idx} className="pb-10 border-b border-[#141414] mb-10 last:border-b-0 last:mb-0">
            <div className="flex justify-between items-center mb-3">
              <div className="text-white font-bold text-[13px] tracking-wide uppercase">
                {skill.title}
              </div>
              <div className="text-[#333] font-mono text-[10px]">
                {skill.id}
              </div>
            </div>
            <div className="text-[#888] text-[12px] leading-relaxed font-light">
              {skill.body}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
