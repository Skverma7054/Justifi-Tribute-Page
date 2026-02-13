import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('restoration');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-b from-[#f9ca78] via-[#f3b55d] to-[#efa748] px-6 py-20 overflow-hidden">
      <div className="absolute top-20 right-[12%] w-4 h-4 rounded-full bg-[#fff5d8]/70 ember-float" />
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-[860px] text-center z-10 story-card rounded-md px-6 md:px-12 py-12">
        <div
          className={`transition-all duration-700 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="section-label tracking-[4px]">Chapter I · A Tribute</span>
        </div>

        <h1
          className={`cinematic-title font-['Playfair_Display'] text-[64px] md:text-[84px] font-bold text-[#2d1e10] mt-6 mb-4 leading-[1.1] transition-all duration-1000 ease-out delay-150 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          SWARAJ
        </h1>

        <p
          className={`font-['Playfair_Display'] text-[22px] md:text-[28px] text-[#5a3a18] italic leading-[1.5] mb-10 transition-all duration-700 ease-out delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          "Not just a demand in history books, but a living fire in every generation."
        </p>

        <div
          className={`w-20 h-[2px] bg-[#b85d10] mx-auto mb-10 transition-all duration-500 ease-out delay-500 ${
            isLoaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
        />

        <p
          className={`font-['Inter'] text-[18px] text-[#352313] leading-[1.85] max-w-[680px] mx-auto transition-all duration-700 ease-out delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          This page unfolds like a journey—from coronation to rebellion, from sacrifice to resolve.
          Every section is a scene in the long story of people who refused silence and chose courage.
        </p>
      </div>

      <button
        onClick={scrollToNext}
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#5a3a18] hover:text-[#8f4508] transition-all duration-500 cursor-pointer group ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1000ms' }}
        aria-label="Scroll to next section"
      >
        <span className="text-[12px] uppercase tracking-[2px] font-medium">Begin the story</span>
        <ChevronDown className="w-5 h-5 animate-bounce group-hover:text-[#8f4508]" />
      </button>
    </section>
  );
}
