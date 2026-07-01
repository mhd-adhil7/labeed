import dynamic from "next/dynamic";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { SectionSkeleton } from "@/components/ui/SkeletonLoader";

// Dynamically import below-the-fold components
const ProfessionalExperience = dynamic(() => import("@/components/ProfessionalExperience"), {
  loading: () => <SectionSkeleton cardCount={2} />,
});
const Services = dynamic(() => import("@/components/Services"), {
  loading: () => <SectionSkeleton cardCount={3} />,
});
const ResearchInnovation = dynamic(() => import("@/components/ResearchInnovation"), {
  loading: () => <SectionSkeleton cardCount={1} />,
});
const AwardsAchievements = dynamic(() => import("@/components/AwardsAchievements"), {
  loading: () => <SectionSkeleton cardCount={4} />,
});
const Publications = dynamic(() => import("@/components/Publications"), {
  loading: () => <SectionSkeleton cardCount={2} />,
});
const Presentations = dynamic(() => import("@/components/Presentations"), {
  loading: () => <SectionSkeleton cardCount={2} />,
});
const Certificates = dynamic(() => import("@/components/Certificates"), {
  loading: () => <SectionSkeleton cardCount={4} />,
});
const DentalTips = dynamic(() => import("@/components/DentalTips"), {
  loading: () => <SectionSkeleton cardCount={3} />,
});
const FAQ = dynamic(() => import("@/components/FAQ"), {
  loading: () => <SectionSkeleton cardCount={3} />,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <SectionSkeleton cardCount={2} />,
});

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Trust />
        <About />
        <ProfessionalExperience />
        <Services />
        <ResearchInnovation />
        <AwardsAchievements />
        <Publications />
        <Presentations />
        <Certificates />
        <DentalTips />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
