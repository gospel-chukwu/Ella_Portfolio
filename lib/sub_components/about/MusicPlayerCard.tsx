'use client';

import Image from "next/image";

const MusicPlayerCard = () => {
  return (
    <div
      className="absolute bottom-full left-2/2 -translate-x-1/2 mb-1
              inline-flex flex-col gap-2 bg-[#FAFAFA] px-1 py-2.5 rounded-xl whitespace-nowrap shadow-md shadow-[#7B7B7B1F]
              transition-all duration-300 ease-out pointer-events-none opacity-0 translate-y-2
              group-hover:opacity-100 group-hover:translate-y-0 w-56"
    >
      <div className="bg-[#FFFFFF] rounded-xl h-13 flex items-center gap-2 overflow-hidden">
        <div className="w-[28%]">
          <Image
            src={'/images/missing_piece_song_cover.svg'}
            width={100}
            height={100}
            alt="song_cover"
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-[#000000] font-normal text-[0.9rem] leading-[13.9px] tracking-[2%]">
            Missin Piece
          </h3>
          <p className="text-[#626262] text-[0.75rem] font-normal leading-[13.9px] tracking-[2%]">
            Victony
          </p>
        </div>
      </div>
      <p className="pl-2 text-[#626262] text-[0.6rem] font-normal leading-[13.9px] tracking-[2%]">
        Last played 12 minutes ago
      </p>
    </div>
  );
};

export default MusicPlayerCard;
