import { AboutSection } from "@/components/AboutSection";
import { CoatOfArmsSection } from "@/components/CoatOfArmsSection";
import { ContactSection } from "@/components/ContactSection";
import { FamilyHistorySection } from "@/components/FamilyHistorySection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PromoStrip } from "@/components/PromoStrip";
import { SurnameSection } from "@/components/SurnameSection";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Header />
      <PromoStrip />
      <Hero />
      <AboutSection />
      <SurnameSection />
      <FamilyHistorySection />
      <CoatOfArmsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
