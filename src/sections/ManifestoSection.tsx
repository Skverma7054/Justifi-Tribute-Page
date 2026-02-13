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
      className="min-h-screen flex items-center relative bg-[#1a1a1a] py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background Image with Parallax */}
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
          className="w-full h-full object-contain opacity-15"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 via-[#1a1a1a]/60 to-[#1a1a1a]/80" />
      </div>

      {/* Content */}
      <div className="max-w-[900px] mx-auto w-full relative z-10 text-center">
        {/* Label */}
        <div
          className={`transition-all duration-500 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <span className="section-label text-[#e85a24]">The Demand</span>
        </div>

        {/* Main Title */}
        <h2
          className={`font-['Playfair_Display'] text-[56px] md:text-[72px] font-bold text-[#f8f5f2] mt-6 mb-8 leading-[1.1] transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          JUSTIFI.
        </h2>

        {/* Intro Text */}
        <p
          className={`font-['Inter'] text-[18px] md:text-[20px] text-[#f8f5f2]/80 leading-[1.7] mb-10 transition-all duration-600 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          We flip the script. We pose a single, echoing demand:
        </p>

        {/* Demands List */}
        <div className="space-y-4 mb-12">
          {demands.map((demand, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${500 + index * 150}ms` }}
            >
              <p className="font-['Playfair_Display'] text-[24px] md:text-[28px] text-[#f8f5f2] font-medium tracking-wide">
                {demand}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className={`w-24 h-[1px] bg-[#c9a227]/50 mx-auto mb-10 transition-all duration-500 ease-out ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{ transitionDelay: '950ms' }}
        />

        {/* Closing Statement */}
        <p
          className={`font-['Playfair_Display'] text-[22px] md:text-[26px] text-[#c9a227] italic transition-all duration-600 ease-out ${
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
