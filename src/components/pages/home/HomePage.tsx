'use client';

import { IndexProps } from '@/lib/types/routes/Index.types';
import { fetcher, useGetData } from '@/lib/api';
import { Hero } from '@/components/sections/Hero/Hero';
import { AboutMe } from './AboutMe/AboutMe';
import { Blog } from '@/components/pages/home/Blog/Blog';
// import { Projects } from '@/components/pages/home/Projects/Projects';
import { Contact } from './Contact/Contact';

const fetchData = async () => {
  const res = await fetcher.get('/api');
  return res.data;
};
export const HomePage = () => {
  const { data, status, isLoading, isError } = useGetData<IndexProps>(
    ['home'],
    fetchData
  );
  if (isError) {
    return <div>Error</div>;
  }
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
