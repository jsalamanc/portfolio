'use client';

import { AboutMeProps, SelectedTabProps } from './types';
import { useState } from 'react';
import { cn } from '@/hooks/cn';
import { motion, AnimatePresence } from 'framer-motion';
import { InnerHtml } from '@/components/sections/InnerHtml/InnerHtml';

export const AboutMe = ({ aboutMe = '', extras = [] }: AboutMeProps) => {
  const [selectedTab, setSelectedTab] = useState<SelectedTabProps>(extras[0]);

  const styles = {
    /*
     * styles of section title
     */

    title: cn(
      'capitalize text-3xl font-bold',
      {
        'bg-clip-text text-transparent bg-gradient-to-l  from-[#5A32A3] to-[#D03592]':
          aboutMe,
      },
      {
        'animate-pulse': !aboutMe,
        'w-52	rounded-md p-5 bg-slate-700': !aboutMe,
      }
    ),

    /*
     * styles of description about me
     */

    aboutMe: cn('mt-4', 'text-slate-400', {
      'animate-pulse': !aboutMe,
      'w-full h-[112px]': !aboutMe,
      'rounded-md p-5 bg-slate-700': !aboutMe,
    }),
  };

  return (
    <div className='w-full px-4 py-14 bg-gray-900 transition'>
      <div className='m-auto container flex flex-wrap'>
        <div className='w-full lg:w-[50%]' />
        <div className='w-full lg:w-[50%]'>
          <h1 className={styles.title}>{aboutMe ? 'About Me' : ''}</h1>
          <p className={styles.aboutMe}>{aboutMe}</p>
          <div className='mt-4'>
            <nav>
              <ul className='flex'>
                {extras?.map((item, index) => (
                  <li
                    key={index}
                    className={item === selectedTab ? 'selected' : ''}
                    onClick={() => setSelectedTab(item)}
                  >
                    <div className='p-3 cursor-pointer'>
                      <p
                        className={`${
                          item === selectedTab
                            ? 'text-slate-500'
                            : 'text-slate-400'
                        }`}
                      >
                        {item.label}
                      </p>
                    </div>
                    {item === selectedTab ? (
                      <motion.div
                        className='border border-sky-500'
                        layoutId='underline'
                      />
                    ) : null}
                  </li>
                ))}
              </ul>
            </nav>
            <AnimatePresence mode='wait'>
              <motion.div
                key={selectedTab ? selectedTab.label : 'empty'}
                className='p-3'
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {selectedTab ? (
                  <InnerHtml
                    className='text-slate-400'
                    data={selectedTab.items || ''}
                  />
                ) : (
                  ''
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
