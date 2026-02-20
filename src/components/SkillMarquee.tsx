import { skillCategories } from "@/data/portfolio";

const allSkills = skillCategories.flatMap((cat) =>
  cat.skills.split(" / ").map((skill) => skill.trim())
);

const half = Math.ceil(allSkills.length / 2);
const row1 = allSkills.slice(0, half);
const row2 = allSkills.slice(half);

const MarqueeRow = ({ skills, reverse = false }: { skills: string[]; reverse?: boolean }) => {
  const doubled = [...skills, ...skills];
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={`flex gap-3 py-2 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {doubled.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="whitespace-nowrap rounded-full border border-border bg-card px-4 py-1.5 text-xs font-mono text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const SkillMarquee = () => {
  return (
    <div className="space-y-3">
      <MarqueeRow skills={row1} />
      <MarqueeRow skills={row2} reverse />
    </div>
  );
};

export default SkillMarquee;
