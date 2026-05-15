import "./globals.css";
import JsonLd from "@/components/JsonLd";

const SITE_URL = "https://jaganportfolio.vercel.app";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Jagannathan | Full Stack Developer — Hire for Web Applications",
    template: "%s | Jagannathan — Full Stack Developer",
  },
  description:
    "Jagannathan is a Full Stack Developer specializing in Angular, Java Spring Boot, and .NET APIs. Available for hire worldwide — USA, UK, Europe, UAE, Australia. Building scalable enterprise web applications with clean architecture.",
  keywords: [
    "Full Stack Developer",
    "Hire Full Stack Developer",
    "Angular Developer",
    "Spring Boot Developer",
    "Java Developer",
    ".NET Developer",
    "Web Developer for Hire",
    "Freelance Web Developer",
    "Enterprise Web Applications",
    "Remote Developer",
    "Jagannathan",
    "Full Stack Developer USA",
    "Full Stack Developer UK",
    "Full Stack Developer Europe",
    "Full Stack Developer UAE",
    "Full Stack Developer Australia",
    "Full Stack Developer India",
    "Web Application Developer",
    "REST API Developer",
    "Frontend Developer Angular",
    "Backend Developer Java",
    "Portfolio Website Developer",
    "E-commerce Developer",
    "SaaS Developer",
    "Custom Web App Developer",
    "Scalable Web Solutions",
    "Clean Architecture Developer",
    "TypeScript Developer",
    "SQL Server Developer",
    "MySQL Developer",
    "Azure Cloud Developer",
  ],
  authors: [{ name: "Jagannathan", url: SITE_URL }],
  creator: "Jagannathan",
  publisher: "Jagannathan",
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-US": SITE_URL,
      "en-GB": SITE_URL,
      "en-AU": SITE_URL,
      "en-AE": SITE_URL,
      "en-IN": SITE_URL,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    title: "Jagannathan | Full Stack Developer — Hire for Enterprise Web Apps",
    description:
      "Full Stack Developer available worldwide. Expert in Angular, Spring Boot & .NET. Building scalable enterprise applications for clients in USA, Europe, UAE, UK, and Australia.",
    url: SITE_URL,
    siteName: "Jagannathan Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/hero-desktop.png`,
        width: 1200,
        height: 630,
        alt: "Jagannathan — Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jagannathan | Full Stack Developer — Available for Hire",
    description:
      "Full Stack Developer specializing in Angular, Spring Boot & .NET. Building enterprise-grade web applications. Available worldwide.",
    images: [`${SITE_URL}/hero-desktop.png`],
    creator: "@jagannathan1028",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || "",
  },
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Chennai" />
        <meta name="geo.position" content="13.0827;80.2707" />
        <meta name="ICBM" content="13.0827, 80.2707" />
        <meta
          name="DC.title"
          content="Jagannathan — Full Stack Developer for Hire"
        />
        <meta name="DC.creator" content="Jagannathan" />
        <meta name="DC.subject" content="Full Stack Web Development" />
        <meta
          name="DC.description"
          content="Full Stack Developer available for hire worldwide"
        />
        <meta name="DC.language" content="en" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="coverage" content="Worldwide" />
        <link rel="canonical" href={SITE_URL} />
      </head>
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
