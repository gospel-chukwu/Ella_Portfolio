'use client';

import { Container } from '@/lib/wrappers/Container';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-[#F5F5F5] w-full h-[85dvh]">
      <Container size="default" className="pt-5">
        <div className="px-2 flex gap-12 border-b-1 border-[#DFDFDF] pt-20 pb-22">
          <div className="flex flex-col gap-20">
            <div>
              <h1>
                Looking for thoughtful design that moves people and grows
                businesses?
              </h1>
              <p>Let's create something extraordinary.</p>
            </div>
            <div className="cursor-pointer">
              <div></div>
              <p>jamesogechi35@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <input type="email" name="" id="" placeholder="Email Address" />
              <input type="text" name="" id="" placeholder="Message" />
            </div>
            <button className="bg-red-200 cursor-pointer">
              <span></span>
              <span>Send Message</span>
            </button>
          </div>
        </div>
        <div className="text-center pt-22 font-light text-[0.93rem] tracking-[3%] leading-[23px] text-[#626262]">
          Ella &copy; {year} All rights reserved{' '}
        </div>
      </Container>
    </div>
  );
};

export default Footer;
