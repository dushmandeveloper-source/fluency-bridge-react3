import BannerBackground from '../components/BannerBackground';

const ROADMAP = [
  { step: '01', title: 'NZQA Institute', text: 'Transitioning into a fully registered NZQA Institute.', accent: 'var(--custom-green)' },
  { step: '02', title: 'Mobile Application', text: 'An advanced app with proprietary speech-evaluation metrics.', accent: 'var(--custom-blue)' },
  { step: '03', title: 'CEFR Qualifications', text: 'Elite qualifications mapped directly to global CEFR benchmarks.', accent: 'var(--custom-green)' },
];

// About Us as a liquid-glass bento grid with a staggered entrance reveal. Each
// tile is a frosted glass panel; tiles in a row stretch to equal height.
export default function AboutUs() {
  // Incremental delay so the tiles cascade in
  let delay = 0;
  const rise = () => ({ animationDelay: `${(delay += 90)}ms` });

  return (
    <BannerBackground fixed>
      <main className="relative z-20 w-full px-6 py-28 sm:py-36">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-5 auto-rows-auto items-stretch">

          {/* Intro */}
          <section className="liquid-glass motion-rise rounded-3xl p-7 sm:p-10 flex flex-col justify-center gap-4 sm:col-span-2 lg:col-span-4 lg:row-span-2" style={rise()}>
            {/* Drifting liquid blobs */}
            <span className="absolute -top-10 -right-8 w-44 h-44 rounded-full blur-3xl opacity-40 animate-blob pointer-events-none" style={{ background: 'radial-gradient(circle, var(--custom-green), transparent 70%)' }} />
            <span className="absolute -bottom-12 -left-6 w-40 h-40 rounded-full blur-3xl opacity-30 animate-blob pointer-events-none" style={{ background: 'radial-gradient(circle, var(--custom-blue-light), transparent 70%)', animationDelay: '2s' }} />

            <span
              className="relative inline-flex w-fit items-center gap-2 text-[0.5rem] sm:text-[0.6rem] md:text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full"
              style={{ backgroundColor: 'var(--custom-green)' }}
            >
              About Us
            </span>
            <h1 className="relative sans-font text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black text-white leading-[1.25] tracking-tight">
              Architecting Global Futures
            </h1>
            <p className="relative text-white/90 text-[0.7rem] sm:text-xs md:text-sm lg:text-base font-medium leading-relaxed max-w-xl" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.35)' }}>
              Fluency Bridge Global Limited is a premier New Zealand-based enterprise bridging the gap between regional
              potential and global success — driven by industry professionals.
            </p>
          </section>

          {/* Vision */}
          <section className="liquid-glass motion-rise rounded-3xl p-6 sm:p-7 flex flex-col gap-2.5 sm:col-span-1 lg:col-span-2" style={rise()}>
            <span className="relative text-[0.5rem] sm:text-[0.6rem] md:text-[0.65rem] font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--custom-green-light)' }}>
              Our Vision
            </span>
            <p className="relative text-white/90 text-[0.62rem] sm:text-[0.7rem] md:text-xs font-medium leading-relaxed">
              A world-class global ecosystem integrating high-impact English coaching, transformational career coaching
              and ethically compliant education consultancy — empowering individuals to claim their place in the
              international market.
            </p>
          </section>

          {/* Mission */}
          <section className="liquid-glass motion-rise rounded-3xl p-6 sm:p-7 flex flex-col gap-2.5 sm:col-span-1 lg:col-span-2" style={rise()}>
            <span className="relative text-[0.5rem] sm:text-[0.6rem] md:text-[0.65rem] font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--custom-blue-light)' }}>
              Our Mission
            </span>
            <p className="relative text-white/90 text-[0.62rem] sm:text-[0.7rem] md:text-xs font-medium leading-relaxed">
              To democratize authentic fluency through the Natural English Method while delivering transparent, zero-fee
              university placement — upholding student rights in strict alignment with NZ's compliance frameworks.
            </p>
          </section>

          {/* Executive Leadership Profile */}
          <section className="liquid-glass motion-rise rounded-3xl p-7 sm:p-9 flex flex-col gap-3 sm:col-span-2 lg:col-span-3" style={rise()}>
            <h2 className="relative sans-font text-xs sm:text-base md:text-lg font-black text-white">Executive Leadership Profile</h2>
            <p className="relative text-white/85 text-[0.62rem] sm:text-[0.7rem] md:text-xs font-medium leading-relaxed">
              Founded by <strong className="text-white">Chathuranga Liyanage</strong>, CEO of Fluency Bridge Global
              Limited — an accomplished Construction Project Manager in New Zealand's civil engineering sector and an
              alumnus of the University of Peradeniya (2011). Having conquered intense linguistic barriers early in his
              career, he engineered the <strong className="text-white">Natural English Method</strong>: a systematic,
              first-principles framework that fast-tracks real-world communication without academic stress.
            </p>
          </section>

          {/* Strategic Roadmap — timeline */}
          <section className="liquid-glass motion-rise rounded-3xl p-7 sm:p-9 flex flex-col gap-5 sm:col-span-2 lg:col-span-3" style={rise()}>
            <div className="relative flex flex-col gap-1.5">
              <h2 className="sans-font text-xs sm:text-base md:text-lg font-black text-white">Strategic Road Map &amp; Future Scale</h2>
              <p className="text-white/80 text-[0.6rem] sm:text-[0.7rem] md:text-xs font-medium">Fluency Bridge Global Limited is scaling rapidly:</p>
            </div>
            <ol className="relative flex flex-col">
              {ROADMAP.map((item, idx) => (
                <li key={item.step} className="flex gap-3 sm:gap-4">
                  <div className="flex flex-col items-center">
                    <span
                      className="sans-font flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full text-white font-black text-[0.65rem] sm:text-xs shadow-lg shrink-0"
                      style={{ backgroundColor: item.accent }}
                    >
                      {item.step}
                    </span>
                    {idx < ROADMAP.length - 1 && <span className="w-0.5 flex-1 my-1 rounded-full bg-white/30" />}
                  </div>
                  <div className={idx < ROADMAP.length - 1 ? 'pb-5 sm:pb-6 pt-0.5 flex flex-col gap-0.5' : 'pt-0.5 flex flex-col gap-0.5'}>
                    <h3 className="sans-font font-black text-white text-[0.7rem] sm:text-xs md:text-sm leading-tight">{item.title}</h3>
                    <p className="text-white/80 text-[0.55rem] sm:text-[0.65rem] md:text-[0.7rem] font-medium leading-relaxed">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* CTA */}
          <section className="liquid-glass motion-rise rounded-3xl p-7 sm:p-9 flex flex-col items-center justify-center text-center gap-3 sm:col-span-2 lg:col-span-6" style={rise()}>
            <h2 className="relative sans-font text-xs sm:text-base md:text-lg font-black text-white">Meet the People Behind the Bridge</h2>
            <p className="relative text-white/80 text-[0.62rem] sm:text-[0.7rem] md:text-xs font-medium max-w-xl">
              Our founder, advisory board and immigration partners — the professionals who walked the path.
            </p>
            <a
              href="#/team"
              className="relative inline-flex items-center gap-2 text-white font-bold text-xs sm:text-sm py-2.5 sm:py-3 px-6 sm:px-7 rounded-xl transition-all hover:opacity-90 interactive-el mt-1"
              style={{ backgroundColor: 'var(--custom-blue)' }}
            >
              Meet Our Team
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </section>

        </div>
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
