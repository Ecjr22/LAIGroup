import { Helmet } from "react-helmet-async";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { WorkGrid } from "@/components/WorkGrid";
import { AboutUs } from "@/components/AboutUs";
import { DroneView } from "@/components/DroneView";
import { ContactFooter } from "@/components/ContactFooter";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>LAI Group | Architects in Fort Myers & Southwest Florida</title>
        <meta 
          name="description" 
          content="LAI Group is a premier architectural firm based in Fort Myers, FL. Award-winning residential, commercial, and mixed-use architecture across Southwest Florida." 
        />
        <meta 
          name="keywords" 
          content="architects Fort Myers FL, architects Southwest Florida, architecture firm Fort Myers, residential architect SWFL, commercial architect Fort Myers, luxury architect Naples Florida, Cape Coral architect, Bonita Springs architect, Florida architect firm, architecture design Fort Myers" 
        />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="Fort Myers, Florida" />
        <meta name="geo.position" content="26.6406;-81.8723" />
        <meta name="ICBM" content="26.6406, -81.8723" />
        <link rel="canonical" href="https://laigroup.com/" />

        <meta property="og:title" content="LAI Group | Architects in Fort Myers & Southwest Florida" />
        <meta property="og:description" content="Premier architectural design studio shaping the built environment of Southwest Florida. Residential, commercial, and civic architecture with a vision." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://laigroup.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="LAI Group" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LAI Group | Architects in Fort Myers, FL" />
        <meta name="twitter:description" content="Award-winning architecture firm serving Fort Myers, Naples, Cape Coral & Southwest Florida." />

        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "ProfessionalService", "ArchitecturalService"],
          "name": "LAI Group",
          "description": "Premier architectural firm in Fort Myers, Florida specializing in luxury residential, commercial, and mixed-use architecture across Southwest Florida.",
          "url": "https://laigroup.com",
          "telephone": "+1-239-405-6888",
          "email": "hello@laigroup.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "9911 Corkscrew Road #202",
            "addressLocality": "Estero",
            "addressRegion": "FL",
            "postalCode": "33928",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 26.6406,
            "longitude": -81.8723
          },
          "areaServed": [
            { "@type": "City", "name": "Fort Myers", "sameAs": "https://en.wikipedia.org/wiki/Fort_Myers,_Florida" },
            { "@type": "City", "name": "Naples", "sameAs": "https://en.wikipedia.org/wiki/Naples,_Florida" },
            { "@type": "City", "name": "Cape Coral" },
            { "@type": "City", "name": "Bonita Springs" },
            { "@type": "City", "name": "Estero" },
            { "@type": "State", "name": "Florida" }
          ],
          "serviceType": ["Residential Architecture", "Commercial Architecture", "Mixed-Use Architecture", "Civic Architecture"],
          "priceRange": "$$$",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "17:00"
            }
          ],
          "sameAs": [
            "https://www.instagram.com/laigroup",
            "https://www.linkedin.com/company/lai-group"
          ]
        })}</script>
      </Helmet>

      <main className="bg-background min-h-screen">
        <Nav />
        <Hero />
        <WorkGrid />
        
        {/* A beautiful visual break with the sketch image from requirements */}
        <section className="h-[40vh] md:h-[60vh] relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-fixed bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/architectural-sketch.png)` }} />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          <p className="relative z-10 font-display text-2xl md:text-4xl text-primary text-center px-4 leading-relaxed max-w-4xl">
            "Design is not just what it looks like and feels like. <br/><span className="text-foreground">Design is how it works.</span>"
          </p>
        </section>

        <AboutUs />
        <DroneView />
        <ContactFooter />
      </main>
    </>
  );
}