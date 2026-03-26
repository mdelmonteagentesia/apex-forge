import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const mainPlans = [
  { sessions: "9 sesiones/mes", price: 67, popular: false },
  { sessions: "13 sesiones/mes", price: 80, popular: false },
  { sessions: "18 sesiones/mes", price: 99, popular: true },
  { sessions: "Ilimitado", price: 115, popular: false },
];

const extras = [
  "Open Box 9/13/18/ilimitado",
  "Club Haltero ext.",
  "Bono 10 sesiones",
  "Drop-in (sesión suelta)",
];

const PricingSection = () => (
  <section id="tarifas" className="section-padding bg-background">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-14">
          <p className="font-body text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            Invierte en ti
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground leading-[0.95] mb-4">
            <span className="text-gradient">TARIFAS</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-md mx-auto">
            Sin permanencia. Sin letra pequeña. Solo resultados.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
        {mainPlans.map((plan, i) => (
          <ScrollReveal key={plan.sessions} delay={0.08 * i}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className={`glass-card p-6 md:p-8 text-center relative transition-all duration-500 ${
                plan.popular ? "border-primary/50 glow-orange" : "hover:border-primary/30"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground font-body text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Popular
                </span>
              )}
              <h3 className="font-display text-lg md:text-xl text-foreground mb-4">{plan.sessions}</h3>
              <div className="mb-6">
                <span className="font-display text-5xl md:text-6xl text-foreground">{plan.price}</span>
                <span className="font-body text-muted-foreground text-lg ml-1">€/mes</span>
              </div>
              <a
                href="#clase-prueba"
                className={`block font-body font-semibold text-sm py-3 rounded-lg transition-all duration-300 ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:brightness-110"
                    : "border border-border text-foreground hover:bg-muted/30"
                }`}
              >
                APÚNTATE AHORA
              </a>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.2}>
        <div className="glass-card p-6 md:p-8">
          <h3 className="font-display text-xl text-foreground mb-4 text-center">Más opciones</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {extras.map((extra) => (
              <div key={extra} className="flex items-center gap-3 font-body text-muted-foreground text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {extra}
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default PricingSection;
