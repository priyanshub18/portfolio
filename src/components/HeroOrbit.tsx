import React, { PropsWithChildren } from 'react';
import StarIcon from '@/assets/icons/star.svg';
import { twMerge } from 'tailwind-merge';

function HeroOrbit({
  children,
  size,
  rotate,
  shouldOrbit = true,
  orbitDuration = 10,
  spinDuration = 10,
  shouldSpin = true,
}: PropsWithChildren<{
  size: number;
  rotate: number;
  shouldOrbit?: boolean;
  spinDuration?: number;
  orbitDuration?: number;
  shouldSpin?: boolean;
}>) {
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20'>
      <div
        className={twMerge(shouldOrbit == true && 'animate-spin')}
        style={{
          animationDuration: `${orbitDuration}s`,
        }}
      >
        <div
          className=' flex items-start justify-start'
          style={{
            height: `${size}px`,
            width: `${size}px`,
            transform: `rotate(${rotate}deg)`,
          }}
        >
          <div
            className={twMerge(shouldSpin == true && 'animate-spin')}
            style={{
              animationDuration: `${spinDuration}s`,
            }}
          >
            <div
              className='inline-flex '
              style={{
                transform: `rotarotate(${rotate * -1}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroOrbit;
