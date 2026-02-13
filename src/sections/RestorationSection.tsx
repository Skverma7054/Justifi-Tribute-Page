import { useScrollAnimation, useParallax } from '@/hooks/useScrollAnimation';

export function RestorationSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.25 });
  const { ref: imageRef, offset } = useParallax(0.3);

  return (
    <section
      id="restoration"
      ref={sectionRef}
      className="min-h-screen flex items-center bg-[#f5bc67] py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div
            ref={imageRef}
            className={`relative transition-all duration-800 ease-out will-change-transform ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[1.05]'
            }`}
            style={{ transform: `translateY(${offset}px)` }}
          >
            <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-sm overflow-hidden shadow-2xl">
              <img
                src="/images/shivaji-savarkar.jpg"
                alt="Shivaji Maharaj on horseback and Veer Savarkar"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
            <div className="absolute -inset-4 border border-[#9a4f10]/30 rounded-sm pointer-events-none" />
          </div>

          <div className="lg:pl-8 story-card rounded-md p-6 md:p-8">
            <div
              className={`transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <span className="section-label">Chapter II · Restoration</span>
            </div>

            <h2
              className={`font-['Playfair_Display'] text-[40px] md:text-[48px] font-semibold text-[#2d2d2d] mt-4 mb-6 leading-[1.2] transition-all duration-600 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              Chhatrapati Shivaji Maharaj & Savarkar
            </h2>

            <p
              className={`font-['Inter'] text-[17px] md:text-[18px] text-[#2d2d2d] leading-[1.8] mb-8 transition-all duration-600 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              In one era, a throne was reclaimed with strategy and valor. In another, a chained voice
              kept writing freedom into the future. Their story reminds us that Swaraj begins in the mind
              long before it arrives in the world.
            </p>

            <div
              className={`transition-all duration-600 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <blockquote className="quote-block text-[#7f4f11]">
                "The cry for Swaraj was never temporary—it was civilizational memory awakening."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
