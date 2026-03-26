import ScrollReveal from "./ScrollReveal";

const CTASection = () => (
  <section id="clase-prueba" className="section-padding bg-background-secondary relative overflow-hidden">
    <div className="absolute inset-0 opacity-30">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(18 100% 56% / 0.15) 0%, transparent 60%)",
        }}
      />
    </div>
    <div className="max-w-3xl mx-auto text-center relative z-10">
      <ScrollReveal>
        <h2 className="font-display text-4xl sm:text-5xl md:text-7xl text-foreground leading-[0.95] mb-6">
          TU PRIMERA CLASE<br />
          ES <span className="text-gradient">GRATIS</span>
        </h2>
        <p className="font-body text-muted-foreground text-base md:text-lg mb-8 max-w-lg mx-auto">
          Ven, prueba, suda y decide. Sin compromiso. Solo necesitas ganas.
        </p>
        <a
          href="#contacto"
          className="inline-block bg-primary text-primary-foreground font-body font-bold text-lg px-10 py-5 rounded-lg glow-orange hover:brightness-110 transition-all duration-300 animate-pulse-glow"
        >
          RESERVA TU CLASE DE PRUEBA
        </a>
      </ScrollReveal>
    </div>
  </section>
);

export default CTASection;
