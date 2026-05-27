import Image from "next/image";
import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center">
        {/* Background Image */}
        <Image
          src="/images/hero-bg.png"
          alt="Dallas skyline at night"
          fill
          className="object-cover object-[center_30%]"
          priority
          quality={90}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-navy-950/70" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight leading-tight animate-fade-in">
            American Marketing Association
            <br />
            <span className="text-navy-200">Chapter at UTD</span>
          </h1>

          <p
            className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.15s" }}
          >
            Build your marketing skills, grow your network, and create real
            impact at UT Dallas.
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              href="https://docs.google.com/forms/d/e/1FAIpQLSfs-Qmn2RK-YcuLylISg1phgKDNRpE6QcHkMFSs4Y-Y-t8WOA/closedform"
              variant="primary"
              external
            >
              Join AMA
            </Button>
            <Button
              href="/about"
              variant="secondary"
              className="bg-white text-navy-900 border-white hover:bg-gray-100"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>
    </>
  );
}
