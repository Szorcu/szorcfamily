import { PromoStrip } from "@/components/molecules/PromoStrip";
import { AboutSection } from "@/components/organisms/AboutSection";
import { CoatOfArmsSection } from "@/components/organisms/CoatOfArmsSection";
import { ContactSection } from "@/components/organisms/ContactSection";
import { FamilyHistorySection } from "@/components/organisms/FamilyHistorySection";
import { Footer } from "@/components/organisms/Footer";
import { Navbar } from "@/components/organisms/Navbar";
import { HeroSection } from "@/components/organisms/HeroSection";
import { SurnameSection } from "@/components/organisms/SurnameSection";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />
      <PromoStrip />
      <HeroSection />
      <AboutSection />
      <SurnameSection />
      <FamilyHistorySection />
      <CoatOfArmsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
