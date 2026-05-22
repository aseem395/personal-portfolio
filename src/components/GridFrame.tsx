export default function GridFrame() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[40] p-1 md:p-2">
      <div className="w-full h-full relative">
        {/* Header Top Line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#222]" />
        
        {/* Header Bottom Line */}
        <div className="absolute top-[48px] left-0 right-0 h-[1px] bg-[#222]" />
        
        {/* Bottom Horizontal Border */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#222]" />
        
        {/* Left Vertical Line */}
        <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-[#222]" />
        
        {/* Right Vertical Line */}
        <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-[#222]" />
        
        {/* Crosshairs at ALL Intersections */}
        {/* Header Left */}
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-[#555] text-[10px] font-mono leading-none">+</div>
        <div className="absolute top-[48px] left-0 -translate-x-1/2 -translate-y-1/2 text-[#555] text-[10px] font-mono leading-none">+</div>
        
        {/* Header Right */}
        <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-[#555] text-[10px] font-mono leading-none">+</div>
        <div className="absolute top-[48px] right-0 translate-x-1/2 -translate-y-1/2 text-[#555] text-[10px] font-mono leading-none">+</div>
        
        {/* Footer Left */}
        <div className="absolute bottom-[64px] left-0 -translate-x-1/2 translate-y-1/2 text-[#555] text-[10px] font-mono leading-none">+</div>
        <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-[#555] text-[10px] font-mono leading-none">+</div>
        
        {/* Footer Right */}
        <div className="absolute bottom-[64px] right-0 translate-x-1/2 translate-y-1/2 text-[#555] text-[10px] font-mono leading-none">+</div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-[#555] text-[10px] font-mono leading-none">+</div>
      </div>
    </div>
  );
}
