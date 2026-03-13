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

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-16 lg:px-24 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="font-display text-foreground uppercase font-bold drop-shadow-2xl mb-5"
            style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5.5rem)', lineHeight: 1.08 }}
          >
            Building<br />a Future
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-3"
          >
            <p className="font-sans text-sm md:text-base tracking-[0.25em] uppercase text-white/90">
              Plan · Design · Engineer · Construct
            </p>
            <p className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-white/55">
              Florida · South Carolina · Nationwide
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
