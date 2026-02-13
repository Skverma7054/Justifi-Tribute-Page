import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section 
      id="cta"
      ref={sectionRef}
      className="min-h-screen flex items-center relative bg-gradient-to-br from-[#f8f5f2] via-[#f5f0eb] to-[#f0e9e2] py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background Pattern */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
          isVisible ? 'opacity-[0.08]' : 'opacity-0'
        }`}
      >
        <img
          src="/images/justifi-questions.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-[800px] mx-auto w-full relative z-10 text-center">
        {/* Main Heading */}
        <h2
          className={`font-['Playfair_Display'] text-[44px] md:text-[56px] font-bold text-[#2d2d2d] mb-4 leading-[1.2] transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          Experience the journey
        </h2>

        {/* Subheading */}
        <p
          className={`font-['Inter'] text-[20px] md:text-[24px] text-[#6b6b6b] mb-12 transition-all duration-600 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          Justifi World — A world with Justice
        </p>

        {/* CTA Button */}
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

        {/* Secondary Text */}
        <p
          className={`font-['Inter'] text-[14px] text-[#6b6b6b] mt-8 tracking-wide transition-all duration-500 ease-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          Join the movement for justice
        </p>

        {/* Decorative Elements */}
        <div
          className={`flex items-center justify-center gap-4 mt-16 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '900ms' }}
        >
          <div className="w-12 h-[1px] bg-[#e85a24]/40" />
          <div className="w-2 h-2 rounded-full bg-[#e85a24]" />
          <div className="w-12 h-[1px] bg-[#e85a24]/40" />
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="font-['Cinzel'] text-[12px] text-[#6b6b6b]/60 tracking-[2px]">
          JUSTIFI.WORLD
        </p>
      </div>
    </section>
  );
}
