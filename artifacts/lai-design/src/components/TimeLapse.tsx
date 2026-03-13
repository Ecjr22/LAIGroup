import { motion } from "framer-motion";
import timelapseVideo from "@assets/timeLapse1_1773415844499.mp4";

export function TimeLapse() {
  return (
    <section id="drone" className="bg-background py-20 md:py-28 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-primary/70 mb-3">From Ground Up</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">Construction in Motion</h2>
          </div>
          <p className="font-sans text-sm text-muted-foreground max-w-xs leading-relaxed">
            A timelapse capturing one of our projects taking shape — from first pour to final form.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-lg border border-border/30 shadow-2xl shadow-black/50 bg-black"
        >
          <video
            src={timelapseVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto max-h-[70vh] object-contain block"
          />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/60 to-transparent pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
}
