'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSchema } from './validator';
import { cn } from '@/hooks/cn';
import { Label, Button } from '..';
import { submit } from './controllers';

export const FormContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  const styles = {
    input: cn(
      'input-primary',
      { 'text-slate-400': !errors?.email?.message },
      { 'text-red-500 border-red-500': errors?.email?.message }
    ),
  };
  return (
    <form
      className='flex flex-col gap-3 border border rounded-md p-5 border-gray-700 bg-gray-800'
      onSubmit={handleSubmit(submit)}
    >
      <div className='flex flex-col gap-3'>
        <Label htmlFor='name' text='Name' isErrors={false} />
        <input
          className='input-primary'
          type='text'
          id='name'
          autoComplete='given-name'
          {...register('name')}
        />
      </div>
      <div className='flex flex-col gap-3'>
        <Label
          htmlFor='email'
          text='Email'
          isErrors={errors?.email?.message ? true : false}
        />
        <input
          className={`input-primary ${styles.input}`}
          type='text'
          id='email'
          autoComplete='email'
          {...register('email')}
        />
        {errors?.email && (
          <span className='text-red-500'>{`${errors.email.message}`}</span>
        )}
      </div>
      <div className='flex flex-col gap-3'>
        <Label htmlFor='subject' text='Subject' isErrors={false} />
        <input
          className='input-primary'
          type='text'
          id='subject'
          {...register('subject')}
        />
      </div>
      <div className='flex flex-col gap-3'>
        <Label htmlFor='message' text='Message' isErrors={false} />
        <textarea
          className='input-primary'
          id='message'
          cols={30}
          rows={5}
          {...register('message')}
        />
      </div>
      <Button type='submit' isLoading={isSubmitting}>
        Enviar
      </Button>
    </form>
  );
};
