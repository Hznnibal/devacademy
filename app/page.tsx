import { Navbar } from "@/components/NavbarMainPage/navbar";
import { CTASection } from "@/components/sections/CTASection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HeroSection } from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#000913] via-[#000205] to-black">
      <Navbar />
      <div className="absolute inset-0 bg-[url('/dark-grid.svg')] opacity-20 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="relative">
        <HeroSection />
        <FeaturesSection />
        <CTASection />
      </div>
    </div>
  );
}
