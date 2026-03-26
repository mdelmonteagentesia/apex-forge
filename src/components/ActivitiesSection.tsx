import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { Dumbbell, Flame, Trophy, Zap, Wind, PersonStanding, ArrowUpRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Activity {
  icon: LucideIcon;
  name: string;
  desc: string;
}

const activities: Activity[] = [
  { icon: Flame, name: "Cross / Cross (M)", desc: "WODs de alta intensidad. Fuerza, cardio y técnica en cada sesión." },
  { icon: Zap, name: "Open Box / Open Box (M)", desc: "Entrena libre con acceso a todo el material del box." },
  { icon: Dumbbell, name: "Halterofilia / Haltero (M)", desc: "Snatch, clean & jerk. Técnica olímpica pura." },
  { icon: Trophy, name: "HYROX / HYROX (M)", desc: "Preparación específica para competiciones HYROX." },
  { icon: PersonStanding, name: "Strongman", desc: "Peso muerto, farmers walk, atlas stones. Fuerza bruta." },
  { icon: ArrowUpRight, name: "Gimnásticos", desc: "Muscle-ups, handstands, ring work. Domina tu cuerpo." },
  { icon: Wind, name: "Club Running", desc: "Corre en grupo. Series, fondos y técnica de carrera." },
];

const ActivitiesSection = () => (
  <section id="actividades" className="section-padding bg-background">
    <div className="max-w-7xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-14">
          <p className="font-body text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            Qué hacemos
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground leading-[0.95]">
            NUESTRAS <span className="text-gradient">ACTIVIDADES</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {activities.map((act, i) => {
          const Icon = act.icon;
          return (
            <ScrollReveal key={act.name} delay={0.05 * i}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-6 md:p-8 group hover:border-primary/40 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-lg md:text-xl text-foreground mb-2">{act.name}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{act.desc}</p>
              </motion.div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default ActivitiesSection;
