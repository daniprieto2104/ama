import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "outline";
  external?: boolean;
  className?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-all duration-200 rounded";

  const variants = {
    primary:
      "bg-navy-900 text-white hover:bg-navy-950 active:bg-navy-950",
    secondary:
      "bg-white text-navy-900 border-2 border-navy-900 hover:bg-navy-50 active:bg-navy-100",
    outline:
      "bg-transparent text-navy-900 border border-navy-900 hover:bg-navy-900 hover:text-white active:bg-navy-950",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedStyles}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={combinedStyles}>
      {children}
    </Link>
  );
}
