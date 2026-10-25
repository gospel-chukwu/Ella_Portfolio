'use client';

import { Container } from '@/lib/wrappers/Container';
import ContactForm from './ContactForm';
import ContactCTA from './ContactCTA';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-[#F5F5F5] w-full lg:h-[95dvh]">
      <Container size="default" className="pt-5">
        <div className="flex flex-col lg:grid grid-cols-[2fr_1fr] gap-15 lg:gap-5 border-b-1 border-[#DFDFDF] pt-15 lg:pt-20 pb-15 lg:pb-22">
          <ContactCTA />
          <ContactForm />
        </div>
        <div className="text-center py-10 lg:py-20 font-light text-[0.93rem] tracking-[3%] leading-[23px] text-[#626262]">
          Ella &copy; {year} All rights reserved
        </div>
      </Container>
    </div>
  );
};

export default Footer;
