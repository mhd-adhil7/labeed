import dynamic from "next/dynamic";
import SmoothScroll from "@/components/SmoothScroll";
import Hero from "@/components/Hero";
import LazySection from "@/components/ui/LazySection";
import { SectionSkeleton } from "@/components/ui/SkeletonLoader";

// Dynamically import client widgets and below-the-fold content to maximize mobile rendering speeds
const CustomCursor = dynamic(() => import("@/components/CustomCursor"));
const Navbar = dynamic(() => import("@/components/Navbar"));

const Trust = dynamic(() => import("@/components/Trust"), {
  loading: () => <SectionSkeleton cardCount={2} />,
});
const About = dynamic(() => import("@/components/About"), {
  loading: () => <SectionSkeleton cardCount={1} />,
});
const ProfessionalExperience = dynamic(() => import("@/components/ProfessionalExperience"), {
  loading: () => <SectionSkeleton cardCount={2} />,
});
const Services = dynamic(() => import("@/components/Services"), {
  loading: () => <SectionSkeleton cardCount={3} />,
});
const BeforeAfterGallery = dynamic(() => import("@/components/BeforeAfterGallery"), {
  loading: () => <SectionSkeleton cardCount={1} />,
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
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* Viewport lazy-load boundaries for below-the-fold sections */}
        <LazySection fallback={<SectionSkeleton cardCount={2} />}>
          <Trust />
        </LazySection>
        
        <LazySection fallback={<SectionSkeleton cardCount={1} />}>
          <About />
        </LazySection>
        
        <LazySection fallback={<SectionSkeleton cardCount={2} />}>
          <ProfessionalExperience />
        </LazySection>
        
        <LazySection fallback={<SectionSkeleton cardCount={3} />}>
          <Services />
        </LazySection>
        
        <LazySection fallback={<SectionSkeleton cardCount={1} />}>
          <BeforeAfterGallery />
        </LazySection>
        
        <LazySection fallback={<SectionSkeleton cardCount={1} />}>
          <ResearchInnovation />
        </LazySection>
        
        <LazySection fallback={<SectionSkeleton cardCount={4} />}>
          <AwardsAchievements />
        </LazySection>
        
        <LazySection fallback={<SectionSkeleton cardCount={2} />}>
          <Publications />
        </LazySection>
        
        <LazySection fallback={<SectionSkeleton cardCount={2} />}>
          <Presentations />
        </LazySection>
        
        <LazySection fallback={<SectionSkeleton cardCount={4} />}>
          <Certificates />
        </LazySection>
        
        <LazySection fallback={<SectionSkeleton cardCount={3} />}>
          <DentalTips />
        </LazySection>
        
        <LazySection fallback={<SectionSkeleton cardCount={3} />}>
          <FAQ />
        </LazySection>
        
        <LazySection fallback={<SectionSkeleton cardCount={2} />}>
          <Contact />
        </LazySection>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
