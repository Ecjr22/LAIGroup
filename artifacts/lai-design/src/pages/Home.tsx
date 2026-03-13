import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { SiteFooter } from "@/components/SiteFooter";
import { TimeLapse } from "@/components/TimeLapse";

import innovationPrep from "@assets/Innovation-Preparatory-Academy_1773411287414.jpg";
import arthrexAMIE from "@assets/Arthrex-AMIE_1773411287409.jpg";
import miromarLakes from "@assets/Miromar-Lakes_1773411287414.jpg";
import arthrexAMISC from "@assets/Arthrex-AMISC_1773411287410.jpg";

const featured = [
  { title: "Innovation Preparatory Academy", type: "Education · Fort Myers, FL", image: innovationPrep },
  { title: "Arthrex AMIE", type: "Medical Manufacturing · Southwest FL", image: arthrexAMIE },
  { title: "Miromar Lakes", type: "Residential · Miromar Lakes, FL", image: miromarLakes },
  { title: "Arthrex AMISC", type: "Medical Manufacturing · South Carolina", image: arthrexAMISC },
];

const services = [
  { title: "Plan", body: "Master planning, feasibility studies and programming tailored to your project's vision." },
  { title: "Design", body: "Architecture and engineering that balances aesthetics, functionality and code compliance." },
  { title: "Engineer", body: "Structural, MEP and civil engineering expertise across diverse project types." },
  { title: "Construct", body: "Design-build delivery that keeps projects on schedule, on budget and built to last." },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>LAI Group – Architecture & Construction | Estero, Florida</title>
        <meta name="description" content="LAI Group is a full-service architectural design and construction firm based in Estero, FL, serving clients across Florida, South Carolina and nationwide." />
        <link rel="canonical" href="https://laigroup.com/" />
      </Helmet>

      <Nav />
      <Hero />

      {/* Services */}
      <section className="py-24 md:py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 md:mb-20"
          >
            <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-muted-foreground mb-4">What We Do</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">Full-Service Design & Build</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-background p-10 group"
              >
                <div className="w-6 h-[1.5px] bg-primary mb-7 group-hover:w-12 transition-all duration-500" />
                <h3 className="font-display text-xl text-foreground mb-4">{svc.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{svc.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 md:py-32 px-6 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-14">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-muted-foreground mb-3">Portfolio</p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground">Selected Works</h2>
            </motion.div>
            <Link href="/work">
              <span className="hidden md:inline-flex items-center gap-2 font-sans text-xs tracking-[0.18em] uppercase text-foreground hover:text-primary transition-colors cursor-pointer group">
                View All <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featured.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group relative overflow-hidden aspect-[4/3] bg-muted cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading={i < 2 ? "eager" : "lazy"}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-7 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/70 mb-1">{project.type}</p>
                  <h3 className="font-display text-xl text-white">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <Link href="/work">
              <span className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.18em] uppercase text-foreground hover:text-primary transition-colors cursor-pointer">
                View All Work <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Timelapse */}
      <TimeLapse />

      {/* About Teaser */}
      <section className="py-24 md:py-32 px-6 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-muted-foreground mb-4">About LAI Group</p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                25+ Years of<br />Excellence
              </h2>
              <div className="w-12 h-[1px] bg-primary mb-8" />
              <p className="font-sans text-muted-foreground text-base leading-relaxed mb-10">
                To be the leading provider of superior design and construction services — adding value for clients through innovation, integrity, and aggressive performance that builds enduring relationships.
              </p>
              <Link href="/about">
                <span className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.18em] uppercase text-foreground border-b border-foreground/30 pb-1 hover:border-primary hover:text-primary transition-colors cursor-pointer group">
                  Our Story <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="grid grid-cols-2 gap-px bg-border"
            >
              {[
                { number: "25+", label: "Years of Experience" },
                { number: "200+", label: "Projects Delivered" },
                { number: "3", label: "States & Counting" },
                { number: "100%", label: "Client Focused" },
              ].map((stat) => (
                <div key={stat.label} className="bg-background p-10 text-center">
                  <p className="font-display text-4xl text-primary mb-2">{stat.number}</p>
                  <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
