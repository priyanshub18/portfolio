import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
export const ContactSection = () => {
  return (
    <div className='py-16 pt-12'>
      <div className='container'>
        <div className='flex flex-col items-center justify-center md:flex-row gap-5 bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-10 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0'>
          <div
            className='absolute inset-0 opacity-5 -z-10'
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>

          <div>
            <h2 className='font-serif text-2xl md:text-3xl'>
              Let's create something amazing together
            </h2>
            <p className='text-sm mt-2'>
              Ready to bring your next project to life? Let's connect and
              discuss how I can help you achieve your goals.
            </p>
          </div>
          <div>
            <button className='text-white bg-black rounded-xl px-6 py-2 mt-[6px] h-12 inline-flex items-center justify-center gap-2 w-max-content'>
              <span>Contact Me</span>
              <ArrowUpRightIcon className='size-4' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
