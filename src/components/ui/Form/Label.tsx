import React from 'react';
import { FormProps } from './Types';
import { cn } from '@/hooks/cn';

export const Label = (props: FormProps.LabelProps) => {
  const { text, className, isErrors } = props;

  const styles = {
    label: cn(
      { 'text-slate-400': !isErrors },
      { 'text-red-500': isErrors },
      className
    ),
  };
  return <label {...{ ...props, className: styles.label }}>{text}</label>;
};
