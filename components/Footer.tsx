import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Logo & Tagline */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/images/ama-logo.png"
                alt="AMA UTD Logo"
                width={100}
                height={33}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-4 text-gray-600 text-sm italic">
              Empowering future marketing leaders, one student at a time
            </p>
            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.instagram.com/amautdallas/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-900 hover:text-navy-700 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/amautdallas/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-900 hover:text-navy-700 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://groupme.com/join_group/115335007/fAWnZ44B"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-900 hover:text-navy-700 transition-colors"
                aria-label="GroupMe"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </a>
              <a
                href="mailto:amautdallas2@gmail.com"
                className="text-navy-900 hover:text-navy-700 transition-colors"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Organization Links */}
          <div>
            <h4 className="text-xs font-semibold text-navy-900 uppercase tracking-wider">
              Organization
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-navy-900 text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-600 hover:text-navy-900 text-sm transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-gray-600 hover:text-navy-900 text-sm transition-colors">
                  Marketing That Matters
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved Links */}
          <div>
            <h4 className="text-xs font-semibold text-navy-900 uppercase tracking-wider">
              Get Involved
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/membership" className="text-gray-600 hover:text-navy-900 text-sm transition-colors">
                  Join AMA
                </Link>
              </li>
              <li>
                <Link href="/sponsorships" className="text-gray-600 hover:text-navy-900 text-sm transition-colors">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-navy-900 text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-xs font-semibold text-navy-900 uppercase tracking-wider">
              Resources
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a 
                  href="https://www.ama.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-navy-900 text-sm transition-colors"
                >
                  AMA National
                </a>
              </li>
              <li>
                <a 
                  href="https://jindal.utdallas.edu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-navy-900 text-sm transition-colors"
                >
                  Jindal School
                </a>
              </li>
              <li>
                <a 
                  href="https://www.utdallas.edu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-navy-900 text-sm transition-colors"
                >
                  UT Dallas
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © {currentYear} American Marketing Association UTD Chapter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
