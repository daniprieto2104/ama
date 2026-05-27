interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "light" | "navy";
  id?: string;
}

export default function Section({
  children,
  className = "",
  background = "white",
  id,
}: SectionProps) {
  const backgrounds = {
    white: "bg-white",
    light: "bg-gray-50",
    navy: "bg-navy-900 text-white",
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${backgrounds[background]} ${className}`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">{children}</div>
    </section>
  );
}
