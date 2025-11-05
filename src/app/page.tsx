import HeroSection from "@/components/home/HeroSection";
import { sections } from "@/config/styles";

export default function Home() {
  return (
    <div className="relative">
      {/* Fake header background - absolute at top of page, provides dark green backdrop behind transparent header */}
      <div className={`absolute top-[-100px] left-0 right-0 h-[100px] ${sections.heroDark} z-40`} />

      <HeroSection />
    </div>
  );
}
