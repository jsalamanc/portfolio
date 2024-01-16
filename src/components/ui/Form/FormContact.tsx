import React from 'react';
import { Label, Input, TextArea, Button } from '.';

export const FormContact = () => {
  return (
    <form
      className='flex flex-col gap-3 border border rounded-md p-5 border-gray-700 bg-gray-800'
      onSubmit={(ev) => {
        ev.preventDefault();
        // eslint-disable-next-line no-console
        console.log('ev', ev.target);
      }}
    >
      <div className='flex flex-col gap-3'>
        <Label htmlFor='name' text='Name' isErrors={false} />
        <Input
          type='text'
          name='name'
          id='name'
          autoComplete='given-name'
          isErrors={false}
        />
      </div>
      <div className='flex flex-col gap-3'>
        <Label htmlFor='email' text='Email' isErrors={false} />
        <Input
          type='text'
          name='email'
          id='email'
          autoComplete='email'
          isErrors={false}
        />
      </div>
      <div className='flex flex-col gap-3'>
        <Label htmlFor='subject' text='Subject' isErrors={false} />
        <Input type='text' name='subject' id='subject' isErrors={false} />
      </div>
      <div className='flex flex-col gap-3'>
        <Label htmlFor='message' text='Message' isErrors={false} />
        <TextArea
          name='message'
          id='message'
          cols={30}
          rows={5}
          isErrors={false}
        />
      </div>
      <Button type='submit' isLoading={false}>
        Enviar
      </Button>
    </form>
  );
};
