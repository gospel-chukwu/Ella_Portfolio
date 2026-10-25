'use client';

import { HeroProps } from '@/lib/types/ui/homepage.types';
import { Container } from '@/lib/wrappers/Container';
import ClientLogos from './ClientLogos';

const Hero = ({ clients }: HeroProps) => {
  return (
    <section className="pt-12 md:pt-20 md:h-64">
      <Container size="default" className="flex flex-col gap-6 md:gap-4">
        <div className="font-light tracking-[3%] leading-[42px] text-[1.7rem] md:text-[1.9rem] md:w-[80%]">
          <span className="text-[#1E1E1E80]">Ella - </span>I Design Brands,
          Products and Experiences that are Exceptional and cannot be ignored.
        </div>
        <div className="flex items-center gap-3">
          <h2 className="text-[#626262] font-light text-[0.95rem] tracking-[2%] leading-[23px]">
            Clients:
          </h2>
          <ClientLogos clients={clients} />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
