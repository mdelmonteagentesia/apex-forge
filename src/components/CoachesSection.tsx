import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const coaches = [
  { name: "Alex M", role: "Head Coach · Cross Training" },
  { name: "Viti", role: "Coach · Halterofilia" },
  { name: "David", role: "Coach · HYROX" },
  { name: "MRBICHITO", role: "Coach · Strongman" },
  { name: "Jony65", role: "Coach · Cross Training" },
  { name: '"El Flaco" Coach', role: "Coach · Gimnásticos" },
  { name: "Raquel", role: "Coach · Cross Training" },
  { name: "Roma", role: "Coach · Club Running" },
];

const CoachesSection = () => (
  <section id="coaches" className="section-padding bg-background-secondary">
    <div className="max-w-7xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-14">
          <p className="font-body text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            El equipo
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground leading-[0.95]">
            NUESTROS <span className="text-gradient">COACHES</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {coaches.map((coach, i) => (
          <ScrollReveal key={coach.name} delay={0.05 * i}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-5 md:p-6 text-center group hover:border-primary/40 transition-all duration-500"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <span className="font-display text-2xl md:text-3xl text-primary">
                  {coach.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-display text-lg md:text-xl text-foreground mb-1">{coach.name}</h3>
              <p className="font-body text-xs md:text-sm text-muted-foreground">{coach.role}</p>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default CoachesSection;
