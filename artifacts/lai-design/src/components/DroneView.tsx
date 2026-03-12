import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

export function DroneView() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="drone" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      
      {/* Background with abstract topographic lines */}
      <div className="absolute inset-0 opacity-40">
        <img 
          src={`${import.meta.env.BASE_URL}images/topographic-lines.png`} 
          alt="Topographic texture" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-transparent to-background/90" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <button 
            onClick={() => setIsVideoOpen(true)}
            className="group relative flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/10 hover:bg-primary/20 backdrop-blur-sm border border-primary/30 hover:border-primary/60 transition-all duration-500 mb-8 mx-auto hover:scale-105"
          >
            {/* Pulsing ring */}
            <div className="absolute inset-0 rounded-full border border-primary/40 animate-ping" style={{ animationDuration: '3s' }} />
            <Play className="w-8 h-8 md:w-10 md:h-10 text-primary ml-2 transform group-hover:scale-110 transition-transform" fill="currentColor" />
          </button>
          
          <h2 className="font-display text-5xl md:text-7xl text-white tracking-wide">
            See It From Above
          </h2>
          <p className="mt-6 font-sans text-sm md:text-base text-muted-foreground uppercase tracking-[0.3em] max-w-lg mx-auto">
            Experience the scale, context, and integration of our architecture within its environment.
          </p>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          >
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-6 right-6 md:top-10 md:right-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white z-50 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="w-full max-w-7xl aspect-video bg-muted relative mx-4">
              {/* Placeholder for actual drone footage iframe/video */}
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="font-display text-3xl text-muted-foreground">Drone Footage Placeholder</span>
                <span className="font-sans text-sm text-muted-foreground mt-2">(Replace with client's Vimeo/YouTube/MP4)</span>
              </div>
              
              {/* Example real usage:
              <iframe 
                src="https://player.vimeo.com/video/placeholder?autoplay=1&color=d4c5b9&title=0&byline=0&portrait=0" 
                className="absolute inset-0 w-full h-full"
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                allowFullScreen
              ></iframe> 
              */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
