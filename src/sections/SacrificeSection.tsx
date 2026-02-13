import { useScrollAnimation, useParallax } from '@/hooks/useScrollAnimation';

export function SacrificeSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.25 });
  const { ref: imageRef, offset } = useParallax(0.3);

  return (
    <section 
      id="sacrifice"
      ref={sectionRef}
      className="min-h-screen flex items-center bg-[#f8f5f2] py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div 
            ref={imageRef}
            className={`relative transition-all duration-800 ease-out will-change-transform ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[1.05]'
            }`}
            style={{ transform: `translateY(${offset}px)` }}
          >
            <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-sm overflow-hidden shadow-2xl">
              <img
                src="/images/bhagat-singh.jpg"
                alt="Bhagat Singh, Kakori train, and symbols of freedom"
                className="w-full h-full object-cover"
              />
              {/* Warm glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#c9a227]/10 via-transparent to-[#e85a24]/5" />
            </div>
            {/* Decorative frame */}
            <div className="absolute -inset-4 border border-[#c9a227]/30 rounded-sm pointer-events-none" />
          </div>

          {/* Text Column */}
          <div className="lg:pl-8">
            {/* Label */}
            <div
              className={`transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <span className="section-label">Sacrifice</span>
            </div>

            {/* Heading */}
            <h2
              className={`font-['Playfair_Display'] text-[40px] md:text-[48px] font-semibold text-[#2d2d2d] mt-4 mb-6 leading-[1.2] transition-all duration-600 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              Bhagat Singh & Nirbhaya
            </h2>

            {/* Body */}
            <p
              className={`font-['Inter'] text-[17px] md:text-[18px] text-[#2d2d2d] leading-[1.8] mb-8 transition-all duration-600 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              One smiled at the gallows; the other became a mirror to society. 
              They did not fight for a map; they fought for Justice.
            </p>

            {/* Quote */}
            <div
              className={`transition-all duration-600 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <blockquote className="quote-block text-[#c9a227]">
                "A life free from fear is the ultimate Right to Life."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
