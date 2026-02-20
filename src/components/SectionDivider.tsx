import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const SectionDivider = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div ref={ref} className="container mx-auto px-6">
      <div
        className="h-px transition-all duration-1000 ease-out"
        style={{
          width: isVisible ? "100%" : "0%",
          background: "linear-gradient(to right, transparent, hsl(38 92% 50% / 0.4), transparent)",
        }}
      />
    </div>
  );
};

export default SectionDivider;
