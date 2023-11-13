import React from 'react';
import { Header } from './Header';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
