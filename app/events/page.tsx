import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Image from "next/image";

export default function Events() {
  return (
    <>
      <PageHeader
        title="Events"
        subtitle="Stay up to date with workshops, meetings, and networking opportunities."
      />

      {/* Main Events Section with Background */}
      <section className="relative py-20 md:py-28">
        <Image
          src="/images/events-instagram-bg.png"
          alt="AMA UTD members at event"
          fill
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-navy-950/80" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>

            <h2 className="mt-6 text-2xl md:text-3xl font-bold text-white tracking-tight">
              Follow Us on Instagram
            </h2>

            <p className="mt-4 text-gray-200 text-lg leading-relaxed">
              See our latest events, workshops, and meetings on Instagram. We post
              regular updates about upcoming opportunities, event recaps, and
              behind-the-scenes content from AMA UTD.
            </p>

            <div className="mt-8">
              <Button
                href="https://www.instagram.com/amautdallas/"
                variant="secondary"
                external
                className="bg-white text-navy-900 border-white hover:bg-gray-100"
              >
                View Events on Instagram
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <Section background="light">
        <h2 className="text-2xl md:text-3xl font-bold text-navy-900 tracking-tight text-center">
          What to Expect
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-navy-900">General Meetings</h3>
              <p className="mt-1 text-gray-600">
                Regular chapter meetings with updates, guest speakers, and
                networking.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-navy-900">Workshops</h3>
              <p className="mt-1 text-gray-600">
                Hands-on sessions covering marketing tools, strategies, and
                professional skills.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-navy-900">Networking Events</h3>
              <p className="mt-1 text-gray-600">
                Connect with industry professionals, alumni, and fellow students.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-navy-900">Company Visits</h3>
              <p className="mt-1 text-gray-600">
                Tours and info sessions at leading companies in the DFW area.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Stay Connected */}
      <Section background="navy">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Never Miss an Event
          </h2>
          <p className="mt-4 text-navy-200 text-lg max-w-xl mx-auto">
            Join our GroupMe to get instant notifications about upcoming events
            and meetings.
          </p>
          <div className="mt-8">
            <Button
              href="https://groupme.com/join_group/109649963/Gmm4r39W"
              variant="secondary"
              external
              className="bg-white text-navy-900 hover:bg-gray-100 border-white"
            >
              Join Our GroupMe
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
