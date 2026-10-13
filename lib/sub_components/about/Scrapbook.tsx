'use client';

import { PIECES } from '@/lib/utils/constants';
import { Container } from '@/lib/wrappers/Container';
import { useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import ScrapPiece from './ScrapPiece';

const Scrapbook = () => {
  const boardRef = useRef<HTMLDivElement>(null);
  const zCounter = useRef(50);
  const inView = useInView(boardRef, { once: true, amount: 0.3 });
  const reduceMotion = !!useReducedMotion();
  const [canDrag, setCanDrag] = useState(false);

  // drag on mouse devices only, so it doesn't fight scrolling on touch screens
  useEffect(() => {
    setCanDrag(window.matchMedia('(hover: hover) and (pointer: fine)').matches);
  }, []);

  const bringToFront = () => ++zCounter.current;

  return (
    <Container
      size="wide"
      className="relative mx-auto aspect-[16/9] w-full max-w-6xl mt-30"
    >
      <div ref={boardRef} className="absolute inset-0">
        {PIECES.map((p, i) => (
          <ScrapPiece
            key={i}
            piece={p}
            index={i}
            boardRef={boardRef}
            bringToFront={bringToFront}
            inView={inView}
            canDrag={canDrag}
            reduceMotion={reduceMotion}
          />
        ))}
      </div>
    </Container>
  );
};

export default Scrapbook;
