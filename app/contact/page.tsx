import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";

const contactMethods = [
  {
    name: "Email",
    description: "Reach us directly for inquiries",
    value: "amautdallas2@gmail.com",
    href: "mailto:amautdallas2@gmail.com",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    description: "Follow us for updates and events",
    value: "@amautdallas",
    href: "https://www.instagram.com/amautdallas/",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "GroupMe",
    description: "Join our community chat",
    value: "Join Group",
    href: "https://groupme.com/join_group/115335007/fAWnZ44B",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    description: "Connect professionally",
    value: "AMA UTD",
    href: "https://www.linkedin.com/company/amautdallas/?trk=public_profile_topcard-current-company",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with the AMA UTD team."
      />

      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {contactMethods.map((method) => (
              <a
                key={method.name}
                href={method.href}
                target={method.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  method.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="flex items-center gap-5 p-5 rounded-lg border border-gray-200 hover:border-navy-300 hover:bg-navy-50/50 transition-all duration-200 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-navy-900 text-white flex items-center justify-center group-hover:bg-navy-800 transition-colors">
                  {method.icon}
                </div>

                <div className="flex-grow">
                  <h3 className="font-semibold text-navy-900">{method.name}</h3>
                  <p className="text-sm text-gray-500">{method.description}</p>
                </div>

                <div className="text-right">
                  <span className="text-navy-900 font-medium group-hover:underline">
                    {method.value}
                  </span>
                </div>

                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-navy-900 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* Location Section */}
      <Section background="light">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 tracking-tight">
            Find Us on Campus
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            AMA UTD is based at the University of Texas at Dallas. Our meetings
            and events are held at various locations across campus. Follow us on
            Instagram for specific event locations.
          </p>

          <div className="mt-6 text-gray-500">
            <p className="font-medium text-navy-900">
              The University of Texas at Dallas
            </p>
            <p>800 W Campbell Rd</p>
            <p>Richardson, TX 75080</p>
          </div>
        </div>
      </Section>
    </>
  );
}
