import { Hero } from "@/components/home/Hero";
import { CurrentlyStrip } from "@/components/home/CurrentlyStrip";
import { WorkIndex } from "@/components/home/WorkIndex";
import { ResearchStrip } from "@/components/home/ResearchStrip";
import { ExperienceStrip } from "@/components/home/ExperienceStrip";
import { PublicationsStrip } from "@/components/home/PublicationsStrip";
import { Trajectory } from "@/components/home/Trajectory";
import { AboutTeaser } from "@/components/home/AboutTeaser";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CurrentlyStrip />
      <WorkIndex />
      <ResearchStrip />
      <ExperienceStrip />
      <PublicationsStrip />
      <Trajectory />
      <AboutTeaser />
    </>
  );
}
