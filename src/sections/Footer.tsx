import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
const footerLinks = [
  {
    title: 'Github',
    link: 'https://github.com/priyanshu-bhardwaj',
  },
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/priyanshu-bhardwaj/',
  },
  {
    title: 'Instagram',
    link: 'https://www.instagram.com/priyanshu_bhardwaj/',
  },
  {
    title: 'Twitter',
    link: 'https://twitter.com/priyanshu_bhardwaj',
  },
  {
    title: 'LeetCode',
    link: 'https://leetcode.com/priyanshu_bhardwaj/',
  },
];
export const Footer = () => {
  return (
    <footer className='relative -z-10 overflow-x-clip '>
      <div
        className='absolute h-[600px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30
       [mask-image:radial-gradient(50%_50%_at_bottom_center , black , transparent )] -z-10'
        style={{
          WebkitMaskImage:
            'radial-gradient(50% 50% at bottom center, black, transparent)',
          maskImage:
            'radial-gradient(50% 50% at bottom center, black, transparent)',
        }}
      ></div>
      <div className='container'>
        <div className='border-t border-white/20 py-6 text-sm flex flex-col justify-between md:flex-row items-center gap-8'>
          <div className='text-white/40'>&copy; 2023 Priyanshu Bhardwaj</div>
          <nav className='flex flex-col md:flex-row items-center gap-8'>
            {footerLinks.map((link) => {
              return (
                <a
                  key={link.title}
                  href={link.link}
                  target='_blank'
                  className='inline-flex items-center gap-1.5'
                >
                  <span className='font-semibold'>{link.title}</span>
                  <ArrowUpRightIcon className='size-4' />
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </footer>
  );
};
