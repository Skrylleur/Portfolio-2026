import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Antonin GOURINCHAS - Développeur Web & VBA | Portfolio Professionnel",
  description: "Développeur web full-stack et expert VBA avec 5+ ans d'expérience. Spécialisé dans React, Next.js, TypeScript et l'automatisation Excel. Création de sites web modernes et optimisation de processus métier.",
  keywords: [
    "développeur web",
    "développeur VBA",
    "React",
    "Next.js",
    "TypeScript",
    "automatisation Excel",
    "portfolio développeur",
    "développement frontend",
    "développement backend"
  ],
  authors: [{ name: "Antonin GOURINCHAS" }],
  creator: "Antonin GOURINCHAS",
  publisher: "Antonin GOURINCHAS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://antonin-gourinchas.fr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://antonin-gourinchas.fr",
    title: "Antonin GOURINCHAS - Développeur Web & VBA",
    description: "Portfolio professionnel - Développeur web full-stack et expert VBA avec 5+ ans d'expérience",
    siteName: "Portfolio Antonin GOURINCHAS",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Antonin GOURINCHAS - Développeur Web & VBA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Antonin GOURINCHAS - Développeur Web & VBA",
    description: "Portfolio professionnel - Développeur web full-stack et expert VBA",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2d4205" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
