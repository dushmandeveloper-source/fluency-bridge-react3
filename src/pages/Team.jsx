import { useEffect, useState } from 'react';
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
// Team" profile cards.
// Most headshots frame the face the same way, so they crop well from the top.
// `pos` overrides object-position only where a photo needs it — Wasana's shot
// has extra headroom, so without this her face sits lower than the others.
const CONSULTANTS = [
  {
    id: 'chathuranga', name: 'Chathuranga Liyanage', role: 'Founder & CEO', image: ceoPhoto, accent: 'var(--custom-blue-light)',
    lines: ['B.Sc. Civil Engineering (Hons) — University of Peradeniya (2011)', 'Construction Project Manager, New Zealand', '15+ years international civil engineering experience'],
    quote: 'With a passion for education and global opportunities, I founded NZ Academic Bridge to help students achieve their dream of studying and building a successful future in New Zealand.',
  },
  {
    id: 'janaki', name: 'Janaki Wijerathna', role: 'Senior Academic Consultant', image: janakiPhoto, accent: 'var(--custom-green)',
    lines: ['HNDE', 'BA Social Sciences (OUSL)', 'LA (CASS, AUK, NZ)'],
    quote: 'I am passionate about helping students achieve their academic and career aspirations. With a strong academic background and years of experience, I am committed to providing personalized guidance and support at every step of your journey to success in New Zealand.',
  },
  {
    id: 'rasika', name: 'Rasika Udugama', role: 'Senior Academic Consultant — Teaching Programs', image: rasikaPhoto, accent: 'var(--custom-blue-light)',
    lines: ['Registered Teacher — Teaching Council of Aotearoa NZ', 'BSc Agri Tech & Management — UoP', 'PGDE — OUSL'],
    quote: 'I am passionate about empowering students to achieve their academic and career goals. I am here to guide and support you every step of the way on your journey to study and build a successful future in New Zealand.',
  },
  {
    id: 'wasana', name: 'Wasana Dilrukshi', role: 'Senior Academic Consultant', image: wasanaPhoto, accent: 'var(--custom-green)', pos: '50% 15%',
    lines: ['Master of Technological Futures (MTF) — AcademyEX NZ', 'MSc Electrical Engineering — Univ. of Moratuwa', 'BSc (Hons) Electrical & Electronic Eng — Univ. of Peradeniya'],
    background: ['8+ Years of Experience in Electronics Engineering, Research & Development', 'Former Senior Sensor Development Engineer at Contrinex', 'Experienced in product development, industrial sensors, testing, and innovation'],
  },
  { id: 'consultant5', name: 'Kelum Ponnamperuma', role: 'Senior Academic Consultant', image: consultant5Photo, accent: 'var(--custom-blue-light)', lines: ['B.Sc. Eng. (Hons) — University of Peradeniya, Sri Lanka'] },
  { id: 'consultant6', name: 'Kaushalya Jayalath', role: 'Senior Academic Consultant', image: consultant6Photo, accent: 'var(--custom-green)', lines: ['BSc (Hons) Quantity Surveying', 'MSc CM (QS Major)', 'Massey University, Auckland, NZ'] },
];

// Expert team 4-block panel
const EXPERT_TEAM = [
  { label: 'Expert Guidance', path: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' },
  { label: 'Personalised Planning', path: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
  { label: 'Admission Support', path: 'M9 12.75L11.25 15 15 9.75M21 12c0 4.556-3.04 8.25-8.965 9.75C7.04 20.25 4 16.556 4 12V6.75l8-3.75 8 3.75V12z' },
  { label: 'End-to-End Support', path: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
];

export default function Team() {
  const [activeConsultant, setActiveConsultant] = useState(null);

  useEffect(() => {
    if (!activeConsultant) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setActiveConsultant(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeConsultant]);

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
        <header className="px-6 pt-28 pb-2 sm:pt-32 sm:pb-3">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-5">
            <span className="inline-flex items-center gap-2 text-[0.6rem] sm:text-xs font-bold uppercase tracking-[0.25em] text-white px-4 py-1.5 rounded-full" style={{ backgroundColor: 'var(--custom-green)' }}>
              Our Consultants
            </span>
            <h1 className="sans-font text-2xl sm:text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight whitespace-nowrap" style={{ textShadow: '0 4px 24px rgba(0,0,0,0.45)' }}>
              Leadership and Advisory Board
            </h1>
            <p className="text-white/90 text-sm sm:text-base md:text-lg font-medium max-w-2xl leading-relaxed" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
              A multidisciplinary team dedicated to ethically delivering the best education guidelines and career pathways in New Zealand.
            </p>
          </div>
        </header>

        {/* ---------- Our Expert Team ---------- */}
        <section className="py-6 sm:py-9">
          <div className="max-w-5xl mx-auto px-6">
            <Reveal className="reveal liquid-glass rounded-3xl p-8 sm:p-10">
              <div className="text-center mb-8">
                <h2 className="sans-font text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight">Our New Zealand Expert Team Will Assist You</h2>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                {EXPERT_TEAM.map((e) => (
                  <div key={e.label} className="flex flex-col items-center text-center gap-3 bg-white/10 rounded-2xl p-5">
                    <span className="flex items-center justify-center w-12 h-12 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', color: 'var(--custom-blue)' }}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={e.path} />
                      </svg>
                    </span>
                    <p className="text-white font-bold text-xs sm:text-sm uppercase tracking-wide leading-snug">{e.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- Academic Consultants & Advisory Board ---------- */}
        <section className="pt-2 pb-6 sm:pt-3 sm:pb-9">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal className="reveal text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--custom-blue-light)' }}>Academic Consultants &amp; Advisory Board</span>
              <h2 className="sans-font text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mt-2" style={{ textShadow: '0 2px 14px rgba(0,0,0,0.4)' }}>Meet Our Experts</h2>
              <p className="text-white/90 text-sm sm:text-base mt-3">
                Specialists holding baseline degrees from premier Sri Lankan universities and Masters/MBAs completed in New Zealand.
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {CONSULTANTS.map((c, i) => (
                <Reveal key={c.id} delay={(i % 3) * 120} className="reveal h-full">
                  <div
                    className="h-full cursor-pointer interactive-el"
                    onMouseEnter={() => setActiveConsultant(c)}
                    onClick={() => setActiveConsultant(c)}
                  >
                    <ProfileCard name={c.name} role={c.role} image={c.image} pos={c.pos} lines={c.lines} accent={c.accent} />
                  </div>
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
              <span className="flex items-center justify-center w-14 h-14 rounded-2xl mb-1" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--custom-blue)' }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
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

      {/* ---------- Consultant detail popup ---------- */}
      {activeConsultant && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60"
          onClick={() => setActiveConsultant(null)}
        >
          <div
            className="liquid-glass relative rounded-3xl overflow-hidden shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto grid sm:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveConsultant(null)}
              aria-label="Close"
              className="interactive-el absolute top-3 right-3 z-10 flex items-center justify-center w-9 h-9 rounded-full"
              style={{ backgroundColor: '#ffffff', color: 'var(--custom-blue)' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <div className="relative h-56 sm:h-full">
              <img
                src={activeConsultant.image}
                alt={activeConsultant.name}
                style={{ objectPosition: activeConsultant.pos ?? '50% top' }}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8 flex flex-col gap-4">
              <div>
                <h3 className="sans-font text-xl sm:text-2xl font-black text-white leading-tight">{activeConsultant.name}</h3>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider mt-1" style={{ color: activeConsultant.accent }}>{activeConsultant.role}</p>
              </div>

              {activeConsultant.lines?.length > 0 && (
                <div>
                  <p className="text-white/60 text-[0.65rem] font-bold uppercase tracking-wider mb-2">Academic Background</p>
                  <ul className="text-white/90 text-sm leading-relaxed space-y-1.5">
                    {activeConsultant.lines.map((line, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span style={{ color: activeConsultant.accent }}>•</span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeConsultant.background?.length > 0 && (
                <div>
                  <p className="text-white/60 text-[0.65rem] font-bold uppercase tracking-wider mb-2">Professional Background</p>
                  <ul className="text-white/90 text-sm leading-relaxed space-y-1.5">
                    {activeConsultant.background.map((line, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span style={{ color: activeConsultant.accent }}>•</span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeConsultant.quote && (
                <p className="text-white/90 text-sm italic leading-relaxed border-l-2 pl-4" style={{ borderColor: activeConsultant.accent }}>
                  &ldquo;{activeConsultant.quote}&rdquo;
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </BannerBackground>
  );
}
