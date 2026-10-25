'use client';

import { NAVIGATIONS, SOCIALS } from '@/lib/utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { MobileMenuProps } from '@/lib/types/ui/header.types';
import { getSocialLabel } from '@/lib/utils/getSocialLabel';


const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const pathname = usePathname();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const isActive = (link: string) => {
    if (link.startsWith('http')) return false;
    if (link === '/') return pathname === '/';
    return pathname === link || pathname.startsWith(`${link}/`);
  };

  return (
    <div
      className={`fixed inset-0 z-[1100] lg:hidden ${
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Drawer */}
      <aside
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`absolute top-0 right-0 flex h-dvh w-3/4 max-w-sm flex-col bg-white shadow-xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end px-5 pt-6">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center text-black"
          >
            <FontAwesomeIcon icon={faXmark} className="text-xl" />
          </button>
        </div>
        <div className='flex flex-col justify-between h-full'>
          <nav
            className="flex flex-col gap-10 px-8 pt-10"
            aria-label="Mobile navigation"
          >
            {NAVIGATIONS.map((navigation, i) => {
              const active = isActive(navigation.link);

              return (
                <Link
                  key={i}
                  href={navigation.link}
                  target={
                    navigation.link.includes('spotify') ? '_blank' : '_self'
                  }
                  onClick={onClose}
                  className={`flex items-center gap-2 text-[0.95rem] leading-none tracking-[1%] transition-colors duration-200 ${
                    active
                      ? 'font-medium text-black'
                      : 'font-light text-black/40'
                  }`}
                >
                  <span>{navigation.title}</span>
                  {navigation.image ? (
                    <Image
                      src={navigation.image}
                      alt=""
                      width={18}
                      height={18}
                      className="h-auto w-4.5"
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="mb-2 border-t border-black/10 px-8 py-8">
            <p className="mb-4 text-xs font-light uppercase tracking-[0.12em] text-black/40">
              Connect
            </p>
            <div className="flex items-center gap-5">
              {SOCIALS.map((social, i) => {
                const label = getSocialLabel(social.link);

                return (
                  <Link
                    href={social.link}
                    key={i}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    aria-label={label}
                    className="block w-5 opacity-60 transition-opacity duration-200 hover:opacity-100"
                  >
                    <Image
                      src={social.image}
                      alt="social handle"
                      width={20}
                      height={20}
                      className="h-auto w-full"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default MobileMenu;
