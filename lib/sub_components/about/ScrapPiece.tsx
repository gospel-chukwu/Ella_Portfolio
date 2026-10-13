import { Piece, PieceProps } from '@/lib/types/ui/about.types';
import {
  KIND_ORDER,
  LIFT_SHADOW,
  NO_SHADOW,
  OFFSETS,
  PIECES,
  STEP,
} from '@/lib/utils/constants';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';

export const DELAYS = new Map<Piece, number>(
  [...PIECES]
    .sort((a, b) => KIND_ORDER[a.kind] - KIND_ORDER[b.kind]) // stable: keeps array order within a kind
    .map((p, rank) => [p, rank * STEP] as [Piece, number]),
);

const ScrapPiece = ({
  piece: p,
  index,
  boardRef,
  bringToFront,
  inView,
  canDrag,
  reduceMotion,
}: PieceProps) => {
  const [z, setZ] = useState(p.z);
  const state = useRef({ hover: false, drag: false, moved: false });
  const isNote = p.kind === 'note';
  const dragEnabled = canDrag && !isNote;
  const nudge = index % 2 === 0 ? 1.5 : -1.5;
  const delay = DELAYS.get(p) ?? 0;

  // drop back to the original layer only after the settle animation ends,
  // and never for a piece the visitor has dragged (it stays on top)
  const settle = () => {
    const s = state.current;
    if (!s.hover && !s.drag && !s.moved) setZ(p.z);
  };

  return (
    // OUTER: position + entrance only
    <motion.div
      className="absolute"
      style={{ left: `${p.x}%`, top: `${p.y}%`, width: `${p.w}%`, zIndex: z }}
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              scale: 1.15,
              rotate: p.rotate - 12,
              ...OFFSETS[p.from ?? 'top'],
            }
      }
      animate={
        reduceMotion || inView
          ? { opacity: 1, scale: 1, x: 0, y: 0, rotate: p.rotate }
          : undefined
      }
      transition={{
        default: { type: 'spring', stiffness: 130, damping: 16, delay },
        opacity: { duration: 0.3, delay },
      }}
    >
      {/* INNER: hover + drag, with its own transition and no delay */}
      <motion.div
        className={`select-none ${dragEnabled ? 'cursor-grab active:cursor-grabbing' : ''}`}
        style={{ filter: NO_SHADOW }}
        whileHover={
          isNote
            ? undefined
            : { scale: 1.06, rotate: nudge, filter: LIFT_SHADOW }
        }
        whileDrag={{ scale: 1.08, filter: LIFT_SHADOW }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        drag={dragEnabled}
        dragConstraints={boardRef}
        dragElastic={0.15}
        dragMomentum={false}
        onHoverStart={() => {
          if (isNote) return;
          state.current.hover = true;
          setZ(bringToFront());
        }}
        onHoverEnd={() => {
          state.current.hover = false;
        }}
        onDragStart={() => {
          state.current.drag = true;
          state.current.moved = true;
          setZ(bringToFront());
        }}
        onDragEnd={() => {
          state.current.drag = false;
        }}
        onAnimationComplete={settle}
      >
        {isNote ? (
          <p className="font-nothing-you-could-do text-[0.8cqw] font-medium leading-tight text-neutral-800">
            {p.text}
          </p>
        ) : (
          <Image
            src={p.src!}
            alt=""
            width={800}
            height={800}
            className="h-auto w-full"
            draggable={false}
          />
        )}
      </motion.div>
    </motion.div>
  );
};

export default ScrapPiece;
