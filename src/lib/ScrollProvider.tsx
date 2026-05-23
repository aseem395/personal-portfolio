'use client';

import { ReactLenis } from 'lenis/react';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function ScrollProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ReactLenis root options={{ lerp: 0.07, wheelMultiplier: 1, touchMultiplier: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
