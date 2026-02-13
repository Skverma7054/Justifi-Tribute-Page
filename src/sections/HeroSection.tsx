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
    <section className="min-h-screen flex flex-col items-center justify-center relative bg-[#f8f5f2] px-6 py-20">
      {/* Subtle paper texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-[800px] text-center z-10">
        {/* Label */}
        <div
          className={`transition-all duration-700 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="section-label tracking-[4px]">A Tribute</span>
        </div>

        {/* Main Title */}
        <h1
          className={`font-['Playfair_Display'] text-[72px] md:text-[80px] font-bold text-[#2d2d2d] mt-6 mb-4 leading-[1.1] transition-all duration-1000 ease-out delay-150 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          SWARAJ
        </h1>

        {/* Subtitle */}
        <p
          className={`font-['Playfair_Display'] text-[22px] md:text-[26px] text-[#6b6b6b] italic leading-[1.5] mb-10 transition-all duration-700 ease-out delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          "Not just a political demand, but a spiritual heartbeat."
        </p>

        {/* Divider */}
        <div
          className={`w-16 h-[2px] bg-[#e85a24] mx-auto mb-10 transition-all duration-500 ease-out delay-500 ${
            isLoaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
        />

        {/* Body Text */}
        <p
          className={`font-['Inter'] text-[18px] text-[#2d2d2d] leading-[1.8] max-w-[600px] mx-auto transition-all duration-700 ease-out delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Justifi.world is a flickering diya lit in the shadow of giants. 
          We stand on the shoulders of those who gave everything so we could simply be.
        </p>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#6b6b6b] hover:text-[#e85a24] transition-all duration-500 cursor-pointer group ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1000ms' }}
        aria-label="Scroll to next section"
      >
        <span className="text-[12px] uppercase tracking-[2px] font-medium">Experience the journey</span>
        <ChevronDown className="w-5 h-5 animate-bounce group-hover:text-[#e85a24]" />
      </button>
    </section>
  );
}
