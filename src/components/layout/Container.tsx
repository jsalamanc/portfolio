import React from 'react';
import { Header } from './Header';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer className='p-4 text-center bg-gray-800'>
        <p className='text-semibold text-gray-300'>
          created by @jsalamanc with love to world
        </p>
      </footer>
    </>
  );
};
