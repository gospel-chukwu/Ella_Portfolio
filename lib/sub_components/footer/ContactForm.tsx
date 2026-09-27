'use client';

import { useContactForm } from '@/lib/hooks/useContactForm';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ContactForm = () => {
  const { email, setEmail, message, setMessage, isSubmitting, sendMessage } =
    useContactForm();

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled={isSubmitting}
          placeholder="Email Address"
          className="w-full outline-none border-b-1 border-[#DFDFDF] py-5 placeholder:text-[#AAAAAA] placeholder:font-light
                 placeholder:text-[0.93rem] placeholder:tracking-[3%] placeholder:leading-[23px] font-light text-[0.85rem] tracking-[3%]
                  leading-[23px] text-[#626262]"
        />
        <textarea
          placeholder="Message"
          value={message}
          disabled={isSubmitting}
          onChange={e => setMessage(e.target.value)}
          rows={1}
          className="resize-none w-full outline-none border-b-1 border-[#DFDFDF] py-5 placeholder:text-[#AAAAAA] placeholder:font-light
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
        disabled={isSubmitting}
        onClick={sendMessage}
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
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </span>
      </motion.button>
    </div>
  );
};

export default ContactForm;
