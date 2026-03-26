import ScrollReveal from "./ScrollReveal";
import { MapPin, Clock, Instagram, Mail } from "lucide-react";

const FooterSection = () => (
  <footer className="bg-background-secondary border-t border-border/30">
    <div className="section-padding pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <ScrollReveal>
            <h3 className="font-display text-2xl text-foreground mb-4">
              VAM<span className="text-primary">.</span>
            </h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              Tu box de entrenamiento funcional y halterofilia. Donde cada repetición cuenta.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h4 className="font-display text-lg text-foreground mb-4">LOCALIZACIÓN</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                <p className="font-body text-sm text-muted-foreground">
                  Polígono Industrial, Nave 42<br />Madrid, España
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-primary shrink-0" />
                <p className="font-body text-sm text-muted-foreground">L-V: 06:30 – 21:30 | S: 09:00 – 13:00</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h4 className="font-display text-lg text-foreground mb-4">CONECTA</h4>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                aria-label="Email"
                className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300"
              >
                <Mail size={18} />
              </a>
            </div>
          </ScrollReveal>
        </div>

        <div className="gradient-separator mb-6" />
        <p className="font-body text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} VAM Box. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
