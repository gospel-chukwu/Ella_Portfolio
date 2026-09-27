'use client';

import { SOCIALS } from '@/lib/utils/constants';
import Image from 'next/image';
import Link from 'next/link';

const Socials = () => {
  return (
    <div className="flex items-center gap-3.5">
      {SOCIALS.map((social, i) => {
        return (
          <Link
            href={social.link}
            key={i}
            target="_blank"
            className="relative group"
          >
            <Image
              src={social.image}
              alt="social_media_icon"
              width={100}
              height={100}
              className="w-[85%] h-auto hover:opacity-60 transition-opacity duration-300 ease-in-out"
            />
            <div className="w-0 group-hover:w-[60%] h-1 bg-black absolute -top-2 rounded-full transition-width duration-300 ease-in-out"></div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
