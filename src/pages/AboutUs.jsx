import BannerBackground from '../components/BannerBackground';

const ROADMAP = [
  { step: '01', title: 'NZQA Institute', text: 'Transitioning into a fully registered NZQA Institute.', accent: 'var(--custom-green)' },
  { step: '02', title: 'Mobile Application', text: 'Launching an advanced app with proprietary speech-evaluation metrics.', accent: 'var(--custom-blue)' },
  { step: '03', title: 'CEFR Qualifications', text: 'Delivering elite qualifications mapped directly to global CEFR benchmarks.', accent: 'var(--custom-green)' },
];

// Company overview: hero intro, Vision & Mission, Executive Leadership Profile,
// Strategic Roadmap timeline, then a CTA across to the Team page. The fixed
// viewport banner keeps the photo framed like home however tall the page gets.
export default function AboutUs() {
  return (
    <BannerBackground fixed>
      <main className="relative z-20 w-full px-6 py-28 sm:py-36">
        {/* Hero intro — text directly on the banner, no card (matches the Team page) */}
        <section className="max-w-3xl mx-auto text-center flex flex-col items-center gap-4 sm:gap-5">
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

        {/* Strategic Road Map & Future Scale — vertical timeline */}
        <section className="max-w-3xl mx-auto mt-8 sm:mt-10">
          <div className="glass-panel rounded-2xl sm:rounded-[2rem] px-7 sm:px-12 py-10 sm:py-12 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="sans-font text-xs sm:text-base md:text-lg font-black text-white">Strategic Road Map &amp; Future Scale</h2>
              <p className="text-white/85 text-[0.65rem] sm:text-xs md:text-sm font-medium leading-relaxed">
                Fluency Bridge Global Limited is scaling rapidly. Our strategic roadmap includes:
              </p>
            </div>

            <ol className="flex flex-col">
              {ROADMAP.map((item, idx) => (
                <li key={item.step} className="flex gap-4 sm:gap-5">
                  {/* Rail: solid colour node for high contrast + connecting line */}
                  <div className="flex flex-col items-center">
                    <span
                      className="sans-font flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full text-white font-black text-[0.7rem] sm:text-xs shadow-lg shrink-0"
                      style={{ backgroundColor: item.accent }}
                    >
                      {item.step}
                    </span>
                    {idx < ROADMAP.length - 1 && <span className="w-0.5 flex-1 my-1.5 rounded-full bg-white/30" />}
                  </div>

                  {/* Content */}
                  <div className={idx < ROADMAP.length - 1 ? 'pb-7 sm:pb-8 pt-1 flex flex-col gap-1' : 'pt-1 flex flex-col gap-1'}>
                    <h3 className="sans-font font-black text-white text-xs sm:text-sm md:text-base leading-tight">{item.title}</h3>
                    <p className="text-white/80 text-[0.6rem] sm:text-[0.7rem] md:text-xs font-medium leading-relaxed">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CTA to the team page */}
        <section className="max-w-3xl mx-auto mt-8 sm:mt-10 text-center">
          <div className="glass-panel rounded-2xl sm:rounded-[2rem] px-7 sm:px-12 py-10 flex flex-col items-center gap-3">
            <h2 className="sans-font text-xs sm:text-base md:text-lg font-black text-white">Meet the People Behind the Bridge</h2>
            <p className="text-white/80 text-[0.65rem] sm:text-xs md:text-sm font-medium max-w-xl">
              Our founder, advisory board and immigration partners — the professionals who walked the path.
            </p>
            <a
              href="#/team"
              className="inline-flex items-center gap-2 text-white font-bold text-xs sm:text-sm py-2.5 sm:py-3 px-6 sm:px-7 rounded-lg sm:rounded-xl transition-all hover:opacity-90 interactive-el mt-1"
              style={{ backgroundColor: 'var(--custom-blue)' }}
            >
              Meet Our Team
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
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
