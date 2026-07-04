import { Header } from "@/components/Header";
import { PromoStrip } from "@/components/PromoStrip";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { SurnameSection } from "@/components/SurnameSection";
import { FamilyHistorySection } from "@/components/FamilyHistorySection";
import { CoatOfArmsSection } from "@/components/CoatOfArmsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

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
