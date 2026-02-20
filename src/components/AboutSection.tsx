import { personalInfo, skillCategories } from "@/data/portfolio";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className={`card-glass p-6 hover-lift transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
            >
              <h3 className="text-sm font-bold mb-3">{cat.title}</h3>
              <p className="text-sm text-muted-foreground font-mono leading-relaxed">
                {cat.skills}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
