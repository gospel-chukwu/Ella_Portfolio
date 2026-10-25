'use client';

import Image from 'next/image';
import Navbar from './Navbar';
import Socials from './Socials';
import MobileMenu from './MobileMenu';
import { Container } from '../../wrappers/Container';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [showNavBackground, setShowNavBackground] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setShowNavBackground(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`mx-4 lg:mx-0 pt-6 md:pt-10 sticky top-0 z-[1000] transition-colors duration-300 ease-in-out pointer-events-none ${
          showNavBackground
            ? 'bg-transparent'
            : pathname === '/about'
              ? 'bg-[#F5F5F5]'
              : 'bg-[#FFFFFF]'
        }`}
      >
        <Container
          size="default"
          className={`flex justify-between items-center gap-4 transition-all duration-300 ease-in-out pointer-events-auto ${
            showNavBackground
              ? 'bg-white/30 backdrop-blur-lg shadow-md rounded-2xl py-4 md:py-5 px-4 md:px-6'
              : ''
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="block w-10 shrink-0 w-13 lg:w-[6.7%] -ml-2"
          >
            <Image
              src="/logo.svg"
              width={100}
              height={100}
              alt="logo"
              className="w-full h-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:block">
            <Navbar />
          </div>

          {/* Desktop socials */}
          <div className="hidden lg:block">
            <Socials />
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="lg:hidden flex items-center justify-center w-10 h-10 -mr-3 text-black"
          >
            <FontAwesomeIcon icon={faBars} className="text-xl" />
          </button>
        </Container>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
