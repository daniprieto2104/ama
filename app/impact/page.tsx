import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Image from "next/image";

const benefits = [
  "Gaining real-world experience",
  "Gaining a strong activity to put on your resume, LinkedIn, etc.",
  "Create work to add to your portfolio",
  "Gain volunteer hours",
  "Opportunities to develop and improve skills",
];

export default function Impact() {
  return (
    <>
      <PageHeader
        title="Marketing That Matters"
        subtitle="Using the power of marketing to create positive change in our community."
      />

      {/* What is MTM Section with Background */}
      <section className="relative py-20 md:py-28">
        <Image
          src="/images/MTM-logo-why.png"
          alt="AMA UTD team at conference"
          fill
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-navy-950/85" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              What is Marketing That Matters?
            </h2>

            <div className="mt-6 space-y-4 text-gray-200 text-lg leading-relaxed">
              <p>
                Marketing That Matters (MTM) partners with nonprofits to help amplify their mission through thoughtful, creative marketing. We are a team of UTD AMA students who are passionate about using our skills to make a real difference in the community.
              </p>
              <p>
                We work closely with each nonprofit to understand their goals and create authentic content that reflects their values. Whether it&apos;s flyers, social media posts, event promotion, or other marketing support, we focus on delivering work that is intentional, impactful, and reliable.
              </p>
              <p>
                Our partnerships are built on communication, collaboration, and care. We see every project as an opportunity to support meaningful causes while gaining hands-on experience as ethical, community-focused marketers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Nonprofits Section */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 tracking-tight">
              For Nonprofits
            </h2>
            <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
              If you&apos;re looking for a creative and motivated team that truly cares about your mission, we&apos;d love to work with you.
            </p>
          </div>

          <div className="mt-12 bg-gradient-to-br from-navy-900 to-navy-800 rounded-lg p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-bold">Partner With Us</h3>
                <p className="mt-4 text-navy-200 leading-relaxed">
                  We provide free marketing support to local nonprofits, including:
                </p>
                <ul className="mt-4 space-y-2 text-navy-100">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Flyers and print materials
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Social media content and strategy
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Event promotion
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Brand awareness campaigns
                  </li>
                </ul>
              </div>
              <div className="text-center md:text-left">
                <div className="inline-block bg-white/10 rounded-lg p-6">
                  <p className="text-navy-200 text-sm uppercase tracking-wider font-medium">Get Started</p>
                  <p className="mt-2 text-white font-semibold">Contact Sameen Qureshi</p>
                  <p className="text-navy-200 text-sm">VP of Community Engagement</p>
                  <div className="mt-4">
                    <Button
                      href="mailto:sameen.qureshi@utdallas.edu?subject=MTM Partnership Inquiry"
                      variant="secondary"
                      className="bg-white text-navy-900 hover:bg-gray-100 border-white"
                    >
                      Contact for More Info
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Join Section with Background - For Students */}
      <section className="relative py-20 md:py-28">
        <Image
          src="/images/MTM-what.png"
          alt="AMA UTD team at studio"
          fill
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-navy-950/80" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                  For Students: Why Join MTM?
                </h2>

                <p className="mt-4 text-gray-200 text-lg">
                  Marketing That Matters offers many incentives that include, but are not limited to:
                </p>

                <ul className="mt-6 space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white flex items-center justify-center mt-0.5">
                        <svg
                          className="w-4 h-4 text-navy-900"
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
                      </div>
                      <span className="text-gray-100 text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-white/20">
                <div className="w-20 h-20 mx-auto rounded-full bg-white/20 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">
                  Make a Difference
                </h3>
                <p className="mt-3 text-gray-200">
                  Join us in creating meaningful marketing campaigns for nonprofits that need your skills.
                </p>
                <div className="mt-6">
                  <Button
                    href="https://docs.google.com/forms/d/e/1FAIpQLScyiuRam2WfhI-NHyFRtSDO3YFbX5rSFJU1Vrqjwu2Xv6s_6g/viewform"
                    variant="secondary"
                    external
                    className="bg-white text-navy-900 hover:bg-gray-100 border-white"
                  >
                    Express Interest
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <Section background="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 tracking-tight text-center">
            How It Works
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-navy-900 text-white flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="mt-4 font-semibold text-navy-900">Connect</h3>
              <p className="mt-2 text-gray-600">
                We identify and partner with local nonprofits who need marketing support.
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-navy-900 text-white flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="mt-4 font-semibold text-navy-900">Create</h3>
              <p className="mt-2 text-gray-600">
                Student teams develop marketing strategies, content, and materials for our partners.
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-navy-900 text-white flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="mt-4 font-semibold text-navy-900">Impact</h3>
              <p className="mt-2 text-gray-600">
                Our work helps nonprofits reach more people and amplify their important missions.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="navy">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Ready to Make an Impact?
          </h2>
          <p className="mt-4 text-navy-200 text-lg max-w-xl mx-auto">
            Whether you&apos;re a student looking to join or a nonprofit seeking support, we&apos;d love to hear from you.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="https://docs.google.com/forms/d/e/1FAIpQLScyiuRam2WfhI-NHyFRtSDO3YFbX5rSFJU1Vrqjwu2Xv6s_6g/viewform"
              variant="secondary"
              external
              className="bg-white text-navy-900 hover:bg-gray-100 border-white"
            >
              Join as a Student
            </Button>
            <Button
              href="mailto:sameen.qureshi@utdallas.edu?subject=MTM Partnership Inquiry"
              variant="secondary"
              className="bg-white text-navy-900 border-white hover:bg-gray-100"
            >
              Partner as a Nonprofit
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
