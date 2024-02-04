'use client';

import { usePathname } from 'next/navigation';
import { IndexProps } from '@/lib/types/routes/Index.types';
import { fetchData } from './controllers';
import { useGetData } from '@/lib/api';
import { Hero } from '@/components/sections/Hero/Hero';
import { AboutMe } from './AboutMe/AboutMe';
import { SocialNetworks } from '@/components/ui/AboutMe/SocialNetworks';
import { Blog } from '@/components/pages/home/Blog/Blog';
// import { Projects } from '@/components/pages/home/Projects/Projects';
import { Contact } from './Contact/Contact';

export const HomePage = () => {
  const router = usePathname();
  const { data, status } = useGetData<IndexProps>(
    [router],
    router ? fetchData : () => ({})
  );
  if (status === 'error') <p>error...</p>;

  return (
    <>
      <Hero
        firstTitle={data?.metadata?.hero?.first_title}
        secondTitle={data?.metadata?.hero?.second_title}
        thirdTitle={data?.metadata?.hero?.third_title}
        description={data?.metadata?.hero?.description}
      />
      <AboutMe
        firstSection={{
          image: data?.metadata?.about_me?.first_image,
          title: data?.metadata?.about_me?.first_title,
          description: data?.metadata?.about_me?.first_description,
        }}
        secondSection={{
          image: data?.metadata?.about_me?.second_image,
          title: data?.metadata?.about_me?.second_title,
          description: data?.metadata?.about_me?.second_description,
          skills: data?.metadata?.about_me?.list_of_skills,
        }}
      />
      <SocialNetworks
        instagramUrl={
          data?.socialNetworks?.metadata?.social_network?.instagram || ''
        }
        githubUrl={data?.socialNetworks?.metadata?.social_network?.github || ''}
        linkedinUrl={
          data?.socialNetworks?.metadata?.social_network?.linkedin || ''
        }
      />
      <Blog
        featuredPost={data?.metadata?.blog?.featured_publication}
        latestPosts={
          data?.blogEntries?.objects && data?.blogEntries?.objects?.length <= 4
            ? data?.blogEntries?.objects
            : data?.blogEntries?.objects?.slice(0, 4)
        }
      />
      {/* <Projects /> */}
      <Contact />
    </>
  );
};
