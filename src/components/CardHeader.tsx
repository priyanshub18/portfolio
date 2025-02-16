import React from 'react';
import StarIcon from '@/assets/icons/star.svg';
import { twMerge } from 'tailwind-merge';
function CardHeader({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div>
      <div
        className={twMerge('flex p-6 flex-col md:py-8 md:px-10 ', className)}
      >
        <div className='inline-flex gap-2'>
          <StarIcon className='size-9 text-emerald-300' />
          <h3 className='font-serif text-3xl'>{title}</h3>
        </div>
        <p className='text-[13px] text-white/60 mt-2'>{description}</p>
      </div>
    </div>
  );
}

export default CardHeader;
