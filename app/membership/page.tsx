import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Image from "next/image";

const membershipBenefits = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Career Development",
    description: "Access exclusive workshops, resume reviews, interview prep sessions, and career resources.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Professional Network",
    description: "Connect with industry professionals, AMA alumni, and fellow marketing students across DFW.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Hands-On Experience",
    description: "Work on real marketing projects and campaigns to build your portfolio.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Exclusive Events",
    description: "Priority access to networking events, company visits, and industry conferences.",
  },
];

export default function Membership() {
  return (
    <>
      <PageHeader
        title="Membership"
        subtitle="Join AMA UTD and unlock your marketing potential."
      />

      {/* Benefits Section with Background */}
      <section className="relative py-20 md:py-28">
        <Image
          src="/images/membership-benefits-bg.png"
          alt="AMA UTD members"
          fill
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-navy-950/85" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight text-center">
              Member Benefits
            </h2>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {membershipBenefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white text-navy-900 flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 text-gray-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Membership Card */}
      <Section background="light">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 tracking-tight text-center">
            Become a Member
          </h2>
          <p className="mt-4 text-gray-600 text-lg text-center">
            Join our community of marketing professionals.
          </p>

          <div className="mt-10">
            {/* Semester Membership */}
            <div className="bg-white rounded-lg border-2 border-navy-900 p-8 shadow-lg">
              <h3 className="text-xl font-bold text-navy-900">Semester Membership</h3>
              <div className="mt-4">
                <span className="text-5xl font-bold text-navy-900">$15</span>
                <span className="text-gray-500 ml-2">/ semester</span>
              </div>
              <p className="mt-4 text-gray-600">
                Full access to all AMA UTD events, workshops, and resources for the semester.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Access to all general meetings</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Workshop participation</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Networking events</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Member-only resources</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Resume book inclusion</span>
                </li>
              </ul>
              <div className="mt-8">
                <Button
                  href="https://www.zeffy.com/en-US/ticketing/utd-american-marketing-associations-memberships"
                  variant="primary"
                  external
                  className="w-full justify-center"
                >
                  Become a Member
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 tracking-tight text-center">
            Frequently Asked Questions
          </h2>

          <div className="mt-10 space-y-6">
            <div>
              <h3 className="font-semibold text-navy-900">Who can join AMA UTD?</h3>
              <p className="mt-2 text-gray-600">
                Any UT Dallas student interested in marketing is welcome to join, regardless of major or year. We value diverse perspectives and backgrounds.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-navy-900">When can I join?</h3>
              <p className="mt-2 text-gray-600">
                You can join at any point during the semester. We recommend joining early to get the most out of your membership.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-navy-900">What is the time commitment?</h3>
              <p className="mt-2 text-gray-600">
                We hold general meetings twice a month with additional optional events and workshops. Members can participate as much as their schedule allows.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-navy-900">Can I get a refund?</h3>
              <p className="mt-2 text-gray-600">
                Membership dues are non-refundable, but they support all of our events, resources, and programming throughout the term.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
