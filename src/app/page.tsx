import { Hero } from "@/components/pages/home/Hero";
import { Projects } from "@/components/pages/home/Projects";

export default function Home() {
  return (
    <main className="">
      <button className="absolute" />
      <Hero />
      <div className="p-4 bg-[url(/assets/grafdient.jpg)] bg-no-repeat bg-cover">
        <Projects />
      </div>
    </main>
  );
}
