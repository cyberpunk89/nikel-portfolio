import { getAllProjects, getMediumArticles } from "@/lib/projects";
import HeroV2 from "@/components/HeroV2";
import WorkV2 from "@/components/WorkV2";
import WritingV2 from "@/components/WritingV2";
import AboutV2 from "@/components/AboutV2";
import SkillsV2 from "@/components/SkillsV2";
import RecommendationsV2 from "@/components/RecommendationsV2";
import InterestsV2 from "@/components/InterestsV2";
import ContactV2 from "@/components/ContactV2";

export default async function Home() {
  const projects = getAllProjects();
  const articles = await getMediumArticles();

  return (
    <>
      <HeroV2 />
      <WorkV2 projects={projects} />
      <WritingV2 articles={articles} />
      <AboutV2 />
      <SkillsV2 />
      <RecommendationsV2 />
      <InterestsV2 />
      <ContactV2 />
    </>
  );
}
