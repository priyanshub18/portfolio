'use client';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import StarIcon from '@/assets/icons/star.svg';
import bookImage from '@/assets/images/book-cover.png';
import Image from 'next/image';
import JavascriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import GithubIcon from '@/assets/icons/github.svg';
import TechIcon from '@/components/TechIcon';
import mapImage from '@/assets/images/map2.png';
import smileMemoji from '@/assets/images/memoji-smile.png';
import CardHeader from '@/components/CardHeader';
import ToolItems from '@/components/ToolItems';
import { motion } from 'framer-motion';
const toolboxItems = [
  {
    title: 'Javascript',
    icontype: JavascriptIcon,
  },
  {
    title: 'React',
    icontype: ReactIcon,
  },
  {
    title: 'Chrome',
    icontype: ChromeIcon,
  },

  {
    title: 'GitHub',
    icontype: GithubIcon,
  },
  {
    title: 'HTML5',
    icontype: HTMLIcon,
  },
  {
    title: 'CSS3',
    icontype: CssIcon,
  },
];

const hobbies = [
  {
    title: 'Traveling',
    emoji: '✈️',
    left: '2.5%',
    top: '5%',
  },
  { left: '50%', top: '5%', title: 'Reading', emoji: '🔖' },
  { left: '73%', top: '23%', title: 'Photography', emoji: '📸' },
  { left: '35%', top: '40%', title: 'Gaming', emoji: '🎮' },
  {
    title: 'Movies',
    emoji: '🎬',
    left: '70%',
    top: '45%',
  },
  { left: '5%', top: '65%', title: 'Journaling', emoji: '📓' },
  {
    title: 'Music',
    emoji: '🎵',
    left: '45%',
    top: '70%',
  },
];
export const AboutSection = () => {
  return (
    <div className='py-20 lg:py-28'>
      <div className='container '>
        <SectionHeader
          eyebrow='About Me'
          title='A Glimpse into My Word'
          description='Learn more about who I am , what I do and what inspires me.'
        />

        <div className='mt-20 flex flex-col gap-8'>
          <div className='grid md:grid-cols-5 md:gap-8 sm:grid-cols-1 gap-8 lg:grid-cols-3'>
            <Card className='h-[320px] md:col-span-2 lg:col-span-1'>
              <CardHeader
                title='My Reads'
                description='Explore the books shaping my perspectives.'
              />
              <div className='w-40 mx-auto mt-2 md:mt-0'>
                <Image
                  src={bookImage}
                  alt='Book Cover'
                  width={500}
                  height={500}
                />
              </div>
            </Card>

            <Card className='h-[320px] md:col-span-3 lg:col-span-2'>
              <CardHeader
                // className='px-6 pt-6'
                title='My Toolbox'
                description='Explore the technologies and tools I use to create innovative solutions.'
              />

              <ToolItems
                toolboxItems={toolboxItems}
                className='mt-6'
                itemsWrapperclassName='animate-move-left [animation-duration:15s]'
              />
              <ToolItems
                toolboxItems={toolboxItems}
                className='mt-6 '
                itemsWrapperclassName='-translate-x-1/2 animate-move-right [animation-duration:20s]
              '
              />
            </Card>
          </div>
          <div className='flex md:grid flex-col md:grid-cols-5 gap-8 lg:grid-cols-3 '>
            <Card className='h-[320px] flex flex-col md:col-span-3 w-[100] lg:col-span-2'>
              <CardHeader
                title='Beyond the Code'
                description='Explore my interest and hobbies beyond the code.'
                // className=''
              />
              <div className='relative flex-1 '>
                {hobbies.map((item) => {
                  return (
                    <motion.div
                      key={item.title}
                      className='inline-flex gap-2 px-6  bg-gradient-to-r items-center from-emerald-300 to-sky-400 rounded-full py-1.5 absolute'
                      style={{
                        left: item.left,
                        top: item.top,
                      }}
                      drag
                    >
                      <span className='font-medium text-gray-950'>
                        {item.title}
                      </span>
                      <span>{item.emoji}</span>
                    </motion.div>
                  );
                })}
              </div>
            </Card>

            <Card className='h-[320px] p-0 relative md:col-span-2 lg:col-span-1'>
              <Image
                src={mapImage}
                alt='Map Cover'
                width={600}
                height={600}
                className='h-full w-full object-cover object-left-top'
              />
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[""] after:absolute after:inset-0  after:outline-2 after:outline after:-outline-offset-2 after:rounded-full after:outline-white after:pointer-events-none'>
                <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]'></div>
                <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10'></div>
                <Image
                  src={smileMemoji}
                  alt='Smile Memoji'
                  width={500}
                  height={500}
                  className='size-20'
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
