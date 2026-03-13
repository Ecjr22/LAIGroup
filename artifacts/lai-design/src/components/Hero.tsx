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
        {/* landing page hero scenic architectural modern mansion */}
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000"
          alt="Modern residential architecture in Florida"
          className="w-full h-full object-cover opacity-70"
        />
      </motion.div>

      {/* Gradient Wash for Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          <h1 className="font-display text-6xl md:text-8xl lg:text-[7rem] text-foreground leading-[1.0] tracking-wide drop-shadow-2xl font-light">
            Bold Design.<br />
            <span className="italic text-primary/90">Limitless</span> Vision.
          </h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-8 flex items-center justify-center space-x-4"
          >
            <div className="h-[1px] w-12 bg-primary/50" />
            <p className="font-sans text-xs md:text-sm tracking-[0.4em] uppercase text-foreground/70">
              Florida <span className="text-primary mx-2">·</span> South Carolina <span className="text-primary mx-2">·</span> Nationwide
            </p>
            <div className="h-[1px] w-12 bg-primary/50" />
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
