// import darkSaasLandingPage from '@/assets/images/dark-saas-landing-page.png';
import group1 from '@/assets/images/group-1.png';
import group2 from '@/assets/images/group-2.png';
import group3 from '@/assets/images/group-3.png';

import Image from 'next/image';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
const portfolioProjects = [
  {
    company: 'Trip Genie',
    year: '2025',
    title: 'AI Travel Planning',
    results: [
      { title: 'Generated personalized itineraries with 85% accuracy' },
      { title: 'Reduced trip planning time by 70%' },
      { title: 'Increased user engagement by 50%' },
    ],
    link: '#',
    image: group3,
  },
  {
    company: 'Code Morph',
    year: '2025',
    title: 'WireFrame To Code',
    results: [
      { title: 'Converted AI wireframes to code with 90% accuracy' },
      { title: 'Reduced development time by 60%' },
      { title: 'Improved UI consistency across projects by 45%' },
    ],
    link: '#',
    image: group1,
  },

  {
    company: 'Self Work',
    year: '2025',
    title: 'Portfolio',
    results: [
      { title: 'Developed AI-powered apps with 90% efficiency' },
      { title: 'Optimized web solutions, improving performance by 50%' },
      { title: 'Enhanced user engagement through AI-driven automation' },
    ],
    link: '#',
    image: group2,
  },
];

export const ProjectsSection = () => {
  return (
    <section className='pb-16' id='projects'>
      <div className='container '>
        <div className='flex flex-col items-center '>
          <p className='uppercase text-transparent font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text'>
            Real-World Results
          </p>
        </div>
        <h2 className='font-serif text-3xl text-center mt-6 md:text-5xl '>
          Featured Projects
        </h2>

        <p className='text-center md:text-lg text-white/60 mt-4 max-w-md mx-auto'>
          See how I transformed concepts into engaging digital experiences
        </p>

        <div className='flex flex-col mt-10 gap-16 md:mt-20 '>
          {portfolioProjects.map((project, index) => {
            return (
              <div
                key={project.title}
                className="bg-gray-800 rounded-3xl relative z-0 after:z-10 overflow-hidden after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 pl-8 pr-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none sticky shadow-md"
                style={{
                  top: `calc(64px + ${index * 45}px)`,
                }}
              >
                <div
                  className='absolute inset-0 -z-10 opacity-5'
                  style={{
                    backgroundImage: `url(${grainImage.src})`,
                  }}
                ></div>
                {/* after:bg-red-500  opacity-80 hover:opacity-100*/}
                <div className='lg:grid lg:grid-cols-2 lg:gap-16'>
                  <div className='lg:pb-16'>
                    <div className='bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent inline-flex gap-2 font-bold uppercase tracking-widest text-sm'>
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className='font-serif text-2xl mt-2 md:text-4xl md:mt-5'>
                      {project.title}
                    </h3>
                    <hr className='border-t-2 border-white/20 mt-4  md:mt-5' />
                    <ul className='flex flex-col gap-4 mt-4 md:mt-5'>
                      {project.results.map((result) => {
                        return (
                          <li
                            key={result.title}
                            className='flex gap-2 text-sm text-white/75 md:text-base'
                          >
                            <CheckCircleIcon className='size-5 md:size-6' />
                            <span>{result.title}</span>
                          </li>
                        );
                      })}
                    </ul>
                    <a href={project.link}>
                      <button className='bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-[8px] mt-8 md:w-auto px-8'>
                        <span>Visit Live Site</span>
                        <ArrowUpRightIcon className='size-4' />
                      </button>
                    </a>
                  </div>
                  <div className='relative'>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      className='mt-8 -mb-4  md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none'
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
