'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { cn } from '@/hooks/cn';

export const Header = () => {
  const styles = {
    header: cn(
      'fixed z-10 top-0 left-0 w-full p-[1.5rem]',
      'bg-gray-800 bg-opacity-30 backdrop-blur-xl backdrop-filter'
    ),
  };
  const navList = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Contact', url: '/' },
  ];
  return (
    <header className={styles.header}>
      <div className='m-auto w-[95%] max-w-[82rem] flex justify-between items-center'>
        JS
        <nav>
          <ul className='flex gap-5'>
            {navList.map((nav, index) => (
              <li key={index}>
                <Link
                  className='font-medium transition text-white hover:text-cyan-400'
                  href={nav.url}
                >
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
