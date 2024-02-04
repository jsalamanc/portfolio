import Link from 'next/link';

type IconSocialNetworkProps = {
  nameSocialNetwork?: 'instagram' | 'github' | 'linkedin';
  url?: string;
};
export const IconSocialNetwork = ({
  nameSocialNetwork,
  url,
}: IconSocialNetworkProps) => {
  return (
    <Link href={`${url}`} target='_blank' className='flex text-xl'>
      <i className={`bi bi-${nameSocialNetwork} text-cyan-200`} />
    </Link>
  );
};
