import SmoothScroll from "@/components/SmoothScroll";
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
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
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
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
