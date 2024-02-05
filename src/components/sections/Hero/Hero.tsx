'use client';

import { HeroProps } from './types';
import type { Engine } from 'tsparticles-engine';
import { useCallback } from 'react';
import { loadFull } from 'tsparticles';
import { cn } from '@/hooks/cn';
import Particles from 'react-tsparticles';
import { optionParticles } from './particleOptions';
import { InnerHtml } from '@/components/sections/InnerHtml/InnerHtml';
import Image from 'next/image';

export const Hero = ({
  firstTitle,
  secondTitle,
  thirdTitle,
  description,
}: HeroProps) => {
  /*
   * initialize the tsparticles component
   */

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded: () => Promise<void> = useCallback(async () => {}, []);

  /*
   *  styles of sections are determined by the following properties of the component
   */

  const styles = {
    firstTitle: cn(
      'mb-4 p-2',
      'font-bold text-white',
      {
        'w-fit rounded-md border-2 border-sky-200': firstTitle,
      },
      {
        'animate-pulse': !firstTitle,
        'w-52	rounded-md p-5 bg-slate-700': !firstTitle,
      }
    ),

    secondTitle: cn('font-bold text-[1.5rem]  md:text-4xl text-white', {
      'animate-pulse': !secondTitle,
      'mb-3 rounded-md w-[23rem] p-5 bg-slate-700': !secondTitle,
    }),

    thirdTitle: cn(
      'font-bold text-[1.8rem] md:text-5xl text-transparent',
      {
        'bg-clip-text bg-gradient-to-r from-teal-400 to-sky-400': thirdTitle,
      },
      {
        'animate-pulse': !thirdTitle,
        'w-[85%] md:w-[33rem]': !thirdTitle,
        'rounded-md p-6 bg-slate-700': !thirdTitle,
      }
    ),

    description: cn('mt-3 text-slate-400', {
      'animate-pulse': !description,
      'w-full h-[112px]': !description,
      'rounded-md p-5 bg-slate-700': !description,
    }),

    stack: cn(
      'absolute left-0 right-0 bottom-0',
      'm-auto rounded-md w-11/12 max-w-[83rem] p-4 bg-cyan-800',
      'flex items-center justify-evenly flex-wrap gap-4'
    ),
  };
  const dataImgs = [
    {
      src: '/assets/nextjs.svg',
      with: 100,
      height: 100,
      title: 'nextjs',
    },
    {
      src: '/assets/nodejs.svg',
      with: 100,
      height: 100,
      title: 'nodejs',
    },
    {
      src: '/assets/sass.svg',
      with: 90,
      height: 90,
      title: 'sass',
    },
    {
      src: '/assets/tailwindcss.svg',
      with: 170,
      height: 200,
      title: 'tailwind css',
    },
  ];
  return (
    <>
      <section
        className='relative w-full h-screen bg-gray-900 bg-[url(/assets/pattern-hero.svg)] min-h-screen flex items-center'
        style={{ backgroundColor: 'hsl(198 86% 5%/1)', contain: 'content' }}
      >
        <Particles
          className='absolute top-0 bottom-0'
          init={particlesInit}
          loaded={particlesLoaded}
          options={optionParticles}
        />
        <div className='m-auto w-[95%] max-w-[82rem]'>
          <div className='relative z-10 sm:w-3/4 md:w-6/12'>
            <div className={styles.firstTitle}>{firstTitle}</div>
            <div>
              <h1 className={styles.secondTitle}>{secondTitle}</h1>
              <p className={styles.thirdTitle}>{thirdTitle}</p>
            </div>
            <InnerHtml
              className={styles.description}
              data={description || ''}
            />
          </div>
        </div>
        <div className={styles.stack}>
          {dataImgs?.map((img) => (
            <Image
              key={img.title}
              src={img.src}
              alt=''
              width={img.with}
              height={img.height}
              title={img.title}
            />
          ))}
        </div>
      </section>
    </>
  );
};
