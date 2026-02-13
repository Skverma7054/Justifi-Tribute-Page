import { HeroSection } from '@/sections/HeroSection';
import { RestorationSection } from '@/sections/RestorationSection';
import { DefianceSection } from '@/sections/DefianceSection';
import { SacrificeSection } from '@/sections/SacrificeSection';
import { ManifestoSection } from '@/sections/ManifestoSection';
import { CTASection } from '@/sections/CTASection';

function App() {
  return (
    <main className="bg-[#f8f5f2]">
      <HeroSection />
      <RestorationSection />
      <DefianceSection />
      <SacrificeSection />
      <ManifestoSection />
      <CTASection />
    </main>
  );
}

export default App;
