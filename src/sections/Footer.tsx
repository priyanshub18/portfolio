import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

const footerLinks = [
  { title: 'Github', link: 'https://github.com/priyanshub18' },
  { title: 'LinkedIn', link: 'https://www.linkedin.com/in/priyanshub18/' },
  {
    title: 'Instagram',
    link: 'https://www.instagram.com/priyanshu.bhardwaj18/',
  },
  { title: 'Twitter', link: 'https://twitter.com/priyanshubh18' },
  { title: 'LeetCode', link: 'https://leetcode.com/priyanshub18/' },
  { title: 'Mail', link: 'mailto:priyanshubh898@gmail.com' },
];

export const Footer = () => {
  return (
    <footer className='relative overflow-x-clip'>
      {/* Mask Layer (separate from content) */}
      <div
        className='mask-layer absolute h-[600px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 pointer-events-none'
        style={{
          WebkitMaskImage:
            'radial-gradient(50% 50% at bottom center, black, transparent)',
          maskImage:
            'radial-gradient(50% 50% at bottom center, black, transparent)',
        }}
      ></div>

      <div className='container relative z-10'>
        <div className='border-t border-white/20 py-6 text-sm flex flex-col justify-between md:flex-row items-center gap-8'>
          <div className='text-white/40'>&copy; 2023 Priyanshu Bhardwaj</div>

          <nav className='flex flex-col md:flex-row items-center gap-8'>
            {footerLinks.map((link) => (
              <a
                key={link.title}
                href={link.link}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-1.5 pointer-events-auto'
              >
                <span className='font-semibold'>{link.title}</span>
                <ArrowUpRightIcon className='size-4' />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
