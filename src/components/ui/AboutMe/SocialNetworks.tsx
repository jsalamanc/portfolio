import React from 'react';
import { IconSocialNetwork } from './IconSocialNetwork';

type SocialNetworksProps = {
  githubUrl?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
};
export const SocialNetworks = ({
  githubUrl,
  instagramUrl,
  linkedinUrl,
}: SocialNetworksProps) => {
  return (
    <div className='px-4 py-6 bg-cyan-800'>
      <div className='m-auto w-full max-w-[83rem] flex items-center justify-between flex-wrap'>
        <div className='flex items-center gap-[1rem] w-full justify-center sm:w-auto'>
          <p className='text-cyan-200 uppercase text-center sm:text-left'>
            ¿Quieres saber más sobre mí?
          </p>
        </div>
        <div className='flex gap-2 w-full justify-center sm:w-auto'>
          {instagramUrl && (
            <IconSocialNetwork
              nameSocialNetwork='instagram'
              url={instagramUrl}
            />
          )}
          {githubUrl && (
            <IconSocialNetwork nameSocialNetwork='github' url={githubUrl} />
          )}
          {linkedinUrl && (
            <IconSocialNetwork nameSocialNetwork='linkedin' url={linkedinUrl} />
          )}
        </div>
      </div>
    </div>
  );
};
