import BannerBackground from '../components/BannerBackground';
import ceoPhoto from '../assets/team-ceo.jpeg';

const ROADMAP = [
  { step: '01', title: 'NZQA Institute', text: 'A fully registered NZQA Institute.', accent: 'var(--custom-green)' },
  { step: '02', title: 'Mobile Application', text: 'Proprietary speech-evaluation metrics.', accent: 'var(--custom-blue)' },
  { step: '03', title: 'CEFR Qualifications', text: 'Mapped to global CEFR benchmarks.', accent: 'var(--custom-green)' },
];

// About Us as a true bento grid: mixed tile sizes, accent-filled colour tiles, a
// CEO image feature tile and a tall timeline — with a staggered entrance reveal.
export default function AboutUs() {
  let delay = 0;
  const rise = () => ({ animationDelay: `${(delay += 90)}ms` });

  return (
    <BannerBackground fixed>
      <main className="relative z-20 w-full px-6 py-28 sm:py-36">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 grid-flow-row-dense lg:auto-rows-[minmax(9rem,auto)]">

          {/* Intro — large feature tile */}
          <section className="liquid-glass motion-rise rounded-3xl p-7 sm:p-9 flex flex-col justify-center gap-3.5 sm:col-span-2 lg:col-span-2 lg:row-span-2" style={rise()}>
            <span className="absolute -top-10 -right-8 w-44 h-44 rounded-full blur-3xl opacity-40 animate-blob pointer-events-none" style={{ background: 'radial-gradient(circle, var(--custom-green), transparent 70%)' }} />
            <span className="absolute -bottom-12 -left-6 w-40 h-40 rounded-full blur-3xl opacity-30 animate-blob pointer-events-none" style={{ background: 'radial-gradient(circle, var(--custom-blue-light), transparent 70%)', animationDelay: '2s' }} />

            <span className="relative inline-flex w-fit items-center gap-2 text-[0.5rem] sm:text-[0.6rem] md:text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full" style={{ backgroundColor: 'var(--custom-green)' }}>
              About Us
            </span>
            <h1 className="relative sans-font text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white leading-[1.2] tracking-tight">
              Architecting Global Futures
            </h1>
            <p className="relative text-white/90 text-[0.7rem] sm:text-xs md:text-sm font-medium leading-relaxed max-w-md" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.35)' }}>
              Fluency Bridge Global Limited is a premier New Zealand-based enterprise bridging the gap between regional
              potential and global success — driven by industry professionals.
            </p>
          </section>

          {/* Vision — accent (green) tile */}
          <section className="motion-rise rounded-3xl p-6 sm:p-7 flex flex-col gap-2.5 text-white relative overflow-hidden sm:col-span-1 lg:col-span-2" style={{ ...rise(), background: 'linear-gradient(135deg, var(--custom-green), #347a52)' }}>
            <span className="text-[0.5rem] sm:text-[0.6rem] md:text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/80">Our Vision</span>
            <p className="text-white text-[0.62rem] sm:text-[0.7rem] md:text-xs font-medium leading-relaxed">
              A world-class global ecosystem integrating high-impact English coaching, transformational career coaching
              and ethically compliant education consultancy — empowering individuals to claim their place in the
              international market.
            </p>
          </section>

          {/* Mission — accent (blue) tile */}
          <section className="motion-rise rounded-3xl p-6 sm:p-7 flex flex-col gap-2.5 text-white relative overflow-hidden sm:col-span-1 lg:col-span-2" style={{ ...rise(), background: 'linear-gradient(135deg, var(--custom-blue), var(--custom-blue-dark))' }}>
            <span className="text-[0.5rem] sm:text-[0.6rem] md:text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/80">Our Mission</span>
            <p className="text-white text-[0.62rem] sm:text-[0.7rem] md:text-xs font-medium leading-relaxed">
              To democratize authentic fluency through the Natural English Method while delivering transparent, zero-fee
              university placement — upholding student rights in strict alignment with NZ's compliance frameworks.
            </p>
          </section>

          {/* Executive Leadership — image feature tile */}
          <section className="liquid-glass motion-rise rounded-3xl overflow-hidden flex flex-col sm:col-span-2 lg:col-span-2 lg:row-span-2" style={rise()}>
            <div className="relative h-40 sm:h-48 lg:h-auto lg:flex-1 min-h-[10rem] overflow-hidden">
              <img src={ceoPhoto} alt="Chathuranga Liyanage" className="absolute inset-0 w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <p className="sans-font text-white font-black text-sm sm:text-base leading-tight">Chathuranga Liyanage</p>
                <p className="text-[0.55rem] sm:text-[0.65rem] font-bold uppercase tracking-wider" style={{ color: 'var(--custom-green-light)' }}>Founder &amp; CEO</p>
              </div>
            </div>
            <div className="relative p-6 sm:p-7 flex flex-col gap-2">
              <h2 className="sans-font text-xs sm:text-base font-black text-white">Executive Leadership Profile</h2>
              <p className="text-white/85 text-[0.6rem] sm:text-[0.7rem] md:text-xs font-medium leading-relaxed">
                An accomplished Construction Project Manager and University of Peradeniya alumnus (2011) who engineered
                the <strong className="text-white">Natural English Method</strong> — a first-principles framework that
                fast-tracks real-world communication without academic stress.
              </p>
            </div>
          </section>

          {/* Strategic Roadmap — tall timeline tile */}
          <section className="liquid-glass motion-rise rounded-3xl p-7 sm:p-8 flex flex-col gap-4 sm:col-span-2 lg:col-span-2 lg:row-span-2" style={rise()}>
            <div className="relative flex flex-col gap-1">
              <h2 className="sans-font text-xs sm:text-base md:text-lg font-black text-white">Strategic Road Map &amp; Future Scale</h2>
              <p className="text-white/80 text-[0.6rem] sm:text-[0.7rem] md:text-xs font-medium">Fluency Bridge Global Limited is scaling rapidly:</p>
            </div>
            <ol className="relative flex flex-col">
              {ROADMAP.map((item, idx) => (
                <li key={item.step} className="flex gap-3 sm:gap-4">
                  <div className="flex flex-col items-center">
                    <span className="sans-font flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full text-white font-black text-[0.65rem] sm:text-xs shadow-lg shrink-0" style={{ backgroundColor: item.accent }}>
                      {item.step}
                    </span>
                    {idx < ROADMAP.length - 1 && <span className="w-0.5 flex-1 my-1 rounded-full bg-white/30" />}
                  </div>
                  <div className={idx < ROADMAP.length - 1 ? 'pb-5 sm:pb-6 pt-0.5 flex flex-col gap-0.5' : 'pt-0.5 flex flex-col gap-0.5'}>
                    <h3 className="sans-font font-black text-white text-[0.72rem] sm:text-sm leading-tight">{item.title}</h3>
                    <p className="text-white/80 text-[0.58rem] sm:text-[0.68rem] font-medium leading-relaxed">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Integrity value tile */}
          <section className="liquid-glass motion-rise rounded-3xl p-6 sm:p-7 flex flex-col justify-center gap-2 sm:col-span-2 lg:col-span-2" style={rise()}>
            <div className="relative flex items-center gap-2.5">
              <span className="flex items-center justify-center w-9 h-9 rounded-xl shrink-0" style={{ backgroundColor: 'var(--custom-green)' }}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <h2 className="sans-font text-xs sm:text-base font-black text-white">Uncompromised Integrity</h2>
            </div>
            <p className="relative text-white/85 text-[0.6rem] sm:text-[0.7rem] md:text-xs font-medium leading-relaxed">
              Student rights first — fully compliant with New Zealand law and aligned with the London Code &amp; NZ
              Pastoral Care guidelines.
            </p>
          </section>

          {/* CTA — full-width tile */}
          <section className="liquid-glass motion-rise rounded-3xl p-7 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left sm:col-span-2 lg:col-span-4" style={rise()}>
            <div className="relative flex flex-col gap-1">
              <h2 className="sans-font text-xs sm:text-base md:text-lg font-black text-white">Meet the People Behind the Bridge</h2>
              <p className="text-white/80 text-[0.62rem] sm:text-[0.7rem] md:text-xs font-medium">
                Our founder, advisory board and immigration partners — the professionals who walked the path.
              </p>
            </div>
            <a
              href="#/team"
              className="relative inline-flex items-center gap-2 text-white font-bold text-xs sm:text-sm py-2.5 sm:py-3 px-6 sm:px-7 rounded-xl transition-all hover:opacity-90 interactive-el shrink-0"
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
