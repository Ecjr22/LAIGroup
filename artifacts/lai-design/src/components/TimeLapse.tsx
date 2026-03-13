import { motion } from "framer-motion";
import timelapseVideo from "@assets/timeLapse1_1773415844499.mp4";

export function TimeLapse() {
  return (
    <section className="bg-background py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-primary/70 mb-4">From Ground Up</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-5">Construction in Motion</h2>
            <div className="w-12 h-[1px] bg-primary/50 mb-6" />
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              A timelapse capturing one of our projects taking shape — from foundation to final form. Every hour of labor, compressed into moments.
            </p>
          </motion.div>

          {/* Video side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-lg border border-border/30 shadow-xl shadow-black/40 bg-black"
          >
            <video
              src={timelapseVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto max-h-[55vh] object-contain block"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
