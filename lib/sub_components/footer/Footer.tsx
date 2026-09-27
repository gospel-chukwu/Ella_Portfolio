'use client';

import { Container } from '@/lib/wrappers/Container';
import ContactForm from './ContactForm';
import ContactCTA from './ContactCTA';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-[#F5F5F5] w-full h-[95dvh]">
      <Container size="default" className="pt-5">
        <div className="grid grid-cols-[2fr_1fr] gap-5 border-b-1 border-[#DFDFDF] pt-20 pb-22">
          <ContactCTA />
          <ContactForm />
        </div>
        <div className="text-center py-20 font-light text-[0.93rem] tracking-[3%] leading-[23px] text-[#626262]">
          Ella &copy; {year} All rights reserved
        </div>
      </Container>
    </div>
  );
};

export default Footer;
