'use client';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';

export const ContactSection = () => {
  return (
    <div className='py-16 pt-12' id='contact'>
      <div className='container'>
        <div className='flex flex-col items-center justify-between md:flex-row gap-5 bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-10 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0'>
          <div
            className='absolute inset-0 opacity-5 -z-10'
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>

          <div className='max-w-2xl'>
            <h2 className='font-serif text-2xl md:text-3xl'>
              Let's create something amazing together
            </h2>
            <p className='text-sm mt-2'>
              Ready to bring your next project to life? Let's connect and
              discuss how I can help you achieve your goals.
            </p>
          </div>
          <div>
            <a href='mailto:priyanshubh898@gmail.com'>
              <button
                className='text-white bg-black rounded-xl px-6 py-2 mt-[6px] h-12 inline-flex items-center justify-center gap-2'
                onClick={() => {
                  console.log('clicked');
                }}
              >
                <span className='hidden md:block lg:hidden'>Contact</span>
                <span className='block md:hidden lg:block'>Contact Me</span>
                <ArrowUpRightIcon className='size-4' />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
