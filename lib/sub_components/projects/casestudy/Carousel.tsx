import { Slide } from '@/lib/types/ui/casestudy.types';
import Image from 'next/image';
import type { CSSProperties } from 'react';

const MIN_ITEMS = 6; // short lists are repeated so one loop always covers the screen
const SECONDS_PER_SLIDE = 6; // lower = faster
// const WIDE_SLIDE = 'w-[min(14rem,30vw)]'; // slide width in the full-width layout, tune against Figma

const Carousel = ({
  slides,
  layout,
}: {
  slides: Slide[];
  layout: 'column' | 'wide';
}) => {
  if (!slides.length) return null;
  const wide = layout === 'wide';

  const loop = Array.from(
    { length: Math.ceil(MIN_ITEMS / slides.length) },
    () => slides,
  ).flat();
  const duration = `${loop.length * SECONDS_PER_SLIDE}s`;

  const group = (isCopy: boolean) => (
    <div
      className={`flex shrink-0 ${wide ? 'gap-4 pr-4' : 'gap-6 pr-6'} ${isCopy ? 'marquee-dup' : ''}`}
    >
      {loop.map((s, i) => {
        const hidden = isCopy || i >= slides.length; // keep screen readers from hearing repeats
        return (
          <figure
            key={`${s._key}-${i}`}
            aria-hidden={hidden || undefined}
            className={`h-auto w-full select-none ${wide ? '' : 'w-[max(32cqw,15rem)] md:my-7'}`}
          >
            <Image
              src={s.url}
              alt={hidden ? '' : s.alt || s.caption || ''}
              width={s.width}
              height={s.height}
              sizes={
                wide
                  ? '(min-width: 1024px) 26rem, 85vw'
                  : '(min-width: 800px) 14rem, 240px'
              }
              draggable={false}
              className={`h-auto w-full select-none ${wide ? 'rounded-lg' : 'rounded-[40px] shadow-2xl shadow-[#5A5A5A0F]'}`}
            />
            {s.caption && (
              <figcaption
                className={
                  wide
                    ? 'mt-4 font-geist-mono font-light text-[0.75rem] uppercase tracking-[3%] leading-[12px] text-[#1111113D]'
                    : 'font-nothing-you-could-do mt-4 text-center text-lg leading-tight text-neutral-700'
                }
              >
                {s.caption}
              </figcaption>
            )}
          </figure>
        );
      })}
    </div>
  );

  return (
    <div
      className={`marquee ${
        wide
          ? 'relative left-1/2 z-10 my-12 w-screen -translate-x-1/2'
          : 'my-12 rounded-[40px] border border-[#F1F1F1] bg-[#FDFDFD] w-[min(42rem,calc(100vw_-_3rem))] -translate-x-1/2 relative left-1/2'
      }`}
      style={{ '--marquee-duration': duration } as CSSProperties}
    >
      <div className={`marquee-track flex w-max ${wide ? '' : 'py-5'}`}>
        {group(false)}
        {group(true)}
      </div>
    </div>
  );
};

export default Carousel;
