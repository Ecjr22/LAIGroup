import { Helmet } from "react-helmet-async";
import { Nav } from "@/components/Nav";
import { ContactFooter } from "@/components/ContactFooter";

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact – LAI Group</title>
        <meta name="description" content="Get in touch with LAI Group to discuss your next architectural design or construction project." />
      </Helmet>

      <Nav />

      <div className="pt-28 pb-0 px-6 bg-background max-w-7xl mx-auto">
        <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-muted-foreground mb-3">Get in Touch</p>
        <h1 className="font-display text-5xl md:text-6xl text-foreground">Start a Project</h1>
        <div className="w-14 h-[1px] bg-primary mt-6" />
      </div>

      <ContactFooter />
    </>
  );
}
