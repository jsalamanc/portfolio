'use client';

import { HeroProps } from './types';
import type { Engine } from 'tsparticles-engine';
import { useCallback } from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
import { optionParticles } from './particleOptions';
import Image from 'next/image';

export const Hero = ({
  firstTitle,
  secondTitle,
  thirdTitle,
  description,
}: HeroProps) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async () => {}, []);

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
          {!firstTitle && !secondTitle && !thirdTitle && !description ? null : (
            <div className='relative z-10 sm:w-3/4 md:w-6/12'>
              {firstTitle && (
                <div className='mb-4 border border-sky-200 w-fit p-2 bg-gradient-to-r from-sky-800 to-sky-600 font-bold text-white select-none'>
                  {firstTitle}
                </div>
              )}
              <div>
                {secondTitle && (
                  <h1 className='font-bold text-4xl text-white'>
                    {secondTitle}
                  </h1>
                )}
                {thirdTitle && (
                  <span className='font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-400'>
                    {thirdTitle}
                  </span>
                )}
              </div>
              {description && (
                <p className='mt-3 text-slate-400'>{description}</p>
              )}
            </div>
          )}
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
