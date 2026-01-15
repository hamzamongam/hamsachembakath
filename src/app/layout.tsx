import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hamsa Chembakath | Senior App Architect",
  description:
    "Senior React / Next.js Developer specialized in SaaS architecture, performance, and clean UI. Building digital products that matter.",
  keywords: [
    "Hamsa Chembakath",
    "Senior Frontend Developer",
    "React Developer",
    "Next.js Architect",
    "SaaS Development",
    "Web Performance",
    "UI/UX Engineering",
  ],
  authors: [{ name: "Hamsa Chembakath", url: "https://hamsa.dev" }],
  creator: "Hamsa Chembakath",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hamsa.dev",
    title: "Hamsa Chembakath | Senior App Architect",
    description:
      "Specialized in scalable SaaS architecture and high-performance React applications.",
    siteName: "Hamsa Chembakath Portfolio",
    images: [
      {
        url: "/og-image.jpg", // We'll need to ensure this exists or use a placeholder
        width: 1200,
        height: 630,
        alt: "Hamsa Chembakath Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamsa Chembakath | Senior App Architect",
    description:
      "Specialized in scalable SaaS architecture and high-performance React applications.",
    images: ["/og-image.jpg"],
    creator: "@hamzamongam", // Assuming from LinkedIn/Profile context if available, otherwise generic
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
        className={cn(
          inter.className,
          "antialiased min-h-screen bg-background text-foreground",
        )}
      >
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
