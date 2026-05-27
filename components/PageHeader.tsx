interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="pt-32 pb-16 md:pt-40 md:pb-20 bg-navy-900">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p
            className="mt-4 text-lg md:text-xl text-navy-200 max-w-2xl animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
