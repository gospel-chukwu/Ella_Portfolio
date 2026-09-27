'use client';

import { Container } from '@/lib/wrappers/Container';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-[#F5F5F5] w-full h-[95dvh]">
      <Container size="default" className="pt-5">
        <div className="grid grid-cols-[2fr_1fr] gap-5 border-b-1 border-[#DFDFDF] pt-20 pb-22">
          <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-2">
              <h1 className="font-light tracking-[2%] leading-[40px] text-[1.7rem] w-[85%]">
                Looking for thoughtful design that moves people and grows
                businesses?
              </h1>
              <p className="font-light text-[0.93rem] tracking-[3%] leading-[23px] text-[#626262]">
                Let's create something extraordinary.
              </p>
            </div>
            <div className="cursor-pointer flex items-center gap-1 bg-[#F0F0F0] w-fit px-4 py-2 rounded-full">
              <div>
                <Image
                  src="/icons/inbox.svg"
                  alt="inbox-icon"
                  width={100}
                  height={100}
                  className="w-[90%]"
                />
              </div>
              <p className="font-light text-[0.85rem] tracking-[3%] leading-[23px] text-[#626262]">
                jamesogechi35@gmail.com
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <input
                type="email"
                name=""
                id=""
                placeholder="Email Address"
                className="w-full outline-none border-b-1 border-[#DFDFDF] py-5 placeholder:text-[#AAAAAA] placeholder:font-light
                 placeholder:text-[0.93rem] placeholder:tracking-[3%] placeholder:leading-[23px] font-light text-[0.85rem] tracking-[3%]
                  leading-[23px] text-[#626262]"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Message"
                className="w-full outline-none border-b-1 border-[#DFDFDF] py-5 placeholder:text-[#AAAAAA] placeholder:font-light
                 placeholder:text-[0.93rem] placeholder:tracking-[3%] placeholder:leading-[23px] font-light text-[0.85rem] tracking-[3%]
                  leading-[23px] text-[#626262]"
              />
            </div>
            <motion.button
              className="cursor-pointer flex items-center justify-center gap-1.5 w-[60%] bg-gradient-to-b from-[#555555] to-[#000000] py-3 rounded-full"
              whileHover={{ filter: 'brightness(1.15)' }}
              whileTap={{ scale: 0.95, filter: 'brightness(1.5)' }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 30,
                mass: 0.8,
              }}
            >
              <span>
                <Image
                  src="/icons/paper_plane.svg"
                  alt="inbox-icon"
                  width={100}
                  height={100}
                  className="w-[90%]"
                />
              </span>
              <span className="font-light text-[0.93rem] tracking-[3%] leading-[23px] text-white">
                Send Message
              </span>
            </motion.button>
          </div>
        </div>
        <div className="text-center py-20 font-light text-[0.93rem] tracking-[3%] leading-[23px] text-[#626262]">
          Ella &copy; {year} All rights reserved{' '}
        </div>
      </Container>
    </div>
  );
};

export default Footer;
