import { Helmet } from "react-helmet-async";
import { Nav } from "@/components/Nav";
import { AboutUs } from "@/components/AboutUs";
import { SiteFooter } from "@/components/SiteFooter";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us – LAI Group</title>
        <meta name="description" content="Learn about LAI Group's mission, core values, and 25+ years of architectural design and construction excellence." />
      </Helmet>

      <Nav />

      <div className="pt-28 pb-0 px-6 bg-background max-w-7xl mx-auto">
        <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-muted-foreground mb-3">Who We Are</p>
        <h1 className="font-display text-5xl md:text-6xl text-foreground">About LAI Group</h1>
        <div className="w-14 h-[1px] bg-primary mt-6" />
      </div>

      <AboutUs />

      <SiteFooter />
    </>
  );
}
