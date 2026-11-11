import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Image from "next/image";

const sponsorshipTiers = [
  {
    name: "Gold",
    featured: false,
    price: "$350",
    description: "Essential visibility and engagement with our marketing community.",
    benefits: [
      "Host general meeting or workshop",
      "Share job opportunities",
      "Company recognition on our channels",
    ],
  },
  {
    name: "Platinum",
    featured: true,
    price: "$650",
    description: "Enhanced access to talent and expanded engagement opportunities.",
    benefits: [
      "Host general meeting or workshop",
      "Share job opportunities",
      "Company recognition on our channels",
      "Access to member resume book",
      "Invitation to host office site visit",
    ],
  },
  {
    name: "Diamond",
    featured: false,
    price: "$1,000",
    description: "Maximum visibility with premium promotional and engagement benefits.",
    benefits: [
      "Host general meeting or workshop",
      "Share job opportunities",
      "Company recognition on our channels",
      "Access to member resume book",
      "Invitation to host office site visit",
      "Spotlight promotional campaign on social",
      "Co-branded marketing challenge",
      "Featured company profile & message across channels",
    ],
  },
];

export default function Sponsorships() {
  return (
    <>
      <PageHeader
        title="Sponsorships"
        subtitle="Partner with AMA UTD to connect with top marketing talent."
      />

      {/* Introduction with Background */}
      <section className="relative py-20 md:py-28">
        <Image
          src="/images/sponsorship-partner-bg.png"
          alt="AMA UTD members"
          fill
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-navy-950/85" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Why Partner With Us?
            </h2>
            <p className="mt-6 text-gray-200 text-lg leading-relaxed">
              AMA UTD connects your organization with driven, talented marketing students at one of Texas&apos;s leading universities. Our sponsorship packages offer meaningful ways to build brand awareness, recruit top talent, and support the next generation of marketing professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <Section background="light">
        <h2 className="text-2xl md:text-3xl font-bold text-navy-900 tracking-tight text-center">
          Sponsorship Packages
        </h2>
        <p className="mt-4 text-gray-600 text-lg text-center max-w-2xl mx-auto">
          Choose the partnership level that aligns with your recruitment and branding goals.
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {sponsorshipTiers.map((tier, index) => (
            <div
              key={index}
              className={`rounded-lg p-8 ${
                tier.featured
                  ? "bg-navy-900 text-white ring-4 ring-orange-500 ring-offset-4"
                  : "bg-white border border-gray-200"
              }`}
            >
              <h3
                className={`text-xl font-bold ${
                  tier.featured ? "text-white" : "text-navy-900"
                }`}
              >
                {tier.name}
              </h3>
              <div className="mt-3">
                <span className={`text-3xl font-bold ${tier.featured ? "text-white" : "text-navy-900"}`}>
                  {tier.price}
                </span>
              </div>
              <p
                className={`mt-3 text-sm ${
                  tier.featured ? "text-navy-200" : "text-gray-600"
                }`}
              >
                {tier.description}
              </p>

              <ul className="mt-6 space-y-3">
                {tier.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        tier.featured ? "text-green-400" : "text-green-600"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span
                      className={`text-sm ${
                        tier.featured ? "text-navy-100" : "text-gray-700"
                      }`}
                    >
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  href="mailto:amautdallas2@gmail.com?subject=Sponsorship Inquiry - AMA UTD"
                  variant={tier.featured ? "secondary" : "outline"}
                  className={`w-full justify-center ${
                    tier.featured
                      ? "bg-white text-navy-900 hover:bg-gray-100 border-white"
                      : ""
                  }`}
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-gray-600">
          Custom packages are available! Contact us to discuss your specific needs.
        </p>
      </Section>

      {/* Contact CTA */}
      <Section background="white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 tracking-tight">
            Let&apos;s Build a Partnership
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Interested in sponsoring AMA UTD? We&apos;d love to discuss how we can create a mutually beneficial partnership.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="mailto:amautdallas2@gmail.com?subject=Sponsorship Inquiry - AMA UTD"
              variant="primary"
            >
              Email Us
            </Button>
            <Button href="/contact" variant="outline">
              View Contact Info
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
