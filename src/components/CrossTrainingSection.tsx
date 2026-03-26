import ScrollReveal from "./ScrollReveal";
import crossTrainingImg from "@/assets/cross-training.jpg";

const CrossTrainingSection = () => (
  <section id="cross-training" className="section-padding bg-background-secondary relative overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <ScrollReveal>
          <p className="font-body text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            El método
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground leading-[0.95] mb-6">
            QUÉ ES<br />
            <span className="text-gradient">CROSS TRAINING</span>
          </h2>
          <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
            Un sistema de fuerza y acondicionamiento basado en ejercicios funcionales, 
            constantemente variados y ejecutados a alta intensidad. Cada sesión es diferente. 
            Cada día, un reto nuevo.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {[
              { num: "500+", label: "Atletas activos" },
              { num: "8", label: "Coaches expertos" },
              { num: "7", label: "Disciplinas" },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={0.1 * (i + 1)}>
                <div className="text-center py-4">
                  <span className="font-display text-3xl md:text-4xl text-primary">{stat.num}</span>
                  <p className="font-body text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src={crossTrainingImg}
              alt="Grupo de atletas entrenando en el box"
              loading="lazy"
              width={1280}
              height={864}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default CrossTrainingSection;
