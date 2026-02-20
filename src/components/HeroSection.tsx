import { personalInfo, socialLinks } from "@/data/portfolio";
import { Github, Linkedin, Twitter, Mail, ArrowRight, Download } from "lucide-react";
import heroVisual from "@/assets/hero-visual.png";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="w-4 h-4" />,
  linkedin: <Linkedin className="w-4 h-4" />,
  twitter: <Twitter className="w-4 h-4" />,
  mail: <Mail className="w-4 h-4" />,
};

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

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Hero visual */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] opacity-60 pointer-events-none animate-float">
        <img src={heroVisual} alt="" className="w-full h-full object-contain" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-8 animate-fade-in">
            <span className="gradient-text">{personalInfo.role.split(" ")[0]}</span>
            <br />
            {personalInfo.role.split(" ").slice(1).join(" ")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed opacity-0 animate-fade-in [animation-delay:200ms]">
            {renderMarkdown(personalInfo.tagline)}
          </p>
          <div className="flex flex-wrap gap-3 mb-12 opacity-0 animate-fade-in [animation-delay:400ms]">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card text-sm font-medium hover:bg-secondary transition-colors"
            >
              Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Download className="w-4 h-4" /> Download CV
            </a>
          </div>
          <div className="flex flex-wrap gap-3 opacity-0 animate-fade-in [animation-delay:600ms]">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              >
                {iconMap[link.icon]} {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
