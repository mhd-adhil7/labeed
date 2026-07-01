import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import About from "@/components/About";
import ProfessionalExperience from "@/components/ProfessionalExperience";
import Services from "@/components/Services";
import ResearchInnovation from "@/components/ResearchInnovation";
import AwardsAchievements from "@/components/AwardsAchievements";
import Publications from "@/components/Publications";
import Presentations from "@/components/Presentations";
import Certificates from "@/components/Certificates";
import DentalTips from "@/components/DentalTips";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
