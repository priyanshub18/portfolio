import StarIcon from '@/assets/icons/star.svg';
const words = [
  'Performant',
  'Efficient',
  'Scalable',
  'Reliable',
  'Secure',
  'Innovative',
  'Agile',
  'Adaptable',
  'Customizable',
  'Collaborative',
  'Competitive',
  'Dynamic',
  'Enterprise',
  'Experienced',
  'Focused',
  'Innovative',
  'Integrated',
];
export const TapeSection = () => {
  return (
    <div className='py-16 lg:py-24 overflow-x-clip'>
      <div className='bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -mx-1'>
        <div
          className='flex'
          style={{
            WebkitMaskImage:
              'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0))',
            maskImage:
              'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0))',
          }}
        >
          <div className='flex gap-4 flex-none py-3'>
            {words.map((word) => {
              return (
                <div key={word} className='inline-flex gap-4 items-center'>
                  <span className='text-gray-900 uppercase font-extrabold text-sm'>
                    {word}
                  </span>
                  <StarIcon className='size-6 text-gray-900 -rotate-12' />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
