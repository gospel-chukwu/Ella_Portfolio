'use client';

import Image from 'next/image';
import Navbar from '../sub_components/header/Navbar';
import Socials from '../sub_components/header/Socials';
import { Container } from '../wrappers/Container';

const Header = () => {
  return (
    <header className="pt-10">
      <Container size="default" className="flex justify-between items-center">
        {/* Logo */}
        <Image
          src="/logo.svg"
          width={100}
          height={100}
          alt="logo"
          className="w-[6.7%] h-auto"
        />

        {/* Nav */}
        <Navbar />

        {/* Socials */}
        <Socials />
      </Container>
    </header>
  );
};

export default Header;
