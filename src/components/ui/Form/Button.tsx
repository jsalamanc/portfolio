import React from 'react';
import { FormProps } from './Types';
import { cn } from '@/hooks/cn';

export const Button = (props: FormProps.ButtonProps) => {
  const { className, isLoading } = props;

  const styles = {
    button: cn(
      'p-2 outline-none rounded-md transition flex justify-center text-white bg-sky-600 hover:bg-sky-600/75 uppercase',
      className
    ),
  };
  return (
    <button {...{ ...props, className: styles.button }}>
      {isLoading ? (
        <svg
          className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
        >
          <circle
            className='opacity-25'
            cx='12'
            cy='12'
            r='10'
            stroke='currentColor'
            strokeWidth='4'
          />
          <path
            className='opacity-75'
            fill='currentColor'
            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
          />
        </svg>
      ) : (
        <p>enviar</p>
      )}
    </button>
  );
};
