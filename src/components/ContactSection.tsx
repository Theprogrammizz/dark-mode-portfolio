import { personalInfo, socialLinks } from "@/data/portfolio";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="w-5 h-5" />,
  linkedin: <Linkedin className="w-5 h-5" />,
  twitter: <Twitter className="w-5 h-5" />,
  mail: <Mail className="w-5 h-5" />,
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="section-label mb-4">... /Contact ...</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's work together</h2>
        <p className="text-muted-foreground mb-10 max-w-md mx-auto">
          Have a project in mind? I'd love to hear about it. Drop me a message and let's create something amazing.
        </p>
        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity mb-12"
        >
          <Mail className="w-4 h-4" /> Get in touch
        </a>
        <div className="flex justify-center gap-4 mt-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
            >
              {iconMap[link.icon]}
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-16">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
