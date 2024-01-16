'use client';

import { AboutMeProps } from './types';
import { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const AboutMe = ({ firstSection, secondSection }: AboutMeProps) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const ContainerAboutMe = styled.div`
    display: inline-grid;
    gap: 1rem;
    margin: auto;
    width: 97%;
    max-width: 83rem;

    @media (min-width: 700px) {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(5, 11rem);
    }
    & .firstImage:nth-child(1) {
      @media (max-width: 700px) {
        width: 100%;
        height: 0.5rem;
        height: 10rem;
      }
      @media (min-width: 700px) {
        grid-column: 1/4;
        grid-row: 1/4;
      }
    }
    & .containerFirstInfo:nth-child(2) {
      @media (max-width: 700px) {
        width: 100%;
      }
      @media (min-width: 700px) {
        grid-column: 4/6;
        grid-row: 1/3;
      }
    }
    & .secondImage:nth-child(3) {
      @media (max-width: 700px) {
        width: 100%;
        height: 10rem;
      }
      @media (min-width: 700px) {
        grid-column: 4/6;
        grid-row: 3/6;
      }
    }
    & div:nth-child(4) {
      @media (max-width: 700px) {
        width: 100%;
      }
      @media (min-width: 700px) {
        grid-column: 1/4;
        grid-row: 4/6;
      }
    }
  `;

  return (
    <>
      <div className='p-6 w-full bg-gray-900 transition'>
        <ContainerAboutMe>
          <div
            className='brightness-75 bg-cover bg-no-repeat bg-center rounded-lg firstImage'
            style={{
              backgroundImage: `url(${firstSection?.image?.imgix_url})`,
            }}
            data-aos='fade-right'
          />
          <div
            className='flex flex-col items-center justify-center p-6 containerFirstInfo'
            data-aos='fade-left'
          >
            <p className='text-white text-[1.2rem] md:text-[1.5rem]'>
              {firstSection?.title}
            </p>
            <p className='mt-4 text-slate-400 text-[0.9rem] md:text-[1rem]'>
              {firstSection?.description}
            </p>
          </div>
          <div
            className='bg-cover bg-no-repeat bg-center rounded-lg secondImage'
            style={{
              backgroundImage: `url(${secondSection?.image?.imgix_url})`,
            }}
            data-aos='fade-left'
          />
          <div
            className='flex items-center gap-[2rem] flex-wrap lg:flex-nowrap'
            data-aos='fade-right'
          >
            <div className='w-full lg:w-[40%]'>
              <p className='text-white text-[1.2rem] md:text-[1.5rem]'>
                {secondSection?.title}
              </p>
              <p className='mt-4 text-slate-400 text-[0.9rem] md:text-[1rem]'>
                {secondSection?.description}
              </p>
            </div>
            <div className='flex flex-col gap-[1rem] w-full lg:w-[60%]'>
              {secondSection?.skills?.map((skill) => (
                <div>
                  <div className='bg-stone-700 rounded-full h-[0.5rem !important]'>
                    <div
                      className='w-full h-[0.3rem] rounded-full'
                      role='progressbar'
                      style={{
                        width: skill?.percentage,
                        backgroundColor: '#087ec4',
                      }}
                    />
                  </div>
                  <div className='mt-2 text-slate-400 text-[0.8rem] uppercase'>
                    {skill?.skill}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ContainerAboutMe>
      </div>
      <div className='px-4 py-6 bg-cyan-800'>
        <div className='m-auto w-full max-w-[83rem] flex items-center'>
          <div className='flex items-center gap-[1rem]'>
            <i className='bi bi-person-square text-cyan-200 text-[1.2rem]' />
            <p className='text-cyan-200 uppercase'>
              ¿Quieres saber más sobre mí?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
