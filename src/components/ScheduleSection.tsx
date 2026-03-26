import ScrollReveal from "./ScrollReveal";

const schedule = [
  { time: "06:30", classes: ["Cross"] },
  { time: "07:30", classes: ["Cross"] },
  { time: "09:00", classes: ["Cross (M)"] },
  { time: "10:00", classes: ["Open Box"] },
  { time: "12:00", classes: ["Cross"] },
  { time: "16:00", classes: ["Halterofilia"] },
  { time: "17:00", classes: ["Cross", "HYROX"] },
  { time: "18:00", classes: ["Cross", "Strongman"] },
  { time: "19:00", classes: ["Cross", "Gimnásticos"] },
  { time: "20:00", classes: ["Cross"] },
  { time: "20:30", classes: ["Club Running"] },
];

const ScheduleSection = () => (
  <section id="horarios" className="section-padding bg-background-secondary">
    <div className="max-w-4xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-14">
          <p className="font-body text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            Planifica tu semana
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground leading-[0.95]">
            <span className="text-gradient">HORARIOS</span>
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="glass-card overflow-hidden">
          <div className="divide-y divide-border/50">
            {schedule.map((slot, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-6 py-4 hover:bg-muted/20 transition-colors duration-300"
              >
                <span className="font-display text-xl md:text-2xl text-primary w-20">{slot.time}</span>
                <div className="flex flex-wrap gap-2 justify-end">
                  {slot.classes.map((cls) => (
                    <span
                      key={cls}
                      className="font-body text-xs md:text-sm bg-muted/50 text-foreground px-3 py-1 rounded-full"
                    >
                      {cls}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <p className="font-body text-muted-foreground text-center text-sm mt-6">
          * Horarios orientativos L-V. Consulta el horario exacto de tu día en la app.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default ScheduleSection;
