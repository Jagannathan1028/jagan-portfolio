export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jagannathan",
    jobTitle: "Full Stack Developer",
    description:
      "Full Stack Developer specializing in Angular, Java Spring Boot, and .NET APIs. Available for hire worldwide.",
    url: "https://jaganportfolio.vercel.app",
    email: "jagannathan1028@gmail.com",
    telephone: "+918681922357",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    sameAs: [
      "https://github.com/Jagannathan1028",
      "https://linkedin.com/in/jagannathan1028",
    ],
    knowsAbout: [
      "Angular",
      "Java",
      "Spring Boot",
      ".NET Core",
      "TypeScript",
      "REST API Development",
      "SQL Server",
      "MySQL",
      "Azure",
      "Full Stack Development",
      "Enterprise Web Applications",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Full Stack Developer",
      skills:
        "Angular, Spring Boot, .NET, TypeScript, Java, SQL, Azure, REST APIs",
    },
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full Stack Web Development",
          description:
            "Custom web application development using Angular, Spring Boot, and .NET",
          areaServed: [
            { "@type": "Country", name: "United States" },
            { "@type": "Country", name: "United Kingdom" },
            { "@type": "Country", name: "Australia" },
            { "@type": "Country", name: "United Arab Emirates" },
            { "@type": "Country", name: "Germany" },
            { "@type": "Country", name: "France" },
            { "@type": "Country", name: "Canada" },
            { "@type": "Country", name: "India" },
          ],
        },
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Jagannathan Portfolio",
    url: "https://jaganportfolio.vercel.app",
    description:
      "Professional portfolio of Jagannathan — Full Stack Developer available for hire worldwide",
    author: {
      "@type": "Person",
      name: "Jagannathan",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://jaganportfolio.vercel.app/#about",
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://jaganportfolio.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://jaganportfolio.vercel.app/#about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Projects",
        item: "https://jaganportfolio.vercel.app/#projects",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact",
        item: "https://jaganportfolio.vercel.app/#contact",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
