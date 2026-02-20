import { experiences, totalExperience } from "@/data/portfolio";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <p className="section-label mb-4">... /Experience ...</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-16">Work</h2>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-[160px_1fr_1fr] gap-4 py-5 border-b border-border items-baseline"
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

        <div className="text-right mt-8">
          <p className="text-sm text-muted-foreground">Work experience</p>
          <p className="text-lg font-bold font-mono gradient-text inline-block">{totalExperience}</p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
