import { useEffect, useState } from 'react';

import Reveal from '../components/Reveal';
import ceoPhoto from '../assets/team-ceo.jpeg';
import aboutBanner from '../assets/abt banner.png';

// Section imagery (banner is the supplied NZ students photo; others from Pexels)
const ABOUT_BANNER = aboutBanner;
const INTRO_IMG = 'https://images.pexels.com/photos/13440917/pexels-photo-13440917.jpeg?auto=compress&cs=tinysrgb&w=1100';
const VALUES_IMG = 'https://images.pexels.com/photos/6684506/pexels-photo-6684506.jpeg?auto=compress&cs=tinysrgb&w=1000';

const STATS = [
  { value: '100%', label: 'Zero-Fee University Placement' },
  { value: 'NZ', label: 'Registered & Compliant' },
  { value: '15+', label: 'Years Industry Leadership' },
  { value: '2', label: 'Specialised Branches' },
];

const ROADMAP = [
  { step: '01', title: 'NZQA Institute', text: 'Transitioning into a fully registered NZQA Institute.', accent: 'var(--custom-green)' },
  { step: '02', title: 'Mobile Application', text: 'An advanced app with proprietary speech-evaluation metrics.', accent: 'var(--custom-blue)' },
  { step: '03', title: 'CEFR Qualifications', text: 'Elite qualifications mapped directly to global CEFR benchmarks.', accent: 'var(--custom-green)' },
];

const COMPLIANCE = [
  'Fully compliant with New Zealand law',
  'Aligned with the London Statement (London Code)',
  'NZ Education (Pastoral Care) Guidelines',
  'Finalising INZ / Education NZ agency certification',
];

export default function AboutUs() {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShown(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="bg-white">
      {/* ---------- Hero banner ---------- */}
      <header className="relative h-[68vh] min-h-[440px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center animate-bg-zoom"
          style={{ backgroundImage: `url(${ABOUT_BANNER})` }}
          role="img"
          aria-label="Students on a bridge with the New Zealand alps behind"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-900/80" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <span
            className={`inline-flex items-center gap-2 text-[0.6rem] sm:text-xs font-bold uppercase tracking-[0.25em] text-white px-4 py-1.5 rounded-full mb-5 transition-all duration-700 ${shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ backgroundColor: 'var(--custom-green)' }}
          >
            About Us
          </span>
          <h1
            className={`sans-font text-3xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-4xl transition-all duration-700 delay-100 ${shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ textShadow: '0 4px 24px rgba(0,0,0,0.4)' }}
          >
            Architecting Global Futures
          </h1>
          <p
            className={`text-white/90 text-sm sm:text-base md:text-lg font-medium max-w-2xl mt-5 leading-relaxed transition-all duration-700 delay-200 ${shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
          >
            Premium English coaching and ethical New Zealand education consultancy — driven by industry professionals.
          </p>
        </div>

        <div className="absolute -bottom-px left-0 right-0 h-12 bg-white" style={{ clipPath: 'ellipse(75% 100% at 50% 100%)' }} />
      </header>

      {/* ---------- Who we are ---------- */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal className="reveal flex flex-col gap-5">
            <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--custom-green)' }}>Who We Are</span>
            <h2 className="sans-font text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              A premier New Zealand-based education enterprise
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Fluency Bridge Global Limited bridges the gap between regional potential and global success through a parent
              corporate infrastructure managing two distinct, specialised branches.
            </p>
            <div className="flex flex-col gap-4 mt-1">
              {[
                { name: 'Fluency Bridge', desc: 'Elite English communication coaching following the Natural English Method.', color: 'var(--custom-green)' },
                { name: 'NZ Academic Bridge', desc: 'Zero-fee international student recruitment and expert tertiary placement.', color: 'var(--custom-blue)' },
              ].map((b) => (
                <div key={b.name} className="flex gap-4 items-start">
                  <span className="mt-1 flex items-center justify-center w-8 h-8 rounded-xl shrink-0" style={{ backgroundColor: b.color }}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <div>
                    <p className="font-black text-slate-900 text-sm sm:text-base">{b.name}</p>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="reveal reveal-img relative" delay={150}>
            <div className="absolute -inset-3 rounded-[2rem] opacity-20 blur-2xl" style={{ background: 'linear-gradient(135deg, var(--custom-green), var(--custom-blue))' }} />
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3]">
              <img src={INTRO_IMG} alt="Premier university campus" className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Stats band ---------- */}
      <section className="bg-slate-50 border-y border-slate-100 py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <Reveal key={s.label} className="reveal text-center" delay={i * 90}>
              <p className="sans-font text-3xl sm:text-4xl font-black mb-1" style={{ color: 'var(--custom-blue)' }}>{s.value}</p>
              <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-snug">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Vision & Mission ---------- */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6 sm:gap-8">
          {[
            { label: 'Our Vision', color: 'var(--custom-green)', text: 'To establish a world-class global ecosystem that seamlessly integrates high-impact English coaching, transformational career coaching, and ethically compliant education consultancy — empowering individuals worldwide to confidently claim their place in the international market.' },
            { label: 'Our Mission', color: 'var(--custom-blue)', text: 'To democratize authentic language fluency through the Natural English Method while delivering transparent, zero-fee university placement under our dedicated NZ Academic Bridge branch — upholding student rights in strict alignment with New Zealand’s rigorous compliance frameworks.' },
          ].map((c, i) => (
            <Reveal key={c.label} delay={i * 140} className="reveal relative bg-white rounded-3xl border border-slate-100 shadow-lg p-8 sm:p-9 flex flex-col gap-4 hover:shadow-2xl transition-shadow duration-500 overflow-hidden">
              <span className="absolute top-0 left-0 h-1.5 w-full" style={{ backgroundColor: c.color }} />
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: c.color }}>{c.label}</span>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{c.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Executive leadership ---------- */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal className="reveal reveal-img relative order-2 lg:order-1">
            <div className="absolute -inset-3 rounded-[2rem] opacity-20 blur-2xl" style={{ background: 'linear-gradient(135deg, var(--custom-blue), var(--custom-green))' }} />
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] max-w-sm mx-auto lg:mx-0">
              <img src={ceoPhoto} alt="Chathuranga Liyanage" className="w-full h-full object-cover object-top" />
            </div>
          </Reveal>
          <Reveal className="reveal flex flex-col gap-4 order-1 lg:order-2" delay={150}>
            <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--custom-green)' }}>Executive Leadership</span>
            <h2 className="sans-font text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">Chathuranga Liyanage</h2>
            <p className="font-bold text-sm" style={{ color: 'var(--custom-blue)' }}>Founder &amp; CEO — Fluency Bridge Global Limited</p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              An accomplished Construction Project Manager in New Zealand&apos;s civil engineering sector and an alumnus of
              the University of Peradeniya (2011). Having personally navigated and conquered intense linguistic barriers
              early in his career, Chathuranga engineered the <strong className="text-slate-900">Natural English Method</strong> —
              a systematic, first-principles framework designed to fast-track real-world communication dominance without
              academic stress.
            </p>
            <p className="text-slate-500 text-xs sm:text-sm font-semibold">B.Sc. Civil Engineering (Hons) — University of Peradeniya (2011)</p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Strategic roadmap — horizontal timeline ---------- */}
      <section className="py-16 sm:py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="reveal text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--custom-blue)' }}>Looking Ahead</span>
            <h2 className="sans-font text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight mt-2">Strategic Road Map &amp; Future Scale</h2>
            <p className="text-slate-500 text-sm sm:text-base mt-3">Fluency Bridge Global Limited is scaling rapidly. Our roadmap unfolds step by step:</p>
          </Reveal>

          <div className="relative">
            {/* Connecting line that draws left-to-right */}
            <div className="hidden md:block absolute top-7 left-[16.66%] right-[16.66%] h-1 rounded-full bg-slate-100">
              <Reveal className="timeline-line h-full w-full rounded-full" style={{ background: 'linear-gradient(to right, var(--custom-green), var(--custom-blue), var(--custom-green))' }} />
            </div>

            <div className="grid md:grid-cols-3 gap-10 md:gap-8">
              {ROADMAP.map((item, i) => (
                <Reveal key={item.step} delay={i * 220} className="reveal relative flex flex-col items-center text-center">
                  <span
                    className="sans-font relative z-10 flex items-center justify-center w-14 h-14 rounded-full text-white font-black text-lg shadow-lg ring-4 ring-white"
                    style={{ backgroundColor: item.accent }}
                  >
                    {item.step}
                  </span>
                  <div className="mt-5 bg-white rounded-3xl border border-slate-100 shadow-lg p-7 w-full hover:shadow-2xl transition-shadow duration-500">
                    <h3 className="sans-font font-black text-slate-900 text-base sm:text-lg mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Integrity & compliance ---------- */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal className="reveal reveal-img relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3]">
              <img src={VALUES_IMG} alt="Students in a classroom" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal className="reveal flex flex-col gap-5" delay={150}>
            <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--custom-green)' }}>Our Promise</span>
            <h2 className="sans-font text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">Uncompromised Integrity &amp; Official Compliance</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We operate with absolute transparency and stand firmly by an ethical framework that strictly protects
              student rights. Our recruitment methodologies align with global benchmarks.
            </p>
            <ul className="flex flex-col gap-3 mt-1">
              {COMPLIANCE.map((c) => (
                <li key={c} className="flex gap-3 items-center">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full shrink-0" style={{ backgroundColor: 'var(--custom-green)' }}>
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span className="text-slate-700 text-sm font-medium">{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ---------- CTA band ---------- */}
      <section className="relative overflow-hidden py-16 sm:py-20" style={{ background: 'linear-gradient(120deg, var(--custom-blue-dark), var(--custom-blue) 55%, var(--custom-green))' }}>
        <Reveal className="reveal relative max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-5">
          <h2 className="sans-font text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">Meet the People Behind the Bridge</h2>
          <p className="text-white/85 text-sm sm:text-base max-w-xl">
            Our founder, advisory board and immigration partners — the professionals who walked the path.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            <a href="#/team" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold text-sm py-3 px-7 rounded-xl transition-all hover:opacity-90 interactive-el">
              Meet Our Team
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
            <a href="#/contact" className="inline-flex items-center gap-2 bg-white/15 border border-white/40 text-white font-bold text-sm py-3 px-7 rounded-xl transition-all hover:bg-white/25 interactive-el">
              Contact Us
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
