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
      'font-bold text-white select-none',
      {
        'w-fit border border-sky-200': firstTitle,
        'bg-gradient-to-r from-sky-800 to-sky-600': firstTitle,
      },
      {
        'animate-pulse': !firstTitle,
        'w-52	rounded-md p-5 bg-slate-700': !firstTitle,
      }
    ),

    secondTitle: cn('font-bold text-4xl text-white', {
      'animate-pulse': !secondTitle,
      'mb-3 rounded-md w-[23rem] p-5 bg-slate-700': !secondTitle,
    }),

    thirdTitle: cn(
      'font-bold text-5xl text-transparent',
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
  };

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
        <div className='m-auto container'>
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
        <div className='absolute bottom-0 m-auto left-0 right-0 rounded-md p-4 w-11/12 bg-cyan-800 flex items-center justify-evenly flex-wrap gap-4'>
          <Image
            src='/assets/nextjs.svg'
            alt=''
            width={100}
            height={100}
            title='nextjs'
          />
          <Image
            src='/assets/nodejs.svg'
            alt=''
            width={100}
            height={100}
            title='nodejs'
          />
          <Image
            src='/assets/sass.svg'
            alt=''
            width={90}
            height={90}
            title='sass'
          />
          <Image
            src='/assets/tailwindcss.svg'
            alt=''
            width={170}
            height={200}
            title='tailwinds'
          />
        </div>
      </section>
    </>
  );
};
