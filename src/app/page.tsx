import { Hero } from "@/components/home/Hero";
import { Fork } from "@/components/home/Fork";
import { WhyBoth } from "@/components/home/WhyBoth";
import { Services } from "@/components/home/Services";
import { SolutionsStrip } from "@/components/home/SolutionsStrip";
import { TechStack } from "@/components/home/TechStack";
import { Work } from "@/components/home/Work";
import { Process } from "@/components/home/Process";
import { PackagesTeaser } from "@/components/home/PackagesTeaser";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Fork />
      <WhyBoth />
      <Services />
      <SolutionsStrip />
      <TechStack />
      <Work />
      <Process />
      <PackagesTeaser />
      <FinalCTA />
    </>
  );
}
