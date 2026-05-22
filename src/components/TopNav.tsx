export default function TopNav() {
  return (
    <>
      {/* Global Background Blur covering the top margin and navbar (placed behind GridFrame z-40 so lines stay sharp) */}
      <div className="fixed top-0 left-0 right-0 h-[52px] md:h-[56px] bg-[#050505]/40 backdrop-blur-md z-[35] pointer-events-none" />

      <div className="fixed inset-0 z-[45] pointer-events-none p-1 md:p-2">
        <div className="w-full h-full relative">
          {/* The header has no blur itself anymore, it relies on the global layer behind the grid */}
          <header className="absolute top-[1px] left-[1px] right-[1px] h-[47px] flex justify-between items-center px-8 pointer-events-auto">
          
          {/* Left side: Logo + Audio */}
          <div className="flex items-center gap-6">
            <div className="font-sans font-black text-[13px] tracking-[0.15em] text-white flex items-center">
              ASEEM
            </div>
            <AudioToggle />
          </div>

          {/* Right side: Links */}
          <nav className="hidden lg:flex items-center gap-8 font-mono text-[10px] font-bold tracking-widest uppercase">
            <NavLink href="#work">PROJECTS</NavLink>
            <NavLink href="#experience">EXPERIENCE</NavLink>
            <NavLink href="https://github.com/aseem395" external>GITHUB</NavLink>
            <NavLink href="https://www.linkedin.com/in/aseem-kumar-190b8876" external>LINKEDIN</NavLink>
            <NavLink href="mailto:aseemajit@gmail.com">MAIL</NavLink>
          </nav>
        </header>
        </div>
      </div>
    </>
  );
}

function NavLink({ href, children, external }: { href: string, children: React.ReactNode, external?: boolean }) {
  return (
    <a 
      href={href} 
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group relative interactive text-white hover:text-[#888] transition-colors flex items-center px-3 py-2.5"
    >
      <span className="relative z-10">{children}</span>
      
      {/* Top-Right Corner Mark (fades out on hover) */}
      <svg width="4" height="4" viewBox="0 0 10 10" fill="none" className="absolute top-[4px] right-[4px] text-white z-10 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
        <path d="M0 1H9V10" stroke="currentColor" strokeWidth="2" />
      </svg>

      {/* Hover Bounding Box */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-[#111]/80 border border-[#222]">
        {/* Corner Brackets */}
        <div className="absolute -top-[1px] -left-[1px] w-1.5 h-1.5 border-t border-l border-[#888]" />
        <div className="absolute -top-[1px] -right-[1px] w-1.5 h-1.5 border-t border-r border-[#888]" />
        <div className="absolute -bottom-[1px] -left-[1px] w-1.5 h-1.5 border-b border-l border-[#888]" />
        <div className="absolute -bottom-[1px] -right-[1px] w-1.5 h-1.5 border-b border-r border-[#888]" />
      </div>
    </a>
  );
}

function AudioToggle() {
  return (
    <div className="flex items-end gap-[1.5px] h-[9px] cursor-pointer interactive opacity-60 hover:opacity-100 transition-opacity ml-2">
      <div className="w-[1.5px] h-full bg-white audio-bar" />
      <div className="w-[1.5px] h-full bg-white audio-bar" />
      <div className="w-[1.5px] h-full bg-white audio-bar" />
      <div className="w-[1.5px] h-full bg-white audio-bar" />
      <div className="w-[1.5px] h-full bg-white audio-bar" />
      <div className="w-[1.5px] h-full bg-white audio-bar" />
      <div className="w-[1.5px] h-full bg-white audio-bar" />
    </div>
  );
}
