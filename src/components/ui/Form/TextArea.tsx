import React from 'react';
import { cn } from '@/hooks/cn';
import { FormProps } from './Types';

export const TextArea = (props: FormProps.TextAreaProps) => {
  const { className, isErrors } = props;

  const styles = {
    textarea: cn(
      'p-2 border border-gray-500 outline-none rounded-md bg-gray-900 resize-none',
      { 'text-slate-400': !isErrors },
      { 'text-red-300': isErrors },
      className
    ),
  };
  return <textarea {...{ ...props, className: styles.textarea }} />;
};
