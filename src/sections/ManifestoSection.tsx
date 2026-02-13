import { useScrollAnimation, useParallax } from '@/hooks/useScrollAnimation';

export function ManifestoSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: bgRef, offset } = useParallax(0.15);

  const demands = [
    'Justifi the inequality',
    'Justifi the silence',
    'Justifi the theft of dignity',
  ];

  return (
    <section
      id="manifesto"
      ref={sectionRef}
      className="min-h-screen flex items-center relative bg-gradient-to-b from-[#df8430] to-[#b85d10] py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div
        ref={bgRef}
        className={`absolute inset-0 transition-opacity duration-1200 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transform: `translateY(${offset}px)` }}
      >
        <img
          src="/images/lady-justice.jpg"
          alt="Lady Justice"
          className="w-full h-full object-contain opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#8c4708]/75 via-[#b85d10]/55 to-[#8c4708]/75" />
      </div>

      <div className="max-w-[900px] mx-auto w-full relative z-10 text-center">
        <div
          className={`transition-all duration-500 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <span className="section-label text-[#fff2dc]">Chapter V · The Demand</span>
        </div>

        <h2
          className={`cinematic-title font-['Playfair_Display'] text-[56px] md:text-[72px] font-bold text-[#fff5e6] mt-6 mb-8 leading-[1.1] transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          JUSTIFI.
        </h2>

        <p
          className={`font-['Inter'] text-[18px] md:text-[20px] text-[#fff5e6]/85 leading-[1.7] mb-10 transition-all duration-600 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          The story reaches its turning point. We no longer ask for pity—we ask for accountability.
        </p>

        <div className="space-y-4 mb-12">
          {demands.map((demand, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${500 + index * 150}ms` }}
            >
              <p className="font-['Playfair_Display'] text-[24px] md:text-[28px] text-[#fff5e6] font-medium tracking-wide">
                {demand}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`w-24 h-[1px] bg-[#fff2dc]/60 mx-auto mb-10 transition-all duration-500 ease-out ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{ transitionDelay: '950ms' }}
        />

        <p
          className={`font-['Playfair_Display'] text-[22px] md:text-[26px] text-[#ffe3b5] italic transition-all duration-600 ease-out ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-[0.98]'
          }`}
          style={{ transitionDelay: '1100ms' }}
        >
          "If you cannot, then step aside."
        </p>
      </div>
    </section>
  );
}
