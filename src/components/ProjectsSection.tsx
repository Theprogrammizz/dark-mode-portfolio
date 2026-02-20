import { projects } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <p className="section-label mb-4">... /Projects ...</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-16">Selected Work</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <a
              key={project.title}
              href={project.link}
              className={`card-glass p-6 flex flex-col justify-between hover-lift group transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${i * 120 + 200}ms` }}
            >
              <div>
                <h3 className="text-lg font-bold mb-3">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-muted-foreground border border-border rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
