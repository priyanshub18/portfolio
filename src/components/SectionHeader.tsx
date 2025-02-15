import React from 'react';

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <>
      <div className='flex flex-col items-center '>
        <p className='uppercase text-transparent font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text'>
          {eyebrow}
        </p>
      </div>
      <h2 className='font-serif text-3xl text-center mt-6 md:text-5xl '>
        {title}
      </h2>

      <p className='text-center md:text-lg text-white/60 mt-4 max-w-md mx-auto'>
        {description}
      </p>
    </>
  );
}

export default SectionHeader;
