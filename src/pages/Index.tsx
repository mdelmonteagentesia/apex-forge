import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CrossTrainingSection from "@/components/CrossTrainingSection";
import BoxSection from "@/components/BoxSection";
import CoachesSection from "@/components/CoachesSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import ScheduleSection from "@/components/ScheduleSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <main>
    <Navbar />
    <HeroSection />
    <div className="gradient-separator" />
    <CrossTrainingSection />
    <div className="gradient-separator" />
    <BoxSection />
    <div className="gradient-separator" />
    <CoachesSection />
    <div className="gradient-separator" />
    <ActivitiesSection />
    <div className="gradient-separator" />
    <ScheduleSection />
    <div className="gradient-separator" />
    <PricingSection />
    <div className="gradient-separator" />
    <CTASection />
    <div className="gradient-separator" />
    <ContactSection />
    <FooterSection />
  </main>
);

export default Index;
