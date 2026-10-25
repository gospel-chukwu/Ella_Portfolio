'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

const BackgroundColorWrapper = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className={pathname === '/about' ? 'bg-[#F5F5F5] ' : 'bg-[#FFFFFF]'}>
      {children}
    </div>
  );
};

export default BackgroundColorWrapper;
