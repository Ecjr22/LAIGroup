import { Helmet } from "react-helmet-async";
import { Nav } from "@/components/Nav";
import { WorkGrid } from "@/components/WorkGrid";
import { SiteFooter } from "@/components/SiteFooter";

export default function WorkPage() {
  return (
    <>
      <Helmet>
        <title>Our Projects – LAI Group</title>
        <meta name="description" content="Browse LAI Group's portfolio of architectural design and construction projects across Florida, South Carolina, and beyond." />
      </Helmet>

      <Nav />

      <div className="pt-28 pb-0 px-6 bg-background max-w-7xl mx-auto">
        <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-muted-foreground mb-3">Portfolio</p>
        <h1 className="font-display text-5xl md:text-6xl text-foreground">Selected Projects</h1>
        <div className="w-14 h-[1px] bg-primary mt-6" />
      </div>

      <WorkGrid />

      <SiteFooter />
    </>
  );
}
