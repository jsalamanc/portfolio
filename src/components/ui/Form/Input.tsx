import React from 'react';
import { FormProps } from './Types';
import { cn } from '@/hooks/cn';

export const Input = (props: FormProps.InputProps) => {
  const { className, isErrors } = props;

  const styles = {
    input: cn(
      'p-2 border border-gray-500 outline-none rounded-md bg-gray-900',
      { 'text-slate-400': !isErrors },
      { 'text-red-300': isErrors },
      className
    ),
  };
  return <input {...{ ...props, className: styles.input }} />;
};
