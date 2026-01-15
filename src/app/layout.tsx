import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hamsa Chembakath | Senior App Architect & Growth Engineer",
  description:
    "Senior React / Next.js Developer specialized in SaaS architecture, Technical SEO, and Digital Growth. Building high-performance products that drive conversion.",
  keywords: [
    "Hamsa Chembakath",
    "Senior Frontend Developer",
    "Growth Engineer",
    "Technical SEO",
    "Digital Marketing",
    "Conversion Rate Optimization",
    "Next.js Architect",
    "SaaS Development",
    "Web Performance",
  ],
  authors: [{ name: "Hamsa Chembakath", url: "https://hamsa.dev" }],
  creator: "Hamsa Chembakath",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hamsa.dev",
    title: "Hamsa Chembakath | Senior App Architect & Growth Engineer",
    description:
      "Specialized in scalable SaaS architecture, high-performance React applications, and data-driven growth strategies.",
    siteName: "Hamsa Chembakath Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hamsa Chembakath Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamsa Chembakath | Senior App Architect & Growth Engineer",
    description:
      "Specialized in scalable SaaS architecture, high-performance React applications, and data-driven growth strategies.",
    images: ["/og-image.jpg"],
    creator: "@hamzamongam",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white selection:bg-primary/30 min-h-screen flex flex-col`}
      >
        <Script
          id="json-ld-profile"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Hamsa Chembakath",
              url: "https://hamsachembakath.com",
              jobTitle: "Senior Frontend Developer",
              sameAs: [
                "https://www.linkedin.com/in/hamsa-c-671569190/",
                "https://github.com/hamsachembakath",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "Frontend Architecture",
                "SaaS",
                "Technical SEO",
                "Digital Growth",
                "Conversion Rate Optimization",
              ],
            }),
          }}
        />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
