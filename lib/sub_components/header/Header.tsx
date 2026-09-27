'use client';

import Image from 'next/image';
import Navbar from './Navbar';
import Socials from './Socials';
import { Container } from '../../wrappers/Container';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [showNavBackground, setShowNavBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavBackground(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="pt-10 sticky top-0 z-1000">
      <Container
        size="default"
        className={`flex justify-between items-center transition-all duration-300 ease-in-out${
          showNavBackground
            ? `bg-white/30 backdrop-blur-lg shadow-md rounded-2xl py-5`
            : ''
        }`}
      >
        {/* Logo */}
        <Link href={'/'} className="w-[6.7%] block">
          <Image
            src="/logo.svg"
            width={100}
            height={100}
            alt="logo"
            className="w-full h-auto"
          />
        </Link>

        {/* Nav */}
        <Navbar />

        {/* Socials */}
        <Socials />
      </Container>
    </header>
  );
};

export default Header;
