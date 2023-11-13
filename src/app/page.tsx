'use client';

import { IndexProps } from '@/lib/types/routes/Index.types';
import { Container } from '@/components/layout/Container';
import { Hero } from '@/components/sections/Hero/Hero';
import { AboutMe } from '@/components/pages/home/AboutMe/AboutMe';
import { Projects } from '@/components/pages/home/Projects/Projects';
import { Contact } from '@/components/pages/home/Contact/Contact';
import { useFetch } from '@/hooks/swr';

export default function Home() {
  const { data, isLoading, error } = useFetch<IndexProps>('/api');
  console.log(data);
  if (error) {
    return <div>Error</div>;
  }
  return (
    <Container>
      <Hero
        firstTitle={data?.data?.metadata?.hero?.first_title}
        secondTitle={data?.data?.metadata?.hero?.second_title}
        thirdTitle={data?.data?.metadata?.hero?.third_title}
        description={data?.data?.metadata?.hero?.description}
      />
      <AboutMe
        aboutMe={data?.data?.metadata?.about_me?.description}
        extras={data?.data?.metadata?.about_me?.extras || []}
      />
      <Projects />
      <Contact />
    </Container>
  );
}
