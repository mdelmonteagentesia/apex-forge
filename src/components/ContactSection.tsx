import { useState, FormEvent } from "react";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="section-padding bg-background">
      <div className="max-w-2xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="font-body text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-4">
              Da el primer paso
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground leading-[0.95]">
              <span className="text-gradient">CONTACTO</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          {submitted ? (
            <div className="glass-card p-10 text-center">
              <span className="font-display text-3xl text-energy mb-4 block">✓</span>
              <h3 className="font-display text-2xl text-foreground mb-2">¡MENSAJE ENVIADO!</h3>
              <p className="font-body text-muted-foreground">
                Te contactaremos pronto para confirmar tu clase de prueba.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-10 space-y-5">
              <div>
                <label htmlFor="name" className="font-body text-sm text-muted-foreground block mb-1.5">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  maxLength={100}
                  className="w-full bg-muted/30 border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="font-body text-sm text-muted-foreground block mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    maxLength={255}
                    className="w-full bg-muted/30 border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="font-body text-sm text-muted-foreground block mb-1.5">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    maxLength={20}
                    className="w-full bg-muted/30 border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="600 000 000"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="font-body text-sm text-muted-foreground block mb-1.5">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={3}
                  maxLength={1000}
                  className="w-full bg-muted/30 border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="¿En qué actividad estás interesado?"
                />
              </div>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  required
                  className="mt-1 rounded border-border accent-primary"
                />
                <label htmlFor="consent" className="font-body text-xs text-muted-foreground leading-relaxed">
                  Acepto la política de privacidad y consiento el tratamiento de mis datos para gestionar mi solicitud.
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-body font-bold text-base py-4 rounded-lg hover:brightness-110 transition-all duration-300 glow-orange"
              >
                SOLICITAR CLASE DE PRUEBA
              </button>
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
