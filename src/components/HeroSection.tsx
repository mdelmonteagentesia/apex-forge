import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Atleta realizando halterofilia en un box de entrenamiento"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-sm md:text-base uppercase tracking-[0.3em] text-primary font-semibold mb-4 md:mb-6"
        >
          Entrenamiento Funcional & Halterofilia
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground leading-[0.9] mb-6 md:mb-8"
        >
          NO VENGAS A<br />
          <span className="text-gradient">ENTRENAR</span>
          <br />
          VEN A SUPERARTE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="font-body text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-8 md:mb-10"
        >
          Tu box de entrenamiento funcional y halterofilia. Aquí cada WOD te acerca a tu mejor versión.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#clase-prueba"
            className="bg-primary text-primary-foreground font-body font-bold text-base px-8 py-4 rounded-lg glow-orange hover:brightness-110 transition-all duration-300 animate-pulse-glow"
          >
            PRUEBA GRATIS UNA CLASE
          </a>
          <a
            href="#tarifas"
            className="border border-border text-foreground font-body font-semibold text-base px-8 py-4 rounded-lg hover:bg-muted/30 transition-all duration-300"
          >
            VER TARIFAS
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex items-start justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
