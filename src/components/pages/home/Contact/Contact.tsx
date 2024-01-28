import React from 'react';
import { Label, Input, TextArea, Button } from '@/components/ui/Form';

export const Contact = () => {
  return (
    <div id='contact' className='relative'>
      <div className='h-[35rem] bg-gray-900'>
        <svg
          width='1512'
          height='982'
          viewBox='0 0 1512 982'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='w-full h-full dark:hidden'
        >
          <g opacity='0.2'>
            <g filter='url(#filter0_f_537_13843)'>
              <ellipse
                rx='277.881'
                ry='400.498'
                transform='matrix(-0.66575 -0.746175 0.969996 -0.243122 558.481 783.977)'
                fill='#FF9900'
              />
            </g>
            <g filter='url(#filter1_f_537_13843)'>
              <ellipse
                rx='135.79'
                ry='331.184'
                transform='matrix(-0.585617 -0.810588 0.98002 -0.198899 1106.09 519.942)'
                fill='#00ADF5'
              />
            </g>
            <g filter='url(#filter2_f_537_13843)'>
              <ellipse
                cx='762.041'
                cy='558.733'
                rx='253.371'
                ry='478.041'
                transform='rotate(-90 762.041 558.733)'
                fill='#5CCFFF'
              />
            </g>
            <g filter='url(#filter3_f_537_13843)'>
              <ellipse
                rx='274.302'
                ry='339.775'
                transform='matrix(0.815725 -0.57844 0.929703 0.36831 1000.38 769.055)'
                fill='#FF61C0'
              />
            </g>
            <g filter='url(#filter4_f_537_13843)'>
              <ellipse
                cx='389'
                cy='563'
                rx='100'
                ry='263'
                transform='rotate(-90 389 563)'
                fill='#8C4CFF'
                className='mix-blend-overlay'
              />
            </g>
          </g>
          <defs>
            <filter
              id='filter0_f_537_13843'
              x='-185.49'
              y='241.263'
              width='1487.94'
              height='1085.43'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='156.794'
                result='effect1_foregroundBlur_537_13843'
              />
            </filter>
            <filter
              id='filter1_f_537_13843'
              x='458.255'
              y='78.0589'
              width='1295.67'
              height='883.767'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='156.794'
                result='effect1_foregroundBlur_537_13843'
              />
            </filter>
            <filter
              id='filter2_f_537_13843'
              x='-29.5886'
              y='-8.22626'
              width='1583.26'
              height='1133.92'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='156.794'
                result='effect1_foregroundBlur_537_13843'
              />
            </filter>
            <filter
              id='filter3_f_537_13843'
              x='299.651'
              y='253.379'
              width='1401.45'
              height='1031.35'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='156.794'
                result='effect1_foregroundBlur_537_13843'
              />
            </filter>
            <filter
              id='filter4_f_537_13843'
              x='-187.589'
              y='149.411'
              width='1153.18'
              height='827.177'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='156.794'
                result='effect1_foregroundBlur_537_13843'
              />
            </filter>
          </defs>
        </svg>
        <svg
          width='698.79px'
          height='1401.92px'
          viewBox='0 0 1440 900'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='w-full h-full hidden dark:block'
        >
          <g opacity='0.3'>
            <g filter='url(#filter0_f_109_6828)'>
              <ellipse
                rx='110.795'
                ry='391.47'
                transform='matrix(-0.66575 -0.746175 0.969996 -0.243122 472.525 621.546)'
                fill='#69CAAA'
              />
            </g>
            <g filter='url(#filter1_f_109_6828)'>
              <ellipse
                rx='135.79'
                ry='331.184'
                transform='matrix(-0.585617 -0.810588 0.98002 -0.198899 1016.87 358.246)'
                fill='#3DBFF5'
              />
            </g>
            <g filter='url(#filter2_f_109_6828)'>
              <ellipse
                cx='753.862'
                cy='487.387'
                rx='253.371'
                ry='478.041'
                transform='rotate(-90 753.862 487.387)'
                fill='#0A5B7D'
              />
            </g>
            <g filter='url(#filter3_f_109_6828)'>
              <ellipse
                rx='116.578'
                ry='287.686'
                transform='matrix(0.815725 -0.57844 0.929703 0.36831 1016.73 571.575)'
                fill='#EC6CB9'
              />
            </g>
            <g filter='url(#filter4_f_109_6828)'>
              <ellipse
                cx='528.544'
                cy='314.17'
                rx='213.563'
                ry='154.272'
                transform='rotate(-90 528.544 314.17)'
                fill='#044289'
              />
            </g>
          </g>
          <defs>
            <filter
              id='filter0_f_109_6828'
              x='-227.958'
              y='181.888'
              width='1400.97'
              height='879.316'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='156.794'
                result='effect1_foregroundBlur_109_6828'
              />
            </filter>
            <filter
              id='filter1_f_109_6828'
              x='369.039'
              y='-83.6378'
              width='1295.67'
              height='883.767'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='156.794'
                result='effect1_foregroundBlur_109_6828'
              />
            </filter>
            <filter
              id='filter2_f_109_6828'
              x='-37.7668'
              y='-79.5727'
              width='1583.26'
              height='1133.92'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='156.794'
                result='effect1_foregroundBlur_109_6828'
              />
            </filter>
            <filter
              id='filter3_f_109_6828'
              x='419.203'
              y='132.376'
              width='1195.06'
              height='878.4'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='156.794'
                result='effect1_foregroundBlur_109_6828'
              />
            </filter>
            <filter
              id='filter4_f_109_6828'
              x='60.6829'
              y='-212.982'
              width='935.721'
              height='1054.3'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='156.794'
                result='effect1_foregroundBlur_109_6828'
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className='absolute top-0 w-full h-full'>
        <div className='py-4 m-auto w-full max-w-[83rem] flex flex-wrap items-center'>
          <div className='w-full h-full md:w-[50%]'>
            <h1 className='text-white uppercase'>contacto</h1>
            <span>troijgrijgiortjwgorijgw orgijtoi joewrgij</span>
          </div>
          <div className='w-full md:w-[50%] flex items-center justify-center h-full'>
            <div className='w-[97%]'>
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
                  <Input
                    type='text'
                    name='subject'
                    id='subject'
                    isErrors={false}
                  />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
