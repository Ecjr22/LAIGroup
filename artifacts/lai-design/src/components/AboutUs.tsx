import { motion } from "framer-motion";

const architects = [
  {
    id: "marco",
    name: "Marco Alvarez",
    role: "Principal Architect",
    // professional man architect headshot
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
    collage: [
      "https://images.unsplash.com/photo-1498409785966-ab341407de6e?auto=format&fit=crop&q=80&w=400", // sketch
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=400", // coffee
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400", // modern detail
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=400", // tower
    ]
  },
  {
    id: "sofia",
    name: "Sofia Chen",
    role: "Design Director",
    // professional woman designer headshot
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    collage: [
      "https://images.unsplash.com/photo-1501446529957-6226bd447c46?auto=format&fit=crop&q=80&w=400", // abstract art
      "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?auto=format&fit=crop&q=80&w=400", // textures
      "https://images.unsplash.com/photo-1542662565-7e4fd7ee44d4?auto=format&fit=crop&q=80&w=400", // museum
      "https://images.unsplash.com/photo-1416879598555-2591ad042171?auto=format&fit=crop&q=80&w=400", // monstera plant
    ]
  },
  {
    id: "james",
    name: "James Whitfield",
    role: "Project Architect",
    // professional young man architect headshot
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
    collage: [
      "https://images.unsplash.com/photo-1541888087643-f6610fb27c59?auto=format&fit=crop&q=80&w=400", // construction site
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=400", // drone view
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=400", // team meeting
      "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?auto=format&fit=crop&q=80&w=400", // blueprints
    ]
  }
];

export function AboutUs() {
  return (
    <section id="about" className="py-24 md:py-32 px-4 md:px-6 max-w-7xl mx-auto">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24">
        <div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">The Studio</h2>
          <div className="w-20 h-1 bg-primary mb-6" />
          <p className="max-w-xl font-sans text-muted-foreground leading-relaxed text-lg">
            We are a collective of designers, thinkers, and makers dedicated to crafting environments that inspire and endure. Meet the minds shaping Southwest Florida's landscape.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {architects.map((person, i) => (
          <motion.div 
            key={person.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            className="group perspective-1000 cursor-pointer"
          >
            {/* The 3D flip container */}
            <div className="relative aspect-[3/4] w-full transform-style-3d transition-transform duration-1000 group-hover:rotate-y-180 shadow-2xl shadow-black/50">
              
              {/* FRONT FACE: Portrait */}
              <div className="absolute inset-0 backface-hidden bg-card overflow-hidden">
                <img 
                  src={person.image} 
                  alt={person.name}
                  loading="lazy"
                  className="w-full h-full object-cover filter grayscale-[20%] contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="font-display text-3xl text-white mb-1">{person.name}</h3>
                  <p className="font-sans text-sm text-primary tracking-widest uppercase">{person.role}</p>
                </div>
                
                {/* Flip indicator */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                </div>
              </div>

              {/* BACK FACE: Personality Collage */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 bg-card border border-border flex flex-col">
                <div className="p-6 pb-4 flex-shrink-0 bg-background/50 border-b border-border">
                  <h4 className="font-display text-xl text-foreground">Inspirations</h4>
                  <p className="font-sans text-xs text-muted-foreground mt-1">The elements behind the craft</p>
                </div>
                <div className="flex-1 p-4 grid grid-cols-2 grid-rows-2 gap-3 bg-muted/30">
                  {person.collage.map((img, idx) => (
                    <div key={idx} className="relative overflow-hidden rounded-sm bg-background border border-border/50">
                      <img 
                        src={img} 
                        alt="Inspiration"
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
