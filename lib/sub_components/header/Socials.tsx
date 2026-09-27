'use client';

import { SOCIALS } from '@/lib/utils/constants';
import Image from 'next/image';
import Link from 'next/link';

const Socials = () => {
  return (
    <div className="flex items-center gap-3.5">
      {SOCIALS.map((social, i) => {
        return (
          <Link href={social.link} key={i} target="_blank">
            <Image
              src={social.image}
              alt="social_media_icon"
              width={100}
              height={100}
              className="w-[85%] h-auto hover:opacity-60"
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
