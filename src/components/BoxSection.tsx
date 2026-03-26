import ScrollReveal from "./ScrollReveal";
import boxInterior from "@/assets/box-interior.jpg";

const BoxSection = () => (
  <section id="el-box" className="section-padding bg-background relative">
    <div className="max-w-7xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-12">
          <p className="font-body text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            Las instalaciones
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground leading-[0.95]">
            ESTO ES <span className="text-gradient">EL BOX</span>
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <div className="relative rounded-2xl overflow-hidden mb-12">
          <img
            src={boxInterior}
            alt="Interior del box con equipamiento de halterofilia"
            loading="lazy"
            width={1920}
            height={1080}
            className="w-full h-[300px] md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-3 gap-6">
        {[
          {
            title: "Sin máquinas guiadas",
            desc: "Barras, discos, kettlebells, cajones. Solo tú y el movimiento real.",
          },
          {
            title: "Comunidad real",
            desc: "Aquí nadie entrena solo. El compañero de al lado es tu mejor motivación.",
          },
          {
            title: "Coaches que lideran",
            desc: "Programación inteligente, correcciones en tiempo real, progresión garantizada.",
          },
        ].map((item, i) => (
          <ScrollReveal key={item.title} delay={0.1 * (i + 1)}>
            <div className="glass-card p-6 md:p-8 hover:border-primary/30 transition-colors duration-500">
              <h3 className="font-display text-xl md:text-2xl text-foreground mb-3">{item.title}</h3>
              <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed">{item.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default BoxSection;
