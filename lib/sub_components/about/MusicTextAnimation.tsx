'use client';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faItunesNote } from '@fortawesome/free-brands-svg-icons';

const MusicTextAnimation = () => {
  return (
    <span className="inline-flex items-center relative w-12.5 justify-center">
      <span className="inline-flex w-3.5 h-3.5 -rotate-20 absolute top-2 left-0 overflow-hidden justify-center items-center animate-pop-in-fade-out">
        <Image
          src={'/icons/pink_heart.svg'}
          width={10}
          height={10}
          alt="heart"
          className="w-3 h-3 -rotate-20 animate-heart-grow"
        />
      </span>
      <FontAwesomeIcon icon={faItunesNote} className="text-[1.7rem]" />
      <span className="inline absolute top-0 -right-1">
        <Image
          src={'/icons/pink_heart.svg'}
          width={10}
          height={10}
          alt="heart"
          className="w-4.5 h-4.5 animate-pop-in-out"
        />
      </span>
    </span>
  );
};

export default MusicTextAnimation;
