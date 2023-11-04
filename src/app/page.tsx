import { Hero } from '@/components/pages/home/Hero/Hero';
import { AboutMe } from '@/components/pages/home/AboutMe/AboutMe';
import { Projects } from '@/components/pages/home/Projects/Projects';
import { Contact } from '@/components/pages/home/Contact/Contact';

export default function Home() {
  return (
    <main className=''>
      <button className='absolute' />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </main>
  );
}
