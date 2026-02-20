import { experiences, totalExperience } from "@/data/portfolio";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import AnimatedCounter from "./AnimatedCounter";

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="py-24" ref={ref}>
      <div className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <p className="section-label mb-4">... /Experience ...</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-16">Work</h2>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 md:grid-cols-[160px_1fr_1fr] gap-4 py-5 border-b border-border items-baseline transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
            >
              <div>
                <p className="text-sm font-mono font-bold">{exp.period}</p>
                <p className="text-xs text-muted-foreground">{exp.duration}</p>
              </div>
              <p className="text-sm font-medium">{exp.company}</p>
              <p className="text-sm text-muted-foreground font-mono">{exp.role}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border">
          <AnimatedCounter end={5} suffix="+" label="Years Experience" />
          <AnimatedCounter end={10} suffix="+" label="Projects Completed" />
          <AnimatedCounter end={3} suffix="+" label="Companies" />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
