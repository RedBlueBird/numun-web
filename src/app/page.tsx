import HeroSection from "@/components/home/HeroSection";
import TimelineSection from "@/components/home/TimelineSection";
import InstagramFeed from "@/components/social/InstagramFeed";
import { sections } from "@/config/styles";

export default function Home() {
  return (
    <div className="relative">
      {/* Fake header background - absolute at top of page, provides dark green backdrop behind transparent header */}
      <div className={`absolute top-[-100px] left-0 right-0 h-[100px] ${sections.heroDark} z-40`} />

      <HeroSection />
      <TimelineSection />
      <InstagramFeed />
    </div>
  );
}
