import { useCallback, useRef, useState, useEffect } from "react";

const GRID_TEXT = `DEVELOPER CREATIVE CODE DESIGN BUILD DEPLOY REACT TYPESCRIPT PORTFOLIO FULLSTACK ENGINEER SOFTWARE ARCHITECT JAVASCRIPT NODE CSS HTML API DATABASE CLOUD DEVOPS AGILE SCRUM GIT DOCKER KUBERNETES AWS AZURE DEPLOY CI CD TEST DEBUG SHIP ITERATE INNOVATE CREATE SOLVE THINK LEARN GROW LEAD MENTOR TEACH SHARE CONNECT INSPIRE DEVELOP DESIGN BUILD DEPLOY REACT TYPESCRIPT PORTFOLIO FULLSTACK ENGINEER SOFTWARE ARCHITECT JAVASCRIPT NODE CSS HTML API DATABASE CLOUD DEVOPS AGILE SCRUM GIT DOCKER KUBERNETES AWS AZURE DEPLOY CI CD TEST DEBUG SHIP ITERATE INNOVATE CREATE SOLVE THINK LEARN GROW LEAD MENTOR TEACH SHARE CONNECT INSPIRE`;

interface Props {
  parentRef: React.RefObject<HTMLElement>;
}

const CursorRevealGrid = ({ parentRef }: Props) => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const el = parentRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, [parentRef]);

  const handleMouseLeave = useCallback(() => {
    setMousePos({ x: -1000, y: -1000 });
  }, []);

  useEffect(() => {
    const el = parentRef.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [parentRef, handleMouseMove, handleMouseLeave]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--border) / 0.15) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border) / 0.15) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage: `radial-gradient(circle 300px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle 300px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
        }}
      />
      <div
        className="absolute inset-0 flex flex-wrap content-start gap-0 p-4 font-mono text-[10px] md:text-xs leading-relaxed tracking-[0.3em] uppercase break-all select-none"
        style={{
          color: "hsl(var(--primary) / 0.6)",
          maskImage: `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
          wordSpacing: "0.5em",
          lineHeight: "2.5",
        }}
      >
        {Array(6).fill(GRID_TEXT).join(" ")}
      </div>
    </div>
  );
};

export default CursorRevealGrid;
