import "./globals.css";

export const metadata = {
  title: "Jagannathan | Full Stack Developer",
  description:
    "Full Stack Developer specializing in Angular, Java Spring Boot, and .NET APIs. Building scalable enterprise web applications with clean architecture.",
  keywords: [
    "Full Stack Developer",
    "Angular",
    "Spring Boot",
    "Java",
    ".NET",
    "Web Developer",
    "Portfolio",
    "Jagannathan",
  ],
  openGraph: {
    title: "Jagannathan | Full Stack Developer",
    description:
      "Full Stack Developer building scalable enterprise applications with Angular, Spring Boot & .NET",
    type: "website",
  },
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
      </head>
      <body>{children}</body>
    </html>
  );
}
