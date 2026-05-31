import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { TerminalOverlay } from "@/features/developer-mode";
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
  metadataBase: new URL("https://hamsadev.com"),
  title: {
    default: "Hamsa Chembakath | Senior App Architect & Full-Stack Developer",
    template: "%s | Hamsa Chembakath",
  },
  description:
    "Senior React / Next.js Developer specialized in SaaS architecture, Technical SEO, and Digital Growth. Creator of Skoohub - A comprehensive School Management System built with TanStack Start & oRPC.",
  keywords: [
    "Hamsa Chembakath",
    "Senior Frontend Developer",
    "Full-Stack Developer",
    "Growth Engineer",
    "Technical SEO",
    "Next.js Architect",
    "SaaS Development",
    "TanStack Start",
    "oRPC",
    "Skoohub",
    "School Management System",
    "PWA",
  ],
  authors: [{ name: "Hamsa Chembakath", url: "https://hamsadev.com" }],
  creator: "Hamsa Chembakath",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hamsadev.com",
    title: "Hamsa Chembakath | Senior App Architect & Full-Stack Developer",
    description:
      "Specialized in scalable SaaS architecture, high-performance React applications, and data-driven growth strategies. Founder of Skoohub.",
    siteName: "Hamsa Chembakath Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Hamsa Chembakath Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamsa Chembakath | Senior App Architect & Full-Stack Developer",
    description:
      "Specialized in scalable SaaS architecture, high-performance React applications, and data-driven growth strategies.",
    images: ["/profile.png"],
    creator: "@hamzamongam",
  },
  icons: {
    icon: "/hamsa-favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
              url: "https://hamsadev.com",
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
                "TanStack Start",
                "oRPC",
                "Skoohub",
              ],
            }),
          }}
        />
        <div className="flex flex-col min-h-screen">
          {children}
          <ScrollToTop />
          <TerminalOverlay />
        </div>
      </body>
    </html>
  );
}
