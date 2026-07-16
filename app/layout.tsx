import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";
import MouseGlow from "@/components/MouseGlow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://apexflow.dev"),
  title: {
    default: "Apex Flow — Engineering Digital Momentum",
    template: "%s | Apex Flow",
  },
  description:
    "Full-stack, backend-focused development studio building production-ready SaaS, dashboards, and APIs.",
  keywords: [
    "NestJS developer",
    "Next.js developer",
    "full-stack developer",
    "SaaS development",
    "backend architecture",
  ],
  openGraph: {
    title: "Apex Flow — Engineering Digital Momentum",
    description:
      "Full-stack, backend-focused development studio building production-ready SaaS, dashboards, and APIs.",
    url: "https://apexflow.dev",
    siteName: "Apex Flow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Flow — Engineering Digital Momentum",
    description:
      "Full-stack, backend-focused development studio building production-ready SaaS, dashboards, and APIs.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0e17",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <MouseGlow />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
