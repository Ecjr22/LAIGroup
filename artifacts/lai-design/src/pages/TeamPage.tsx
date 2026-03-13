import { Helmet } from "react-helmet-async";
import { Nav } from "@/components/Nav";
import { TeamSection } from "@/components/TeamSection";
import { SiteFooter } from "@/components/SiteFooter";

export default function TeamPage() {
  return (
    <>
      <Helmet>
        <title>Our Team – LAI Group</title>
        <meta name="description" content="Meet the architects and design professionals behind LAI Group's award-winning projects." />
      </Helmet>

      <Nav />

      <div className="pt-28 pb-0 px-6 bg-background max-w-7xl mx-auto">
        <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-muted-foreground mb-3">The People</p>
        <h1 className="font-display text-5xl md:text-6xl text-foreground">Meet the Team</h1>
        <div className="w-14 h-[1px] bg-primary mt-6" />
      </div>

      <TeamSection />

      <SiteFooter />
    </>
  );
}
