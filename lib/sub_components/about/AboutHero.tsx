'use client';

import { Container } from '@/lib/wrappers/Container';
import Image from 'next/image';
import MusicTextAnimation from './MusicTextAnimation';
import MusicPlayerCard from './MusicPlayerCard';

const AboutHero = () => {
  return (
    <section className="pt-30">
      <Container size="default" className="flex flex-col gap-2">
        <div className="w-[78%] font-normal tracking-[2%] leading-[46px] text-[1.97rem] text-[#1E1E1E]">
          <span>Ella </span>
          <span className="group relative inline-block">
            <span className="cursor-pointer">(me)</span>
            <div
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1
              inline-flex items-center leading-[13px] tracking-[2%] 
              text-[0.95rem] bg-white text-[#959595] px-2.5 py-2.5 rounded-full whitespace-nowrap shadow-md shadow-[#7B7B7B1F]
              transition-all duration-300 ease-out pointer-events-none
              opacity-0 translate-y-2
              group-hover:opacity-100 group-hover:translate-y-0.5 font-light "
            >
              Serial Chiller 😼
            </div>
          </span>
          <span> has a 5 year Experience Across</span>

          <span> Product & Brand Design. I Love </span>
          <span className="text-[#1E1E1E80] inline-flex group relative cursor-pointer">
            <span>Music</span>
            <MusicTextAnimation />
            <MusicPlayerCard />
          </span>
          <span> I Enjoy </span>
          <span>Playing </span>
          <span className="inline-flex items-center gap-2.5">
            <span className="text-[#1E1E1E80] cursor-pointer hover:text-[#DB0158] transition-all duration-300 ease-in-out whitespace-nowrap">
              Candy Crush{' '}
            </span>
            <div className="inline-block w-[12%] h-[12%] origin-bottom-left animate-candy-swing">
              <Image
                src={'/icons/candy_crush.svg'}
                width={10}
                height={10}
                alt="candy_crush"
                className="w-full"
              />
            </div>
          </span>
        </div>
      </Container>
    </section>
  );
};

export default AboutHero;
