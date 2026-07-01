import { useEffect } from 'react';
import gsap from 'gsap';

import BannerBackground from '../components/BannerBackground';
import Reveal from '../components/Reveal';
import homeBanner from '../assets/banner.png';
import fluencyBridgeImage from '../assets/Fluency Bridge.png';
import nzAcademicBridgeImage from '../assets/NZ Academic Bridge.png';
import fluencyBridgeLogo from '../assets/fluency-bridge-logo.png';
import nzAcademicBridgeLogo from '../assets/nz-academic-bridge-logo.png';

// Home — glassmorphism (liquid-glass) panels floating over the shared fixed home
// banner image, mirroring the About Us layout. BannerBackground (fixed) supplies
// the zooming photo, dark overlay and sparkle particles; every card is a
// transparent frosted-glass panel.

const PROGRAMS = [
  {
    id: 'fluency-bridge',
    href: '#/fluency-bridge',
    image: fluencyBridgeImage,
    logo: fluencyBridgeLogo,
    logoAlt: 'Fluency Bridge logo',
    badge: { value: '100%', label: 'Natural Method' },
    title: 'Fluency Bridge',
    description:
      'Elite frontline program focusing on high-performance English communication coaching for professionals and international students.',
    buttonText: 'Explore coaching',
    color: 'var(--custom-green)',
  },
  {
    id: 'nz-academic-bridge',
    href: '#/nz-academic-bridge',
    image: nzAcademicBridgeImage,
    logo: nzAcademicBridgeLogo,
    logoAlt: 'NZ Academic Bridge logo',
    badge: { value: '100%', label: 'Free Placement' },
    title: 'NZ Academic Bridge',
    description:
      'Dedicated branding branch to execute international student recruitment, tertiary placement, and career transition consultancy.',
    buttonText: 'Explore consultancy',
    color: 'var(--custom-blue-light)',
  },
];

const STATS = [
  { value: '500+', label: 'Students Guided' },
  { value: '95%', label: 'Success Rate' },
  { value: '100%', label: 'Ethical Guidance' },
  { value: '20+', label: 'Partner Institutions' },
  { value: '5+', label: 'Years Experience' },
];

const FEATURES = [
  {
    title: 'Expert Guidance',
    text: 'Qualified coaches and education consultants with years of industry experience.',
    color: 'var(--custom-green)',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 00-9.288 0M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />,
  },
  {
    title: 'Ethical & Transparent',
    text: 'We provide honest advice with your best interests at heart.',
    color: 'var(--custom-blue-light)',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12.75L11.25 15 15 9.75M21 12c0 4.556-3.04 8.25-8.965 9.75C7.04 20.25 4 16.556 4 12V6.75l8-3.75 8 3.75V12z" />,
  },
  {
    title: 'NZ Specialists',
    text: 'Deep knowledge of the New Zealand education system and pathways.',
    color: 'var(--custom-green)',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3 7.5 7.03 7.5 12 9.515 21 12 21zM3 12h18" />,
  },
  {
    title: 'Student Focused',
    text: 'Personalised support every step of the way to your success.',
    color: 'var(--custom-blue-light)',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />,
  },
];

const TESTIMONIALS = [
  {
    quote: 'Fluency Bridge helped me build real confidence in English and reach the IELTS score I needed for university.',
    name: 'IELTS Student',
    role: 'University Applicant',
  },
  {
    quote: 'The team guided me through every step of the placement and visa process. Professional and trustworthy from day one.',
    name: 'NZ Academic Bridge Client',
    role: 'International Student',
  },
  {
    quote: 'The coaching sessions are practical and engaging — my confidence speaking English improved so much.',
    name: 'Fluency Bridge Student',
    role: 'English Coaching Programme',
  },
];

const PARTNERS = ['The University of Auckland', 'AUT', 'Massey University', 'Unitec', 'NZQA'];

function Stars() {
  return (
    <div className="flex gap-0.5" style={{ color: 'var(--custom-green-light)' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M10 1.5l2.59 5.86 6.41.56-4.84 4.27 1.46 6.31L10 15.42l-5.62 3.08 1.46-6.31L1 7.92l6.41-.56L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Home2() {
  // GSAP: gentle perpetual float on the image cards + a slow zoom on the photos,
  // matching the About Us motion language.
  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined;
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.gsap-float').forEach((el, i) => {
        gsap.to(el, { y: -14, duration: 3.6 + i * 0.4, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: i * 0.2 });
      });
      gsap.utils.toArray('.gsap-zoom').forEach((el, i) => {
        gsap.to(el, { scale: 1.07, duration: 7 + i, ease: 'sine.inOut', yoyo: true, repeat: -1 });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <BannerBackground
      fixed
      image={homeBanner}
      overlayClassName="bg-gradient-to-b from-slate-900/70 via-slate-900/55 to-slate-900/80"
      particleCount={52}
    >
      <main className="bright-banner-glass relative z-20 w-full">

        {/* ---------- Hero ---------- */}
        <header className="px-6 pt-24 pb-3 sm:pt-28 sm:pb-4">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-5">
            <p className="text-white/90 text-sm sm:text-base md:text-lg font-medium max-w-2xl leading-relaxed" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
              Premium English coaching and ethical New Zealand education consultancy — driven by industry professionals.
            </p>
          </div>
        </header>

        {/* ---------- Programs ---------- */}
        <section className="pt-2 pb-6 sm:pt-3 sm:pb-9">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {PROGRAMS.map((p, i) => (
              <Reveal key={p.id} delay={i * 150} className="reveal relative">
                <div className="gsap-float relative h-full">
                  <div className="absolute -inset-3 rounded-[2rem] opacity-25 blur-2xl" style={{ background: 'linear-gradient(135deg, var(--custom-green), var(--custom-blue))' }} />
                  <div className="liquid-glass relative h-full rounded-[2rem] shadow-2xl p-2.5 flex flex-col">
                    <div className="relative w-full h-32 sm:h-40 rounded-[1.5rem] overflow-hidden shrink-0">
                      <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover gsap-zoom" />
                      <div className="absolute top-3 right-3 text-white px-3 py-2 rounded-xl shadow-lg text-center" style={{ backgroundColor: p.color }}>
                        <span className="block text-lg sm:text-xl font-black leading-none">{p.badge.value}</span>
                        <span className="block text-[8px] sm:text-[9px] uppercase tracking-wider font-bold leading-tight">{p.badge.label}</span>
                      </div>
                      <div className="absolute top-3 left-3 w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
                        <img src={p.logo} alt={p.logoAlt} className="w-full h-full object-contain p-1.5" />
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 px-5 sm:px-6 pt-4 pb-4 gap-2.5">
                      <h3 className="sans-font text-xl sm:text-2xl font-black text-white leading-tight">{p.title}</h3>
                      <p className="text-white/90 text-sm sm:text-base leading-relaxed text-justify flex-1">{p.description}</p>
                      <a
                        href={p.href}
                        className="mt-1 inline-flex items-center justify-center gap-2 text-white font-bold text-sm py-3 px-6 rounded-xl transition-all hover:opacity-90 interactive-el"
                        style={{ backgroundColor: p.color }}
                      >
                        {p.buttonText}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------- Stats band ---------- */}
        <section className="py-6 sm:py-9">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal className="reveal liquid-glass rounded-3xl px-6 py-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
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

        {/* ---------- Why choose us ---------- */}
        <section className="py-6 sm:py-9">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal className="reveal text-center max-w-2xl mx-auto mb-8 sm:mb-10">
              <h2 className="sans-font text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight" style={{ textShadow: '0 2px 14px rgba(0,0,0,0.4)' }}>Why Choose Fluency Bridge?</h2>
              <span className="block w-14 h-1 rounded-full mx-auto my-4" style={{ backgroundColor: 'var(--custom-green)' }} />
              <p className="text-white/90 text-sm sm:text-base">We combine expertise, experience and genuine care to help you achieve your dreams.</p>
            </Reveal>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {FEATURES.map((f, i) => (
                <Reveal key={f.title} delay={i * 100} className="reveal liquid-glass rounded-3xl p-5 sm:p-7 flex flex-col items-center text-center gap-3">
                  <span className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.14)', color: f.color }}>
                    <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      {f.icon}
                    </svg>
                  </span>
                  <h4 className="sans-font font-black text-white text-xs sm:text-base">{f.title}</h4>
                  <p className="text-white/85 text-[0.65rem] sm:text-sm leading-relaxed">{f.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Testimonials ---------- */}
        <section className="py-6 sm:py-9">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal className="reveal text-center max-w-2xl mx-auto mb-8 sm:mb-10">
              <h2 className="sans-font text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight" style={{ textShadow: '0 2px 14px rgba(0,0,0,0.4)' }}>What Our Students Say</h2>
              <span className="block w-14 h-1 rounded-full mx-auto mt-4" style={{ backgroundColor: 'var(--custom-blue-light)' }} />
            </Reveal>

            <div className="grid md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={t.name} delay={i * 120} className="reveal liquid-glass rounded-3xl p-6 sm:p-7 flex flex-col gap-4">
                  <Stars />
                  <p className="text-white/90 text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-2 border-t border-white/20">
                    <span
                      className="flex items-center justify-center w-9 h-9 rounded-full text-white font-black text-xs shrink-0"
                      style={{ backgroundColor: i % 2 === 0 ? 'var(--custom-green)' : 'var(--custom-blue)' }}
                    >
                      {t.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
                    </span>
                    <div>
                      <p className="font-bold text-white text-xs sm:text-sm">{t.name}</p>
                      <p className="text-white/60 text-[0.65rem] sm:text-xs">{t.role}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Partner institutions ---------- */}
        <section className="py-6 sm:py-9">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal className="reveal liquid-glass rounded-3xl px-6 py-8 sm:py-9">
              <h2 className="sans-font text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight text-center mb-6">Our Partner Institutions</h2>
              <div className="marquee-mask overflow-hidden">
                <div className="animate-marquee flex w-max items-center">
                  {[...PARTNERS, ...PARTNERS].map((name, i) => (
                    <span
                      key={i}
                      className="sans-font font-black text-white/70 text-sm sm:text-lg uppercase tracking-wide whitespace-nowrap px-7 sm:px-10 hover:text-white transition-colors"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- CTA band ---------- */}
        <section className="py-6 sm:py-10 pb-16 sm:pb-24">
          <div className="max-w-4xl mx-auto px-6">
            <Reveal className="reveal liquid-glass rounded-3xl p-9 sm:p-12 text-center flex flex-col items-center gap-5">
              <h2 className="sans-font text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">Ready to Begin Your Journey?</h2>
              <p className="text-white/90 text-sm sm:text-base max-w-xl">
                Book a free consultation with our experts today and take the first step toward your global future.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-2">
                <a href="#/contact" className="inline-flex items-center gap-2 text-white font-bold text-sm py-3 px-7 rounded-xl transition-all hover:opacity-90 interactive-el" style={{ backgroundColor: 'var(--custom-blue)' }}>
                  Book Free Consultation
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
                <a href="#/team" className="inline-flex items-center gap-2 bg-white/15 border border-white/40 text-white font-bold text-sm py-3 px-7 rounded-xl transition-all hover:bg-white/25 interactive-el">
                  Meet Our Consultants
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
