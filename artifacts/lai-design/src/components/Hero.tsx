import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 280]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-[120%]">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000"
          alt="Modern residential architecture"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pt-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-white uppercase font-bold drop-shadow-lg mb-6"
            style={{ fontSize: "clamp(3rem, 6vw, 6rem)", lineHeight: 1.06 }}
          >
            Building<br />a Future
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="space-y-2 mb-10"
          >
            <p className="font-sans text-sm tracking-[0.28em] uppercase text-white/85">
              Plan · Design · Engineer · Construct
            </p>
            <p className="font-sans text-xs tracking-[0.22em] uppercase text-white/55">
              Florida · South Carolina · Nationwide
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/work">
              <span className="inline-flex items-center gap-2 bg-white text-foreground font-sans text-xs tracking-[0.18em] uppercase px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors cursor-pointer shadow-lg">
                View Our Work <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/30 font-sans text-xs tracking-[0.18em] uppercase px-8 py-3.5 rounded-full hover:bg-white/20 transition-colors cursor-pointer">
                Start a Project
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-white/40 mx-auto"
        />
      </motion.div>
    </section>
  );
}
