'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CaseStudyFooterButtonProps } from '@/lib/types/ui/casestudy.types';

const CaseStudyFooterButton = ({ project }: CaseStudyFooterButtonProps) => {
  return (
    <motion.a
      href={project.visitLink.url}
      target="_blank"
      rel="noopener noreferrer"
      className="my-14 block flex justify-center items-center gap-2.5 font-light text-[0.95rem] tracking-[2%] leading-[16px] border border-[#F5F5F5] py-4.5 rounded-[22px] hover:bg-[#F5F5F5]"
      whileTap={{ scale: 0.95 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 30,
        mass: 0.8,
      }}
    >
      <span>{project.visitLink.label}</span>
      <span className="w-3 h-3 shrink-0">
        <Image
          src={'/icons/tilted_arrow.svg'}
          alt={'arrow'}
          width={100}
          height={100}
          className="object-contain w-full h-full"
        />
      </span>
    </motion.a>
  );
};

export default CaseStudyFooterButton;
