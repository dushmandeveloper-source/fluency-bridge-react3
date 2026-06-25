import BannerBackground from '../components/BannerBackground';

// Company overview kept to ~one screen tall (so the banner frames like home):
// hero intro, Vision & Mission, Executive Leadership Profile, then CTAs across to
// the Strategic Roadmap and Team pages. Typography mirrors the home page.
export default function AboutUs() {
  return (
    <BannerBackground fixed>
      <main className="relative z-20 w-full px-6 py-28 sm:py-36">
        {/* Hero intro panel */}
        <section className="max-w-3xl mx-auto">
          <div className="glass-panel rounded-2xl sm:rounded-[2rem] px-7 sm:px-12 py-12 sm:py-16 text-center flex flex-col items-center gap-5">
            <span
              className="inline-flex items-center gap-2 text-[0.5rem] sm:text-[0.6rem] md:text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full"
              style={{ backgroundColor: 'var(--custom-green)' }}
            >
              About Us
            </span>

            <h1 className="sans-font text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-black text-white leading-[1.3] tracking-tight">
              Architecting Global Futures
            </h1>

            <p
              className="text-white/90 text-[0.65rem] sm:text-xs md:text-sm lg:text-base font-medium leading-relaxed max-w-2xl"
              style={{ textShadow: '0 2px 6px rgba(0,0,0,0.35)' }}
            >
              Fluency Bridge Global Limited is a premier New Zealand-based enterprise bridging the gap between regional
              potential and global success — driven by industry professionals.
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="max-w-3xl mx-auto mt-8 sm:mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            <div className="glass-panel rounded-2xl sm:rounded-[2rem] px-6 sm:px-8 py-7 sm:py-9 flex flex-col gap-3">
              <span className="text-[0.5rem] sm:text-[0.6rem] md:text-[0.65rem] font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--custom-green-light)' }}>
                Our Vision
              </span>
              <p className="text-white/90 text-[0.65rem] sm:text-xs md:text-sm font-medium leading-relaxed">
                To establish a world-class global ecosystem that seamlessly integrates high-impact English coaching,
                transformational career coaching, and ethically compliant education consultancy — empowering individuals
                worldwide to confidently claim their place in the international market.
              </p>
            </div>
            <div className="glass-panel rounded-2xl sm:rounded-[2rem] px-6 sm:px-8 py-7 sm:py-9 flex flex-col gap-3">
              <span className="text-[0.5rem] sm:text-[0.6rem] md:text-[0.65rem] font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--custom-blue-light)' }}>
                Our Mission
              </span>
              <p className="text-white/90 text-[0.65rem] sm:text-xs md:text-sm font-medium leading-relaxed">
                To democratize authentic language fluency through the Natural English Method while simultaneously
                delivering transparent, zero-fee university placement under our dedicated NZ Academic Bridge branch. We
                pledge to deploy an expert team of multidisciplinary professionals who uphold student rights above all
                else, operating in strict alignment with international codes of conduct and New Zealand's rigorous
                compliance frameworks.
              </p>
            </div>
          </div>
        </section>

        {/* Executive Leadership Profile */}
        <section className="max-w-3xl mx-auto mt-8 sm:mt-10">
          <div className="glass-panel rounded-2xl sm:rounded-[2rem] px-7 sm:px-12 py-10 sm:py-12 flex flex-col gap-4">
            <h2 className="sans-font text-xs sm:text-base md:text-lg font-black text-white">Executive Leadership Profile</h2>
            <p className="text-white/85 text-[0.65rem] sm:text-xs md:text-sm font-medium leading-relaxed">
              Founded by <strong className="text-white">Chathuranga Liyanage</strong>, the CEO of Fluency Bridge Global
              Limited. He is an accomplished Construction Project Manager in New Zealand's civil engineering sector and an
              alumnus of the University of Peradeniya (2011). Having personally navigated and conquered intense linguistic
              barriers early in his career, Chathuranga engineered the <strong className="text-white">Natural English
              Method</strong> — a systematic, first-principles framework designed to fast-track real-world communication
              dominance without academic stress.
            </p>
          </div>
        </section>

        {/* CTAs to the roadmap & team pages */}
        <section className="max-w-3xl mx-auto mt-8 sm:mt-10 text-center">
          <div className="glass-panel rounded-2xl sm:rounded-[2rem] px-7 sm:px-12 py-10 flex flex-col items-center gap-3">
            <h2 className="sans-font text-xs sm:text-base md:text-lg font-black text-white">Where We're Headed &amp; Who's Behind It</h2>
            <p className="text-white/80 text-[0.65rem] sm:text-xs md:text-sm font-medium max-w-xl">
              Explore our strategic roadmap, then meet the people who make it happen.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-1">
              <a
                href="#/roadmap"
                className="inline-flex items-center gap-2 text-white font-bold text-xs sm:text-sm py-2.5 sm:py-3 px-6 sm:px-7 rounded-lg sm:rounded-xl transition-all hover:opacity-90 interactive-el"
                style={{ backgroundColor: 'var(--custom-green)' }}
              >
                Strategic Roadmap
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="#/team"
                className="inline-flex items-center gap-2 text-white font-bold text-xs sm:text-sm py-2.5 sm:py-3 px-6 sm:px-7 rounded-lg sm:rounded-xl transition-all hover:opacity-90 interactive-el"
                style={{ backgroundColor: 'var(--custom-blue)' }}
              >
                Meet Our Team
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Fades the banner image into the footer's colour so the seam isn't visible */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 sm:h-56 pointer-events-none z-10"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, rgba(0, 49, 133, 0.2) 50%, rgba(0, 49, 133, 0.55) 70%, rgba(0, 49, 133, 0.85) 88%, #002c78 100%)',
        }}
      />
    </BannerBackground>
  );
}
