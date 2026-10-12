'use client';
import { SubstackPost } from '@/lib/types/utils/substack.types';
import Image from 'next/image';

const SubstackCard = ({ post }: { post: SubstackPost }) => {
  return (
    <a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#FAFAFA] px-4 py-5 flex gap-5 items-center w-full rounded-[24px] hover:bg-gray-200 transition-colors duration-300 ease-in-out" 
    >
      <div className="bg-gray-300 w-36 h-23 shrink-0 rounded-[20px] overflow-hidden flex justify-center items-center">
        <Image
          src={post.image || ''}
          alt={post.title}
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-1 min-w-0 justify-between items-center gap-3">
        <div className="flex flex-col gap-3 min-w-0">
          <h2 className="text-[#181818] text-[0.95rem] font-normal tracking-[2%] leading-[18px] line-clamp-2">
            {post.title}
          </h2>
          <p className="text-[#777777] text-[0.7rem] font-light leading-[18px] tracking-[2%] line-clamp-2">
            {post.description}
          </p>
        </div>
        <div className="w-3 h-3 shrink-0 flex justify-center self-start mt-1">
          <Image
            src={'/icons/tilted_arrow.svg'}
            alt={'arrow'}
            width={100}
            height={100}
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </a>
  );
};

export default SubstackCard;
