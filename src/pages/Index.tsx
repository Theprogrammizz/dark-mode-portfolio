import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingParticles from "@/components/FloatingParticles";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <FloatingParticles />
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <ExperienceSection />
      <SectionDivider />
      <ContactSection />
    </div>
  );
};

export default Index;
