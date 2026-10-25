'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ReturnButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className=" mb-10 md:mb-15 lg:mb-12 block text-[#11111199] hover:text-neutral-900 transition-colors font-normal tracking-[3%] leading-[16px] flex items-start lg:items-center lg:justify-center gap-2.5 cursor-pointer"
    >
      <Image
        src={'/icons/curved_arrow_back.svg'}
        alt="curved_arrow_back"
        width={10}
        height={10}
        className="w-3.5 h-3.5"
      />
      <p className='block'>Back</p>
    </button>
  );
};

export default ReturnButton;
