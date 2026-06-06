import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Image from "next/image";

// Executive Board Data - Easy to update
const executiveBoard = [
  {
    name: "Daniel Prieto",
    role: "President",
    image: "/images/team/daniel-prieto.png",
  },
  {
    name: "Maria Lopez",
    role: "Executive VP",
    image: "/images/team/maria-lopez.png",
  },
  {
    name: "Azael Rangel-Landeros",
    role: "VP of Finance",
    image: "/images/team/Azael_Rangel-Landeros.jpg",
  },
  {
    name: "Nicolas Ferrer",
    role: "VP of Communications",
    image: "/images/team/Nicolas_Ferrer.jpg",
  },
  {
    name: "Giselle Dossal",
    role: "VP of Advertising",
    image: "/images/team/giselle-dossal.png",
  },
  {
    name: "Saanvi Habbu",
    role: "VP of Membership",
    image: "/images/team/saanvi-habbu.png",
  },
  {
    name: "Ihsan Yildirim",
    role: "VP of Programs",
    image: "/images/team/Ihsan_Yildirim.jpg",
  },
  {
    name: "Sameen Qureshi",
    role: "VP of Community Engagement",
    image: "/images/team/sameen-qureshi.png",
  },
];

const committeeChairs = [
  {
    name: "Kayito Eche",
    role: "Advertising Committee Chair",
    image: "/images/team/kayito-eche.png",
  },
  {
    name: "Vaishnavi Balan",
    role: "Finance Committee Chair",
    image: "/images/team/Vaishnavi.jpg",
  },
  {
    name: "Elisa Trevino",
    role: "Advertising Committee Chair",
    image: "/images/team/Elisa_Trevino.jpg",
  },
];

export default function About() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Learn more about our chapter and the team behind AMA UTD."
      />

      {/* Mission Section with Background */}
      <section className="relative py-20 md:py-28">
        <Image
          src="/images/Ourmission_group.png"
          alt="AMA UTD team"
          fill
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-navy-950/80" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Our Mission
            </h2>

            <div className="mt-8 space-y-6 text-gray-200 text-lg leading-relaxed">
              <p>
                The American Marketing Association at UT Dallas empowers students to
                become ethical, innovative and impact-driven professionals through
                experiential learning, professional development and networking,
                further extending our impact beyond the campus by creating a positive
                change in the community.
              </p>

              <p>
                Through professional development workshops, networking events, and
                hands-on projects, we empower our members to build successful careers
                while making meaningful contributions to the marketing community.
              </p>

              <p>
                As part of the national AMA network, our chapter connects UT Dallas
                students with industry leaders, cutting-edge resources, and a
                community of marketing professionals across the country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Board Section */}
      <Section background="light">
        <h2 className="text-2xl md:text-3xl font-bold text-navy-900 tracking-tight text-center">
          Executive Board
        </h2>

        <p className="mt-4 text-gray-600 text-lg text-center max-w-2xl mx-auto">
          Meet the dedicated team leading AMA UTD.
        </p>

        {/* Executive Board Members */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {executiveBoard.map((member, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="mx-auto w-28 h-28 rounded-full overflow-hidden bg-navy-100 flex items-center justify-center">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={112}
                    height={112}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <svg
                    className="w-14 h-14 text-navy-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                )}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-navy-900">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Committee Chairs */}
        <h3 className="mt-16 text-xl font-bold text-navy-900 tracking-tight text-center">
          Committee Chairs
        </h3>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {committeeChairs.map((member, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="mx-auto w-24 h-24 rounded-full overflow-hidden bg-navy-100 flex items-center justify-center">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <svg
                    className="w-12 h-12 text-navy-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                )}
              </div>
              <h3 className="mt-4 font-semibold text-navy-900">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Values Section */}
      <Section background="white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 tracking-tight">
            Our Values
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 mx-auto rounded-full bg-navy-900 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-navy-900">Innovation</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Embracing new ideas and creative approaches to marketing challenges.
              </p>
            </div>

            <div>
              <div className="w-12 h-12 mx-auto rounded-full bg-navy-900 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
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
              <h3 className="mt-4 font-semibold text-navy-900">Community</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Building lasting connections and supporting each other&apos;s growth.
              </p>
            </div>

            <div>
              <div className="w-12 h-12 mx-auto rounded-full bg-navy-900 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-navy-900">Excellence</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Striving for the highest standards in everything we do.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
