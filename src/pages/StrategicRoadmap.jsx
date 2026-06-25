import BannerBackground from '../components/BannerBackground';

const ROADMAP = [
  { step: '01', title: 'NZQA Institute', text: 'Transitioning into a fully registered NZQA Institute.', accent: 'var(--custom-green)' },
  { step: '02', title: 'Mobile Application', text: 'Launching an advanced app with proprietary speech-evaluation metrics.', accent: 'var(--custom-blue)' },
  { step: '03', title: 'CEFR Qualifications', text: 'Delivering elite qualifications mapped directly to global CEFR benchmarks.', accent: 'var(--custom-green)' },
];

// Kept as its own page so each page stays close to one screen tall — that way the
// shared banner photo frames the same way it does on the home page.
export default function StrategicRoadmap() {
  return (
    <BannerBackground>
      <main className="relative z-20 w-full px-6 py-28 sm:py-36">
        {/* Intro */}
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-4 text-center mb-8 sm:mb-10">
          <span
            className="inline-flex items-center gap-2 text-[0.5rem] sm:text-[0.6rem] md:text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full"
            style={{ backgroundColor: 'var(--custom-blue)' }}
          >
            Strategic Roadmap
          </span>
          <h1 className="sans-font text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-black text-white leading-[1.3] tracking-tight">
            Strategic Road Map &amp; Future Scale
          </h1>
          <p className="text-white/85 text-[0.65rem] sm:text-xs md:text-sm lg:text-base font-medium max-w-2xl" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.35)' }}>
            Fluency Bridge Global Limited is scaling rapidly. Our strategic roadmap includes:
          </p>
        </div>

        {/* Timeline */}
        <section className="max-w-3xl mx-auto">
          <div className="glass-panel rounded-2xl sm:rounded-[2rem] px-7 sm:px-12 py-10 sm:py-12">
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
