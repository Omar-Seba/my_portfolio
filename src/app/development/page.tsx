import { HeroSection } from "@/components/development/HeroSection";
import { MeSection } from "@/components/development/MeSection";


export default function App() {


  return (
    <main className="flex flex-col items-center w-full">
      <div className="scroll-snap-mandatory scroll-snap-y w-full h-screen font-Space_Grotesk overflow-y-scroll no-scrollbar">
        <HeroSection />
        {/* <MeSection />
        <HeroSection /> */}
      </div>
    </main>
  );
}
