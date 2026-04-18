import { getAllProjects, getMediumArticles } from "@/lib/projects";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Writing from "@/components/Writing";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Recommendations from "@/components/Recommendations";
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";

export default async function Home() {
  const projects = getAllProjects();
  const articles = await getMediumArticles();

  return (
    <>
      <Hero />
      <Work projects={projects} />
      <Writing articles={articles} />
      <About />
      <Skills />
      <Recommendations />
      <Interests />
      <Contact />
    </>
  );
}