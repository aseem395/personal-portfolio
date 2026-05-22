export default function Footer() {
  return (
    <footer className="w-full relative overflow-hidden flex flex-col items-center justify-end pt-32 pb-0 mt-32 border-t border-[#141414]">
      {/* Massive Text perfectly fitting without cropping */}
      <div className="w-full flex justify-center items-end relative z-0">
        <h1 className="text-[26.5vw] leading-[0.75] font-sans font-black tracking-tighter text-white select-none whitespace-nowrap text-center">
          ASEEM
        </h1>
      </div>
      
      {/* Graduated Blur Effect to match the glowing smudge reference */}
      <div className="absolute bottom-0 left-0 right-0 h-[50%] backdrop-blur-[2px] pointer-events-none z-10" style={{ WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)', maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-[35%] backdrop-blur-[6px] pointer-events-none z-10" style={{ WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)', maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-[20%] backdrop-blur-[12px] pointer-events-none z-10" style={{ WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)', maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-[10%] backdrop-blur-[24px] pointer-events-none z-10" style={{ WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)', maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)' }} />
      
      {/* Final darkness fade at the very bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-[15%] bg-gradient-to-t from-black to-transparent pointer-events-none z-20" />
    </footer>
  );
}
