'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Ensures every page navigation (including browser back/forward)
 * always lands directly at the top of the page.
 */
const ScrollRestoration = () => {
  const pathname = usePathname();

  // Disable browser native scroll restoration
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  // On every route change, land instantly at top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

export default ScrollRestoration;
