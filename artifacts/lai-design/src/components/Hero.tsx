import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Parallax Background Image */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-[120%]"
      >
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000"
          alt="Modern residential architecture in Florida"
          className="w-full h-full object-cover opacity-70"
        />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 35%, transparent 60%)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0d0d0f] to-transparent" />

      {/* Content — anchored in the upper-center zone */}
      <div className="absolute inset-0 flex flex-col items-start justify-start px-8 md:px-16 lg:px-24" style={{ paddingTop: 'max(5rem, calc(50vh - 18rem))', paddingBottom: '0' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="font-display text-foreground uppercase font-bold drop-shadow-2xl mb-6"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)', lineHeight: 1.05 }}
          >
            Building<br />a Future
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center space-x-3 mb-3"
          >
            <div className="h-[1px] w-8 bg-primary/70 shrink-0" />
            <p className="font-sans text-xs tracking-[0.35em] uppercase text-primary/80">
              Plan <span className="mx-1 text-primary/40">·</span> Design <span className="mx-1 text-primary/40">·</span> Engineer <span className="mx-1 text-primary/40">·</span> Construct
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex items-center space-x-3"
          >
            <div className="h-[1px] w-8 bg-border/50 shrink-0" />
            <p className="font-sans text-xs tracking-[0.35em] uppercase text-foreground/45">
              Florida <span className="mx-1">·</span> South Carolina <span className="mx-1">·</span> Nationwide
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="font-sans text-[0.6rem] tracking-[0.2em] text-foreground/50 uppercase mb-2">Explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-primary/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
