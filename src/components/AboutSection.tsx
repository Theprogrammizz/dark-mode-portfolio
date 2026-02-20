import { personalInfo } from "@/data/portfolio";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import SkillMarquee from "./SkillMarquee";

const renderMarkdown = (text: string) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-bold text-foreground">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
};

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24" ref={ref}>
      <div className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <p className="section-label mb-4">... /About me ...</p>
        <p className="text-lg text-muted-foreground max-w-2xl mb-16 leading-relaxed">
          {renderMarkdown(personalInfo.aboutText)}
        </p>

        <SkillMarquee />
      </div>
    </section>
  );
};

export default AboutSection;
