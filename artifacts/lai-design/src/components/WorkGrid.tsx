import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import arthrexAMIE from "@assets/Arthrex-AMIE_1773411287409.jpg";
import arthrexAMISC from "@assets/Arthrex-AMISC_1773411287410.jpg";
import arthrexMfg from "@assets/Arthrex-Manufacturing_1773411287410.jpg";
import athenianAcademy from "@assets/Athenian-Academy-FM_1773411287411.jpg";
import capeCoralShelter from "@assets/Cape-Coral-Animal-Shelter_1773411287411.jpg";
import clubParagon from "@assets/Club-Paragon_1773411287411.jpg";
import foxbrookSenior from "@assets/Foxbrook-Senior-Center_1773411287412.jpg";
import hendersonHammock from "@assets/Henderson-Hammock-Charter-School_1773411287412.jpg";
import hollywoodAcademy from "@assets/Hollywood-Academy-Of-Arts-Sciences_1773411287413.jpg";
import innovationPrep from "@assets/Innovation-Preparatory-Academy_1773411287414.jpg";
import miromarLakes from "@assets/Miromar-Lakes_1773411287414.jpg";
import vincentPark from "@assets/Vincent-Park_1773411287415.jpg";

// Portfolio Data
const projects = [
  {
    id: 1,
    title: "Innovation Preparatory Academy",
    type: "Education · Fort Myers, FL",
    image: innovationPrep,
    cost: "$13M",
    size: "69,850 sq ft",
    completed: "August 2020",
    description: "LAI partnered with Charter Schools USA and Ryan Companies to provide design engineering services for this two-story school, including a circular stairway and indoor track.",
    span: "md:col-span-7",
    aspect: "aspect-[16/10]"
  },
  {
    id: 2,
    title: "Miromar Lakes",
    type: "Residential · Miromar Lakes, FL",
    image: miromarLakes,
    cost: "$1.4M",
    size: "3,600 sq ft",
    completed: "April 2019",
    description: "LAI performed a design/build remodel of this stunning single-family home.",
    span: "md:col-span-5",
    aspect: "aspect-[4/3]"
  },
  {
    id: 3,
    title: "Henderson Hammock Charter School",
    type: "Education · SWFL",
    image: hendersonHammock,
    cost: "$11M",
    size: "65,000 sq ft",
    completed: "July 2011",
    description: "LAI provided design engineering services in partnership with Charter Schools USA. Unique challenges included designing around wetlands on the property.",
    span: "md:col-span-4",
    aspect: "aspect-[4/5]"
  },
  {
    id: 4,
    title: "Cape Coral Animal Shelter",
    type: "Civic · Cape Coral, FL",
    image: capeCoralShelter,
    cost: "$1.7M",
    size: "7,800 sq ft",
    completed: "March 2020",
    description: "LAI provided design engineering and construction management pro bono for the first no-kill animal shelter in Cape Coral, featuring cat rooms, kennels, outdoor runs and a veterinary clinic.",
    span: "md:col-span-4",
    aspect: "aspect-[4/5]"
  },
  {
    id: 5,
    title: "Athenian Academy – Fort Myers",
    type: "Education · Fort Myers, FL",
    image: athenianAcademy,
    cost: "$13.2M",
    size: "68,950 sq ft",
    completed: "August 2020",
    description: "Design engineering and construction management for Athenian Academy's second campus. Features a two-story indoor slide, covered basketball court airnasium, soccer field and tot lot.",
    span: "md:col-span-4",
    aspect: "aspect-[4/5]"
  },
  {
    id: 6,
    title: "Hollywood Academy of Arts & Sciences",
    type: "Education · Hollywood, FL",
    image: hollywoodAcademy,
    cost: "$14M",
    size: "110,000 gsf",
    completed: "August 2012",
    description: "LEED registered four-story elementary school for 1,400 students. Features classrooms, administration, multi-purpose cafeteria, rooftop outdoor teaching and play areas.",
    span: "md:col-span-5",
    aspect: "aspect-[16/10]"
  },
  {
    id: 7,
    title: "Fox Brook Senior Center",
    type: "Residential · SWFL",
    image: foxbrookSenior,
    cost: "$12.3M",
    size: "42,000 sq ft",
    completed: "November 1999",
    description: "Design/build construction of a three-story senior apartment building with 72 units and underground parking.",
    span: "md:col-span-7",
    aspect: "aspect-[16/10]"
  },
  {
    id: 8,
    title: "Club Paragon",
    type: "Commercial · SWFL",
    image: clubParagon,
    cost: "$1.5M",
    size: "6,000 sq ft",
    completed: "June 1989",
    description: "Design/build construction of a restaurant remodeling and addition.",
    span: "md:col-span-6",
    aspect: "aspect-[4/3]"
  },
  {
    id: 9,
    title: "Vincent Park",
    type: "Commercial · SWFL",
    image: vincentPark,
    cost: "$6.5M",
    size: "Five Buildings / 50,000 gsf",
    completed: "August 1999",
    description: "Design/build construction of five two-story Class A office buildings at 10,800 sq ft each.",
    span: "md:col-span-6",
    aspect: "aspect-[4/3]"
  },
  {
    id: 10,
    title: "Arthrex Manufacturing",
    type: "Industrial · South Carolina",
    image: arthrexMfg,
    cost: "$8M",
    size: "36,000 gsf",
    completed: "June 2019",
    description: "Programming and design of a two-story building providing services to the Arthrex South Carolina Campus.",
    span: "md:col-span-4",
    aspect: "aspect-[4/3]"
  },
  {
    id: 11,
    title: "Arthrex AMISC",
    type: "Medical Manufacturing · South Carolina",
    image: arthrexAMISC,
    cost: "$39M",
    size: "253,000 gsf",
    completed: "June 2019",
    description: "Programming and design of the expansion of Arthrex's medical manufacturing facility to South Carolina.",
    span: "md:col-span-4",
    aspect: "aspect-[4/3]"
  },
  {
    id: 12,
    title: "Arthrex AMIE",
    type: "Medical Manufacturing · Southwest FL",
    image: arthrexAMIE,
    cost: "$36M",
    size: "400,000 gsf",
    completed: "November 2012",
    description: "Programming and design of a landmark medical manufacturing facility for Arthrex, providing quality products and educational services for orthopaedic surgeons worldwide.",
    span: "md:col-span-4",
    aspect: "aspect-[4/3]"
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
            transition={{ duration: 0.8, delay: index * 0.05 }}
            className={`${project.span} ${project.aspect} group relative overflow-hidden bg-muted cursor-pointer`}
            onClick={() => openLightbox(index)}
          >
            <img 
              src={project.image} 
              alt={project.title}
              loading={index < 2 ? "eager" : "lazy"}
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
            className="fixed inset-0 z-[100] bg-black/95 flex flex-col backdrop-blur-md"
            onClick={closeLightbox}
          >
            {/* Top Bar */}
            <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10 bg-gradient-to-b from-black/80 to-transparent">
              <div className="text-white">
                <h4 className="font-display text-2xl md:text-3xl">{projects[activeProject].title}</h4>
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

            {/* Main Image Area */}
            <div className="flex-1 flex items-center justify-center p-4 md:p-12 relative overflow-hidden">
              <button 
                onClick={prevProject}
                className="absolute left-4 md:left-8 p-3 bg-black/50 hover:bg-primary/80 text-white rounded-full transition-all z-10"
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
                className="max-w-full max-h-[75vh] object-contain shadow-2xl"
              />

              <button 
                onClick={nextProject}
                className="absolute right-4 md:right-8 p-3 bg-black/50 hover:bg-primary/80 text-white rounded-full transition-all z-10"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>

            {/* Details Panel */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-background border-t border-border/20 p-6 md:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-8 text-foreground/90 font-sans text-base leading-relaxed">
                  <p>{projects[activeProject].description}</p>
                </div>
                <div className="md:col-span-4 flex flex-col space-y-4 font-sans border-l border-border/20 pl-6 md:pl-8">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Cost</p>
                    <p className="text-foreground font-medium">{projects[activeProject].cost}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Size</p>
                    <p className="text-foreground font-medium">{projects[activeProject].size}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Completed</p>
                    <p className="text-foreground font-medium">{projects[activeProject].completed}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}