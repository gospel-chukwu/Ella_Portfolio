import { type RefObject } from "react";

export type Piece = {
  kind: 'photo' | 'sticker' | 'note';
  x: number; // % from the left of the board
  y: number; // % from the top
  w: number; // % of the board width
  rotate: number; // final tilt in degrees
  z: number; // stacking order
  from?: 'top' | 'left' | 'right' | 'bottom'; // where it enters from (default: top)
  src?: string; // for photo and sticker
  text?: string; // for note
};

export type PieceProps = {
  piece: Piece;
  index: number;
  boardRef: RefObject<HTMLDivElement | null>;
  bringToFront: () => number;
  inView: boolean;
  canDrag: boolean;
  reduceMotion: boolean;
};