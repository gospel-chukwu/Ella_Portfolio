'use client';

import { SOCIALS } from '@/lib/utils/constants';
import Image from 'next/image';
import Link from 'next/link';

const Socials = () => {
  return (
    <div className="flex items-center gap-2.5 lg:gap-3.5 shrink-0">
      {SOCIALS.map((social, i) => {
        return (
          <Link
            href={social.link}
            key={i}
            target="_blank"
            aria-label="Social media link"
            className="relative group block w-5 lg:w-[1.35rem]"
          >
            <Image
              src={social.image}
              alt=""
              width={100}
              height={100}
              className="w-full h-auto hover:opacity-60 transition-opacity duration-300 ease-in-out"
            />
            <div className="w-0 group-hover:w-[60%] h-1 bg-black absolute -top-2 rounded-full transition-[width] duration-300 ease-in-out"></div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
