import { HeroSection } from "@/components/development/HeroSection";
import { MeSection } from "@/components/development/MeSection";


export default function App() {


  return (
    <main className="">
      <div className="scroll-snap-mandatory text-slate-100 snap-y w-full overflow-y-scroll no-scrollbar scroll-smooth">
        <HeroSection />
        <MeSection />
      </div>
    </main>
  );
}
