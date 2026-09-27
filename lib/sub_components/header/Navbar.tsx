'use client';

import { NAVIGATIONS } from '@/lib/utils/constants';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (link: string) => {
    // Exclude external links (e.g. Spotify) from being active
    if (link.startsWith('http')) return false;

    // Exact match for Home ('/')
    if (link === '/') return pathname === '/';

    // Match exact path or sub-routes
    return pathname === link || pathname.startsWith(`${link}/`);
  };

  return (
    <nav className="flex gap-14">
      {NAVIGATIONS.map((navigation, i) => {
        const active = isActive(navigation.link);

        return (
          <Link
            key={i}
            href={navigation.link}
            target={navigation.link.includes('spotify') ? '_blank' : '_self'}
            className={`flex items-center gap-2 text-[0.85rem] leading-[100%] tracking-[1%]
               font-light text-[#000000] transition-all duration-300 ease-in-out ${
                 active ? 'opacity-100' : 'opacity-50 hover:opacity-80'
               }`}
          >
            <span>{navigation.title}</span>
            {navigation.image ? (
              <span>
                <Image
                  src={navigation.image}
                  alt={navigation.title}
                  width={100}
                  height={100}
                  className="w-4.5 h-auto"
                />
              </span>
            ) : null}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
