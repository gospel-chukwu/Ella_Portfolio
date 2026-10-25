'use client';

import { useEffect, useState } from 'react';

// returns the id of the section currently under the "reading line"
export function useActiveSection(ids: string[], line = 0.85) {
  const [active, setActive] = useState(ids[0] ?? '');
  const key = ids.join('|'); // stable dependency, so the effect doesn't re-run on every render

  useEffect(() => {
    const list = key ? key.split('|') : [];
    let frame = 0;

    const update = () => {
      const y = window.innerHeight * line;
      let current = list[0] ?? '';

      for (const id of list) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= y) current = id;
      }

      // a short last section never reaches the line, so at the bottom of the page pick the last one
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom && list.length) current = list[list.length - 1];

      setActive(current);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [key, line]);

  return active;
}
 