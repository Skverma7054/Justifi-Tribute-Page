import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="min-h-screen flex items-center relative bg-gradient-to-br from-[#f6c176] via-[#eea750] to-[#df8430] py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
          isVisible ? 'opacity-[0.09]' : 'opacity-0'
        }`}
      >
        <img
          src="/images/justifi-questions.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-[820px] mx-auto w-full relative z-10 text-center story-card rounded-md px-6 md:px-10 py-12 fade-rise">
        <h2
          className={`font-['Playfair_Display'] text-[44px] md:text-[56px] font-bold text-[#2d2d2d] mb-4 leading-[1.2] transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          The Story Continues With You
        </h2>

        <p
          className={`font-['Inter'] text-[20px] md:text-[24px] text-[#5d3e1d] mb-12 transition-all duration-600 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          Justifi World — where memory becomes movement.
        </p>

        <div
          className={`transition-all duration-600 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <button className="cta-button inline-flex items-center gap-3 group">
            <span>Enter Justifi World</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        <p
          className={`font-['Inter'] text-[14px] text-[#5d3e1d] mt-8 tracking-wide transition-all duration-500 ease-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          Carry the torch for justice.
        </p>

        <div
          className={`flex items-center justify-center gap-4 mt-16 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '900ms' }}
        >
          <div className="w-12 h-[1px] bg-[#8f4508]/40" />
          <div className="w-2 h-2 rounded-full bg-[#8f4508] ember-float" />
          <div className="w-12 h-[1px] bg-[#8f4508]/40" />
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="font-['Cinzel'] text-[12px] text-[#5d3e1d]/70 tracking-[2px]">
          JUSTIFI.WORLD
        </p>
      </div>
    </section>
  );
}
