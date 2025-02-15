import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import StarIcon from '@/assets/icons/star.svg';
import bookImage from '@/assets/images/book-cover.png';
import Image from 'next/image';
import { title } from 'process';


const toolboxItems=[
  {
    title : "Javascript",
    icon : "",

  },
  {
    title : "React",
    icon : "",
  },
  {
    title : "Next.js",
    icon : "",
  },  
  {
    title : "Tailwind",
    icon : "",
  },
   {
    title : "Node.js",
    icon : ""
  },
  {
    title : "Express.js",
    icon : ""
  },
  {
    title : "MongoDB",
    icon : ""
  }
  
]
export const AboutSection = () => {
  return (
    <div className='pb-96'>
      <SectionHeader
        eyebrow='About Me'
        title='A Glimpse into My Word'
        description='Learn more about who I am , what I do and what inspires me.'
      />

      <div>
        <Card>
          <div>
            <StarIcon className='size-10 text-emerald-300' />
            <h3>My Reads</h3>
            <p>
              Explore the books shaping my perspective on life, creativity and
              innovation.
            </p>
            <Image src={bookImage} alt='Book Cover' width={500} height={500} />
          </div>
        </Card>

        <Card>
          <div>
            <StarIcon className='size-10 text-emerald-300' />
            <h3>My Toolbox</h3>
            <p>
              Explore the technologies and tools I use to create innovative
              solutions.
            </p>
            
          </div>
          <div>

          </div>
        </Card>

        <Card>
          <div>
            <StarIcon className='size-10 text-emerald-300' />
            <h3>My Reads</h3>
            <p>
              Explore the books shaping my perspective on life, creativity and
              innovation.
            </p>
            <Image src={bookImage} alt='Book Cover' width={500} height={500} />
          </div>
        </Card>

        <Card>
          <div>
            <StarIcon className='size-10 text-emerald-300' />
            <h3>My Reads</h3>
            <p>
              Explore the books shaping my perspective on life, creativity and
              innovation.
            </p>
            <Image src={bookImage} alt='Book Cover' width={500} height={500} />
          </div>
        </Card>
      </div>
    </div>
  );
};
