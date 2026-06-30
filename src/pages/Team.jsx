import { useEffect } from 'react';
import gsap from 'gsap';

import BannerBackground from '../components/BannerBackground';
import Reveal from '../components/Reveal';
import ProfileCard from '../components/ProfileCard';
import ceoPhoto from '../assets/team-ceo.png';
import janakiPhoto from '../assets/team-janaki.jpeg';
import rasikaPhoto from '../assets/team-rasika.jpeg';
import wasanaPhoto from '../assets/team-wasana.jpeg';
import consultant5Photo from '../assets/team-consultant-5.jpeg';
import consultant6Photo from '../assets/team-consultant-6.jpeg';
import heroBanner from '../assets/banner  new.png';

// Real advisory-board members. Names/titles/qualifications from the "Meet Our
// Team" profile cards. The last two cards keep their photos but show
// placeholder labels until the real details are supplied — replace `name`,
// `role` and each `lines` entry with the actual values.
// Most headshots frame the face the same way, so they crop well from the top.
// `pos` overrides object-position only where a photo needs it — Wasana's shot
// has extra headroom, so without this her face sits lower than the others.
const CONSULTANTS = [
  { id: 'janaki', name: 'Janaki Wijerathna', role: 'Senior Academic Consultant', image: janakiPhoto, accent: 'var(--custom-green)', lines: ['HNDE', 'BA Social Sciences (OUSL)', 'LA (CASS, AUK, NZ)'] },
  { id: 'rasika', name: 'Rasika Udugama', role: 'Senior Academic Consultant — Teaching Programs', image: rasikaPhoto, accent: 'var(--custom-blue-light)', lines: ['Registered Teacher — Teaching Council of Aotearoa NZ', 'BSc Agri Tech & Management — UoP', 'PGDE — OUSL'] },
  { id: 'wasana', name: 'Wasana Dilrukshi', role: 'Senior Academic Consultant', image: wasanaPhoto, accent: 'var(--custom-green)', pos: '50% 15%', lines: ['Master of Technological Futures (MTF) — AcademyEX NZ', 'MSc Electrical Engineering — Univ. of Moratuwa', 'BSc (Hons) Electrical & Electronic Eng — Univ. of Peradeniya'] },
  { id: 'consultant5', name: 'Full Name', role: 'Title / Position', image: consultant5Photo, accent: 'var(--custom-blue-light)', lines: ['Qualification / Degree', 'University & Country', 'Specialisation (optional)'] },
  { id: 'consultant6', name: 'Full Name', role: 'Title / Position', image: consultant6Photo, accent: 'var(--custom-green)', lines: ['Qualification / Degree', 'University & Country', 'Specialisation (optional)'] },
];

export default function Team() {
  // GSAP: gentle perpetual float on the image cards + a slow zoom on the photos,
  // matching the motion on the About Us page.
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
      image={heroBanner}
      ariaLabel="Climbers reaching the summit with the New Zealand flag"
      overlayClassName="bg-gradient-to-b from-slate-900/70 via-slate-900/55 to-slate-900/80"
      particleCount={52}
    >
      <main className="bright-banner-glass relative z-20 w-full">

        {/* ---------- Hero ---------- */}
        <header className="px-6 pt-28 pb-6 sm:pt-32 sm:pb-8">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-5">
            <span className="inline-flex items-center gap-2 text-[0.6rem] sm:text-xs font-bold uppercase tracking-[0.25em] text-white px-4 py-1.5 rounded-full" style={{ backgroundColor: 'var(--custom-green)' }}>
              Our Consultants
            </span>
            <h1 className="sans-font text-3xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight" style={{ textShadow: '0 4px 24px rgba(0,0,0,0.45)' }}>
              Leadership &amp; Advisory Board
            </h1>
            <p className="text-white/90 text-sm sm:text-base md:text-lg font-medium max-w-2xl leading-relaxed" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
              A multidisciplinary team dedicated to ethically delivering the best education guidelines and career pathways in New Zealand.
            </p>
          </div>
        </header>

        {/* ---------- Founder & CEO ---------- */}
        <section className="py-6 sm:py-9">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <Reveal className="reveal relative order-2 lg:order-1">
              <div className="gsap-float relative h-full flex items-center justify-center">
                <div className="relative w-full max-w-sm mx-auto lg:mx-0">
                  <div className="absolute -inset-3 rounded-[2rem] opacity-25 blur-2xl" style={{ background: 'linear-gradient(135deg, var(--custom-green), var(--custom-blue))' }} />
                  <div className="liquid-glass relative rounded-[2rem] overflow-hidden shadow-2xl p-2.5">
                    <div className="relative w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden">
                      <img src={ceoPhoto} alt="Chathuranga Liyanage" className="absolute inset-0 w-full h-full object-cover object-top gsap-zoom" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal className="reveal liquid-glass rounded-3xl p-8 sm:p-10 flex flex-col gap-4 order-1 lg:order-2" delay={150}>
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--custom-green-light)' }}>Founder &amp; CEO</span>
              <h2 className="sans-font text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">Chathuranga Liyanage</h2>
              <p className="font-bold text-sm" style={{ color: 'var(--custom-blue-light)' }}>Founder &amp; CEO — Fluency Bridge Global Limited</p>
              <p className="text-white/80 text-xs sm:text-sm font-semibold">B.Sc. Civil Engineering (Hons) — University of Peradeniya (2011)</p>
              <p className="text-white/95 text-sm sm:text-base leading-relaxed text-justify">
                An accomplished Construction Project Manager in New Zealand&apos;s civil engineering sector and an alumnus
                of the University of Peradeniya (2011). Having personally navigated and conquered intense linguistic
                barriers early in his career, Chathuranga engineered the <strong className="text-white">Natural English
                Method</strong> — a systematic, first-principles framework designed to fast-track real-world
                communication dominance without academic stress.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ---------- Academic Consultants & Advisory Board ---------- */}
        <section className="py-6 sm:py-9">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal className="reveal text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--custom-blue-light)' }}>Advisory Board</span>
              <h2 className="sans-font text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mt-2" style={{ textShadow: '0 2px 14px rgba(0,0,0,0.4)' }}>Academic Consultants &amp; Advisory Board</h2>
              <p className="text-white/90 text-sm sm:text-base mt-3">
                Specialists holding baseline degrees from premier Sri Lankan universities and Masters/MBAs completed in New Zealand.
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {CONSULTANTS.map((c, i) => (
                <Reveal key={c.id} delay={(i % 3) * 120} className="reveal">
                  <ProfileCard name={c.name} role={c.role} image={c.image} pos={c.pos} lines={c.lines} accent={c.accent} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Legal & Immigration Partners ---------- */}
        <section className="py-6 sm:py-9">
          <div className="max-w-4xl mx-auto px-6">
            <Reveal className="reveal liquid-glass relative rounded-[2rem] p-8 sm:p-12 text-center flex flex-col items-center gap-4 overflow-hidden">
              <span className="absolute top-0 left-0 right-0 h-1.5" style={{ background: 'linear-gradient(to right, var(--custom-blue-light), var(--custom-green))' }} />
              <span className="flex items-center justify-center w-14 h-14 rounded-2xl mb-1" style={{ backgroundColor: 'var(--custom-blue)' }}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </span>
              <h2 className="sans-font text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight">Legal &amp; Immigration Partners</h2>
              <p className="font-bold text-sm" style={{ color: 'var(--custom-blue-light)' }}>Partnered Licensed Immigration Advisers &amp; Lawyers</p>
              <p className="text-white/95 text-sm sm:text-base leading-relaxed max-w-2xl text-justify">
                To ensure absolute regulatory compliance for Fluency Bridge Global Limited, all legal immigration strategies
                and visa applications are processed exclusively through our accredited New Zealand immigration partners.
                Individual credentials and firm details are provided directly during personal consultations.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ---------- CTA band ---------- */}
        <section className="py-6 sm:py-10 pb-16 sm:pb-24">
          <div className="max-w-4xl mx-auto px-6">
            <Reveal className="reveal liquid-glass rounded-3xl p-9 sm:p-12 text-center flex flex-col items-center gap-5">
              <h2 className="sans-font text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">Ready to Start Your Journey?</h2>
              <p className="text-white/90 text-sm sm:text-base max-w-xl">
                Talk to our team about English coaching or your pathway to studying in New Zealand.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-2">
                <a href="#/contact" className="inline-flex items-center gap-2 text-white font-bold text-sm py-3 px-7 rounded-xl transition-all hover:opacity-90 interactive-el" style={{ backgroundColor: 'var(--custom-blue)' }}>
                  Contact Us
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
                <a href="#/about" className="inline-flex items-center gap-2 bg-white/15 border border-white/40 text-white font-bold text-sm py-3 px-7 rounded-xl transition-all hover:bg-white/25 interactive-el">
                  About Us
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
