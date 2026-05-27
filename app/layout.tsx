import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AMA UTD | American Marketing Association at UT Dallas",
  description:
    "Build your marketing skills, grow your network, and create real impact at UT Dallas with the American Marketing Association chapter.",
  keywords: [
    "AMA",
    "American Marketing Association",
    "UT Dallas",
    "UTD",
    "marketing",
    "student organization",
  ],
  openGraph: {
    title: "AMA UTD | American Marketing Association at UT Dallas",
    description:
      "Build your marketing skills, grow your network, and create real impact at UT Dallas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
