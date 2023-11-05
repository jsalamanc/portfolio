'use client';

import { fetcher } from '@/hooks/fetcher';
import { useEffect } from 'react';
import { Hero } from '@/components/sections/Hero/Hero';
import { AboutMe } from '@/components/pages/home/AboutMe/AboutMe';
import { Projects } from '@/components/pages/home/Projects/Projects';
import { Contact } from '@/components/pages/home/Contact/Contact';

export default function Home() {
  const res = fetcher('/api/');
  useEffect(() => {
    console.log(res);
  }, [res]);

  return (
    <main className=''>
      <button className='absolute' />
      <Hero
        firstTitle={'Welcome to my web'}
        secondTitle={'Hi! Im Jsalamanc'}
        thirdTitle={'FullStack Developer'}
        description={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nemo debitis, eaque est at libero reprehenderit eligendi unde dolor dicta eum sapiente modi recusandae blanditiis dignissimos iusto, similique error sed.'
        }
      />
      <AboutMe />
      <Projects />
      <Contact />
    </main>
  );
}
