import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
export const HeroSection = () => {
  return (
    <div className='py-32 md:py-48 lg:py-60 relative z-0'>
      <div
        className='absolute inset-0 -z-30 opacity-5'
        style={{ backgroundImage: `url(${grainImage})` }}
      ></div>
      <div className='size-[650px] hero-ring'></div>
      {/* <div className='absolute inset-0 size-[800px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5 '></div>
      <div className='absolute inset-0 size-[1000px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5 '></div>
      <div className='absolute inset-0 size-[1200px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5 '></div> */}
      <div className='size-[950px] hero-ring'></div>
      <div className='size-[1250px] hero-ring'></div>
      <div className='size-[1550px] hero-ring'></div>
      <div className='size-[1850px] hero-ring'></div>
      {/* <div className='size-[1650px] hero-ring'></div> */}

      <div className='container'>
        <div className='flex flex-col items-center '>
          <Image
            src={memojiImage}
            alt='Memoji'
            width={500}
            height={500}
            className='size-[100px]'
          />
          <div className='bg-gray-950 border border-gray-800 px-4 py-2 inline-flex items-center gap-4 rounded-lg '>
            <div className='bg-green-500 size-2.5 rounded-full'></div>
            <div className='text-sm font-medium'>
              Available for New Projects
            </div>
          </div>
        </div>
        <div className='max-w-lg mx-auto'>
          <h1 className='font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl'>
            Building Exceptional LLM Wrapper and Backend Applications
          </h1>
          <p className='mt-4 text-center text-white/70 md:text-lg'>
            I specialise in transforming design into functional ,
            high-performing web applications. Love to bring ideas to life.
          </p>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
          <button className='inline-flex items-center gap-2 border border-white/15 px-6  h-12 rounded-xl '>
            <span className='font-semibold'>Explore my Work</span>
            <ArrowDown className='size-4' />
          </button>
          <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
            <span>👋</span>
            <span className='font-semibold'>Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
