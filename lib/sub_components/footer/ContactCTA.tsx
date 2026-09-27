'use client';

import Image from 'next/image';

const ContactCTA = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-2">
        <h1 className="font-light tracking-[2%] leading-[40px] text-[1.7rem] w-[85%]">
          Looking for thoughtful design that moves people and grows businesses?
        </h1>
        <p className="font-light text-[0.93rem] tracking-[3%] leading-[23px] text-[#626262]">
          Let's create something extraordinary.
        </p>
      </div>
      <div className="flex items-center gap-1 bg-[#F0F0F0] w-fit px-4 py-2 rounded-full">
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
  );
};

export default ContactCTA;
