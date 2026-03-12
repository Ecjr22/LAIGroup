import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Portfolio Data
const projects = [
  {
    id: 1,
    title: "Residence on the Bay",
    type: "Residential · Fort Myers",
    // modern waterfront residential home exterior
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
    span: "md:col-span-8",
    aspect: "aspect-[16/9]"
  },
  {
    id: 2,
    title: "Gulf Shore Estate",
    type: "Residential · Naples",
    // luxury home exterior modern minimalist
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000",
    span: "md:col-span-4",
    aspect: "aspect-[3/4]"
  },
  {
    id: 3,
    title: "Riverfront Commercial",
    type: "Commercial · Fort Myers",
    // modern office building facade
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
    span: "md:col-span-4",
    aspect: "aspect-[4/5]"
  },
  {
    id: 4,
    title: "Modern Coastal Villa",
    type: "Residential · Cape Coral",
    // modern luxury villa exterior with pool
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000",
    span: "md:col-span-4",
    aspect: "aspect-[4/5]"
  },
  {
    id: 5,
    title: "The Harbor Club",
    type: "Mixed-Use · Bonita Springs",
    // upscale modern mixed use community center
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
    span: "md:col-span-4",
    aspect: "aspect-[4/5]"
  },
  {
    id: 6,
    title: "Lakewood Ranch Center",
    type: "Community · Sarasota",
    // modern community center building
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=1200",
    span: "md:col-span-6",
    aspect: "aspect-[16/9]"
  },
  {
    id: 7,
    title: "Brickell Office Tower",
    type: "Commercial · Miami",
    // modern glass skyscraper exterior
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200",
    span: "md:col-span-6",
    aspect: "aspect-[16/9]"
  },
  {
    id: 8,
    title: "Mangrove Nature Pavilion",
    type: "Civic · Estero",
    // beautiful architectural wooden pavilion in nature
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2000",
    span: "md:col-span-12",
    aspect: "aspect-[21/9]"
  }
];

export function WorkGrid() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const openLightbox = (index: number) => setActiveProject(index);
  const closeLightbox = () => setActiveProject(null);
  
  const nextProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeProject !== null) {
      setActiveProject((activeProject + 1) % projects.length);
    }
  };
  
  const prevProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeProject !== null) {
      setActiveProject((activeProject - 1 + projects.length) % projects.length);
    }
  };

  return (
    <section id="work" className="py-24 md:py-32 px-4 md:px-6 max-w-[1400px] mx-auto bg-background">
      
      <div className="mb-16 md:mb-24">
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">Selected Works</h2>
        <div className="w-20 h-1 bg-primary" />
      </div>

      {/* Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`${project.span} ${project.aspect} group relative overflow-hidden bg-muted cursor-pointer`}
            onClick={() => openLightbox(index)}
          >
            <img 
              src={project.image} 
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <p className="font-sans text-xs tracking-[0.2em] text-primary uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                {project.type}
              </p>
              <h3 className="font-display text-2xl md:text-3xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex flex-col backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Top Bar */}
            <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10">
              <div className="text-white">
                <h4 className="font-display text-2xl">{projects[activeProject].title}</h4>
                <p className="font-sans text-sm text-primary tracking-wider uppercase mt-1">
                  {projects[activeProject].type}
                </p>
              </div>
              <button 
                onClick={closeLightbox}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Image */}
            <div className="flex-1 flex items-center justify-center p-4 md:p-12 relative">
              <button 
                onClick={prevProject}
                className="absolute left-4 md:left-8 p-3 bg-black/50 hover:bg-primary/80 text-white rounded-full transition-all"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <motion.img 
                key={activeProject}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                src={projects[activeProject].image} 
                alt={projects[activeProject].title}
                className="max-w-full max-h-full object-contain shadow-2xl"
              />

              <button 
                onClick={nextProject}
                className="absolute right-4 md:right-8 p-3 bg-black/50 hover:bg-primary/80 text-white rounded-full transition-all"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
