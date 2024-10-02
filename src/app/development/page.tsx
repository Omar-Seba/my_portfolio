import { HeroSection } from "@/components/development/HeroSection";
import { MeSection } from "@/components/development/MeSection";


export default function App() {


  return (
    <div className="snap-mandatory snap-y w-full text-slate-100 overflow-y-scroll no-scrollbar scroll-smooth">
      <HeroSection />
      <MeSection />
    </div>
  );
}
