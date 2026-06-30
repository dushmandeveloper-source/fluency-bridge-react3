import { useEffect } from 'react';
import gsap from 'gsap';

import BannerBackground from '../components/BannerBackground';
import Reveal from '../components/Reveal';
import ceoPhoto from '../assets/team-ceo.png';
import aboutBanner from '../assets/banner  new.png';

// About Us — glassmorphism (liquid-glass) text panels floating over the shared
// fixed banner image. BannerBackground (fixed) supplies the zooming photo, dark
// overlay and sparkle particles.

// HD, portrait-cropped photos so they fill the tall glass cards crisply without
// the zoomed-in "stretched" look a wide landscape source gave.
const INTRO_IMG = 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&h=1500&q=80';
const VALUES_IMG = 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&h=1500&q=80';

const STATS = [
  { value: '100%', label: 'Zero-Fee University Placement' },
  { value: 'NZ', label: 'Registered & Compliant' },
  { value: '15+', label: 'Years Industry Leadership' },
  { value: '2', label: 'Specialised Branches' },
];

const BRANCHES = [
  { name: 'Fluency Bridge', desc: 'Our elite frontline program focusing on high-performance English communication coaching for professionals and international students following the Natural English Method.', color: 'var(--custom-green)' },
  { name: 'NZ Academic Bridge', desc: 'Our specialised, dedicated branding branch established to execute all international student recruitment, expert tertiary placement, and career transition consultancy services.', color: 'var(--custom-blue-light)' },
];

const VISION_MISSION = [
  { label: 'Our Vision', color: 'var(--custom-green)', text: 'To establish a world-class global ecosystem that seamlessly integrates high-impact English coaching, transformational career coaching, and ethically compliant education consultancy — empowering individuals worldwide to confidently claim their place in the international market.' },
  { label: 'Our Mission', color: 'var(--custom-blue-light)', text: 'To democratize authentic language fluency through the Natural English Method while simultaneously delivering transparent, zero-fee university placement under our dedicated NZ Academic Bridge branch. We pledge to deploy an expert team of multidisciplinary professionals who uphold student rights above all else, operating in strict alignment with international codes of conduct and New Zealand’s rigorous compliance frameworks.' },
];

const ROADMAP = [
  { step: '01', title: 'NZQA Institute', text: 'Transitioning into a fully registered NZQA Institute.', accent: 'var(--custom-green)' },
  { step: '02', title: 'Mobile Application', text: 'An advanced app with proprietary speech-evaluation metrics.', accent: 'var(--custom-blue-light)' },
  { step: '03', title: 'CEFR Qualifications', text: 'Elite qualifications mapped directly to global CEFR benchmarks.', accent: 'var(--custom-green)' },
];

const COMPLIANCE = [
  'Fully compliant with New Zealand law',
  'Aligned with the London Statement (London Code)',
  'NZ Education (Pastoral Care) Guidelines for international students',
];

export default function AboutUs() {
  // GSAP: gentle perpetual float on the image cards + a slow zoom on the photos.
  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined;
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.gsap-float').forEach((el, i) => {
        gsap.to(el, { y: -14, duration: 3.6 + i * 0.4, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: i * 0.2 });
      });
      gsap.utils.toArray('.gsap-zoom').forEach((el, i) => {
        gsap.to(el, { scale: 1.07, duration: 7 + i, ease: 'sine.inOut', yoyo: true, repeat: -1 });
      });
      gsap.utils.toArray('.gsap-node').forEach((el, i) => {
        gsap.to(el, { scale: 1.12, duration: 1.8 + i * 0.2, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: i * 0.2 });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <BannerBackground
      fixed
      image={aboutBanner}
      ariaLabel="Students on a bridge with the New Zealand alps behind"
      overlayClassName="bg-gradient-to-b from-slate-900/70 via-slate-900/55 to-slate-900/80"
      particleCount={52}
    >
      <main className="bright-banner-glass relative z-20 w-full">

        {/* ---------- Hero ---------- */}
        <header className="px-6 pt-28 pb-6 sm:pt-32 sm:pb-8">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-5">
            <span className="inline-flex items-center gap-2 text-[0.6rem] sm:text-xs font-bold uppercase tracking-[0.25em] text-white px-4 py-1.5 rounded-full" style={{ backgroundColor: 'var(--custom-green)' }}>
              About Us
            </span>
            <h1 className="sans-font text-3xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight" style={{ textShadow: '0 4px 24px rgba(0,0,0,0.45)' }}>
              Architecting Global Futures
            </h1>
            <p className="text-white/90 text-sm sm:text-base md:text-lg font-medium max-w-2xl leading-relaxed" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
              Premium English coaching and ethical New Zealand education consultancy — driven by industry professionals.
            </p>
          </div>
        </header>

        {/* ---------- Who we are ---------- */}
        <section className="py-6 sm:py-9">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <Reveal className="reveal liquid-glass rounded-3xl p-8 sm:p-10 flex flex-col gap-5">
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--custom-green-light)' }}>Our Story</span>
              <h2 className="sans-font text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
                A premier New Zealand-based education enterprise
              </h2>
              <p className="text-white/95 text-sm sm:text-base leading-relaxed text-justify">
                Fluency Bridge Global Limited is a premier New Zealand-based, service-oriented enterprise. We bridge the
                gap between regional potential and global success through our parent corporate infrastructure, managing
                two distinct, specialised operational branches:
              </p>
              <div className="flex flex-col gap-4 mt-1">
                {BRANCHES.map((b) => (
                  <div key={b.name} className="flex gap-4 items-start">
                    <span className="mt-1 flex items-center justify-center w-8 h-8 rounded-xl shrink-0" style={{ backgroundColor: b.color }}>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <div>
                      <p className="font-black text-white text-sm sm:text-base">{b.name}</p>
                      <p className="text-white/90 text-xs sm:text-sm leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="reveal relative" delay={150}>
              <div className="gsap-float relative h-full">
                <div className="absolute -inset-3 rounded-[2rem] opacity-25 blur-2xl" style={{ background: 'linear-gradient(135deg, var(--custom-green), var(--custom-blue))' }} />
                <div className="liquid-glass relative h-full min-h-[18rem] rounded-[2rem] overflow-hidden shadow-2xl p-2.5">
                  <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
                    <img src={INTRO_IMG} alt="Premier university campus" className="absolute inset-0 w-full h-full object-cover gsap-zoom" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- Stats band ---------- */}
        <section className="py-6 sm:py-9">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal className="reveal liquid-glass rounded-3xl px-6 py-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {STATS.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="sans-font text-3xl sm:text-4xl font-black mb-1 text-white">{s.value}</p>
                    <p className="text-white/85 text-xs sm:text-sm font-semibold leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- Vision & Mission ---------- */}
        <section className="py-6 sm:py-9">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6 sm:gap-8">
            {VISION_MISSION.map((c, i) => (
              <Reveal key={c.label} delay={i * 140} className="reveal liquid-glass rounded-3xl p-8 sm:p-9 flex flex-col gap-4 overflow-hidden">
                <span className="absolute top-0 left-0 h-1.5 w-full" style={{ backgroundColor: c.color }} />
                <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: c.color }}>{c.label}</span>
                <p className="text-white/95 text-sm sm:text-base leading-relaxed text-justify">{c.text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------- Executive leadership ---------- */}
        <section className="py-6 sm:py-9">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <Reveal className="reveal relative order-2 lg:order-1">
              <div className="gsap-float relative h-full flex items-center justify-center">
                <div className="relative w-full max-w-sm mx-auto lg:mx-0">
                  <div className="absolute -inset-3 rounded-[2rem] opacity-25 blur-2xl" style={{ background: 'linear-gradient(135deg, var(--custom-blue), var(--custom-green))' }} />
                  <div className="liquid-glass relative rounded-[2rem] overflow-hidden shadow-2xl p-2.5">
                    <div className="relative w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden">
                      <img src={ceoPhoto} alt="Chathuranga Liyanage" className="absolute inset-0 w-full h-full object-cover object-top gsap-zoom" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal className="reveal liquid-glass rounded-3xl p-8 sm:p-10 flex flex-col gap-4 order-1 lg:order-2" delay={150}>
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--custom-green-light)' }}>Executive Leadership</span>
              <h2 className="sans-font text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">Chathuranga Liyanage</h2>
              <p className="font-bold text-sm" style={{ color: 'var(--custom-blue-light)' }}>Founder &amp; CEO — Fluency Bridge Global Limited</p>
              <p className="text-white/95 text-sm sm:text-base leading-relaxed text-justify">
                An accomplished Construction Project Manager in New Zealand&apos;s civil engineering sector and an alumnus
                of the University of Peradeniya (2011). Having personally navigated and conquered intense linguistic
                barriers early in his career, Chathuranga engineered the <strong className="text-white">Natural English
                Method</strong> — a systematic, first-principles framework designed to fast-track real-world
                communication dominance without academic stress.
              </p>
              <p className="text-white/80 text-xs sm:text-sm font-semibold">B.Sc. Civil Engineering (Hons) — University of Peradeniya (2011)</p>
            </Reveal>
          </div>
        </section>

        {/* ---------- Strategic roadmap — horizontal timeline ---------- */}
        <section className="py-6 sm:py-9 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal className="reveal text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--custom-blue-light)' }}>Looking Ahead</span>
              <h2 className="sans-font text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mt-2" style={{ textShadow: '0 2px 14px rgba(0,0,0,0.4)' }}>Strategic Road Map &amp; Future Scale</h2>
              <p className="text-white/90 text-sm sm:text-base mt-3">Fluency Bridge Global Limited is scaling rapidly. Our roadmap unfolds step by step:</p>
            </Reveal>

            <div className="relative">
              <div className="hidden md:block absolute top-7 left-[16.66%] right-[16.66%] h-1 rounded-full bg-white/20">
                <Reveal className="timeline-line h-full w-full rounded-full" style={{ background: 'linear-gradient(to right, var(--custom-green), var(--custom-blue-light), var(--custom-green))' }} />
              </div>

              <div className="grid md:grid-cols-3 gap-10 md:gap-8">
                {ROADMAP.map((item, i) => (
                  <Reveal key={item.step} delay={i * 220} className="reveal relative flex flex-col items-center text-center">
                    <span
                      className="gsap-node sans-font relative z-10 flex items-center justify-center w-14 h-14 rounded-full text-white font-black text-lg shadow-lg ring-4 ring-white/40"
                      style={{ backgroundColor: item.accent }}
                    >
                      {item.step}
                    </span>
                    <div className="liquid-glass mt-5 rounded-3xl p-7 w-full">
                      <h3 className="sans-font font-black text-white text-base sm:text-lg mb-2">{item.title}</h3>
                      <p className="text-white/90 text-xs sm:text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Integrity & compliance ---------- */}
        <section className="py-6 sm:py-9">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <Reveal className="reveal relative">
              <div className="gsap-float relative h-full">
                <div className="absolute -inset-3 rounded-[2rem] opacity-25 blur-2xl" style={{ background: 'linear-gradient(135deg, var(--custom-green), var(--custom-blue))' }} />
                <div className="liquid-glass relative h-full min-h-[18rem] rounded-[2rem] overflow-hidden shadow-2xl p-2.5">
                  <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
                    <img src={VALUES_IMG} alt="Students collaborating in a study group" className="absolute inset-0 w-full h-full object-cover gsap-zoom" />
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal className="reveal liquid-glass rounded-3xl p-8 sm:p-10 flex flex-col gap-5" delay={150}>
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--custom-green-light)' }}>Our Promise</span>
              <h2 className="sans-font text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">Uncompromised Integrity &amp; Official Compliance</h2>
              <p className="text-white/95 text-sm sm:text-base leading-relaxed text-justify">
                We operate with absolute transparency and are fully compliant with New Zealand law. We stand firmly by an
                ethical framework that strictly protects student rights. Our recruitment methodologies strictly align with
                global benchmarks, including the London Statement (London Code) and the New Zealand Education (Pastoral
                Care) Guidelines for international students.
              </p>
              <ul className="flex flex-col gap-3 mt-1">
                {COMPLIANCE.map((c) => (
                  <li key={c} className="flex gap-3 items-center">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full shrink-0" style={{ backgroundColor: 'var(--custom-green)' }}>
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <span className="text-white/95 text-sm font-medium">{c}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-2 rounded-2xl border-l-4 bg-white/10 p-4 sm:p-5" style={{ borderColor: 'var(--custom-blue-light)' }}>
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed text-justify">
                  <span className="font-bold text-white">Institutional Note:</span> We are currently finalised to
                  integrate official Immigration New Zealand (INZ) / Education New Zealand agency certifications to
                  officially badge our ecosystem for premium compliance.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- CTA band ---------- */}
        <section className="py-6 sm:py-10 pb-16 sm:pb-24">
          <div className="max-w-4xl mx-auto px-6">
            <Reveal className="reveal liquid-glass rounded-3xl p-9 sm:p-12 text-center flex flex-col items-center gap-5">
              <h2 className="sans-font text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">Meet the People Behind the Bridge</h2>
              <p className="text-white/90 text-sm sm:text-base max-w-xl">
                Our founder, advisory board and immigration partners — the professionals who walked the path.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-2">
                <a href="#/team" className="inline-flex items-center gap-2 text-white font-bold text-sm py-3 px-7 rounded-xl transition-all hover:opacity-90 interactive-el" style={{ backgroundColor: 'var(--custom-blue)' }}>
                  Meet Our Consultants
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
                <a href="#/contact" className="inline-flex items-center gap-2 bg-white/15 border border-white/40 text-white font-bold text-sm py-3 px-7 rounded-xl transition-all hover:bg-white/25 interactive-el">
                  Contact Us
                </a>
              </div>
            </Reveal>
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
