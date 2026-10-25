'use client';

import { useEffect, useRef } from 'react';

const MOBILE = '(max-width: 767px)'; // matches Tailwind's md breakpoint
const ratios = new Map<HTMLVideoElement, number>(); // how much of each video is visible (0 to 1)
let observer: IntersectionObserver | null = null;

// desktop: play everything in view. Mobile: play only the most visible video.
function refresh() {
  const single = window.matchMedia(MOBILE).matches;

  let best: HTMLVideoElement | null = null;
  let bestRatio = 0;
  for (const [video, ratio] of ratios) {
    if (ratio > bestRatio) {
      best = video;
      bestRatio = ratio;
    }
  }

  for (const [video, ratio] of ratios) {
    const shouldPlay = single ? video === best : ratio > 0;
    if (shouldPlay) video.play().catch(() => {});
    else video.pause();
  }
}

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      entries => {
        entries.forEach(e =>
          ratios.set(
            e.target as HTMLVideoElement,
            e.isIntersecting ? e.intersectionRatio : 0,
          ),
        );
        refresh();
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
  }
  return observer;
}

export function useVisiblePlayback() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return; // image snapshots have no video element

    video.muted = true; // React doesn't reliably set the muted attribute, and autoplay requires it

    // visitors who prefer reduced motion see the first frame instead of a loop
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const obs = getObserver();
    ratios.set(video, 0);
    obs.observe(video);

    return () => {
      obs.unobserve(video);
      ratios.delete(video);
      video.pause();
      refresh();
    };
  }, []);

  return ref;
}
