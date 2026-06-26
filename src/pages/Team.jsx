import { useEffect, useState } from 'react';
import gsap from 'gsap';

import Reveal from '../components/Reveal';
import ParticleField from '../components/ParticleField';
import ceoPhoto from '../assets/team-ceo.jpeg';
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
  { id: 'janaki', name: 'Janaki Wijerathna', role: 'Senior Academic Consultant', image: janakiPhoto, lines: ['HNDE', 'BA Social Sciences (OUSL)', 'LA (CASS, AUK, NZ)'] },
  { id: 'rasika', name: 'Rasika Udugama', role: 'Senior Academic Consultant — Teaching Programs', image: rasikaPhoto, lines: ['Registered Teacher — Teaching Council of Aotearoa NZ', 'BSc Agri Tech & Management — UoP', 'PGDE — OUSL'] },
  { id: 'wasana', name: 'Wasana Dilrukshi', role: 'Senior Academic Consultant', image: wasanaPhoto, pos: '50% 15%', lines: ['Master of Technological Futures (MTF) — AcademyEX NZ', 'MSc Electrical Engineering — Univ. of Moratuwa', 'BSc (Hons) Electrical & Electronic Eng — Univ. of Peradeniya'] },
  { id: 'consultant5', name: 'Full Name', role: 'Title / Position', image: consultant5Photo, lines: ['Qualification / Degree', 'University & Country', 'Specialisation (optional)'] },
  { id: 'consultant6', name: 'Full Name', role: 'Title / Position', image: consultant6Photo, lines: ['Qualification / Degree', 'University & Country', 'Specialisation (optional)'] },
];

export default function Team() {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShown(true), 150);
    return () => clearTimeout(t);
  }, []);

  // GSAP: float the CEO card and slowly zoom every photo
  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined;
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.gsap-float').forEach((el, i) => {
        gsap.to(el, { y: -14, duration: 3.6 + i * 0.4, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: i * 0.2 });
      });
      gsap.utils.toArray('.gsap-zoom').forEach((el, i) => {
        gsap.to(el, { scale: 1.06, duration: 7 + i * 0.6, ease: 'sine.inOut', yoyo: true, repeat: -1 });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-white">
      {/* ---------- Hero banner ---------- */}
      <header className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center animate-bg-zoom" style={{ backgroundImage: `url(${heroBanner})` }} role="img" aria-label="Climbers reaching the summit with the New Zealand flag" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/45 to-slate-900/80" />
        <ParticleField />

        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <span className={`inline-flex items-center gap-2 text-[0.6rem] sm:text-xs font-bold uppercase tracking-[0.25em] text-white px-4 py-1.5 rounded-full mb-5 transition-all duration-700 ${shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ backgroundColor: 'var(--custom-blue)' }}>
            Our Team
          </span>
          <h1 className={`sans-font text-3xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-4xl transition-all duration-700 delay-100 ${shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ textShadow: '0 4px 24px rgba(0,0,0,0.4)' }}>
            Leadership &amp; Advisory Board
          </h1>
          <p className={`text-white/90 text-sm sm:text-base md:text-lg font-medium max-w-2xl mt-5 leading-relaxed transition-all duration-700 delay-200 ${shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
            A multidisciplinary team dedicated to ethically delivering the best education guidelines and career pathways in New Zealand.
          </p>
        </div>

        <div className="absolute -bottom-px left-0 right-0 h-12 bg-white" style={{ clipPath: 'ellipse(75% 100% at 50% 100%)' }} />
      </header>

      {/* ---------- Founder & CEO ---------- */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal className="reveal relative">
            <div className="gsap-float relative">
              <div className="absolute -inset-3 rounded-[2rem] opacity-20 blur-2xl" style={{ background: 'linear-gradient(135deg, var(--custom-green), var(--custom-blue))' }} />
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] max-w-sm mx-auto lg:mx-0">
                <img src={ceoPhoto} alt="Chathuranga Liyanage" className="w-full h-full object-cover object-top gsap-zoom" />
              </div>
            </div>
          </Reveal>
          <Reveal className="reveal flex flex-col gap-4" delay={150}>
            <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--custom-green)' }}>Founder &amp; CEO</span>
            <h2 className="sans-font text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">Chathuranga Liyanage</h2>
            <p className="font-bold text-sm" style={{ color: 'var(--custom-blue)' }}>Founder &amp; CEO — Fluency Bridge Global Limited</p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify">
              Over 15 years of diverse, international experience in the civil engineering industry, currently directing
              operations as a Construction Project Manager in New Zealand. He applies engineering precision and structured
              project management to global education, mentoring future leaders with a philosophy built on lived experience
              across all parent portfolios and subsidiary branches.
            </p>
            <p className="text-slate-500 text-xs sm:text-sm font-semibold">B.Sc. Civil Engineering (Hons) — University of Peradeniya (2011)</p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Academic Consultants & Advisory Board ---------- */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="reveal text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--custom-blue)' }}>Advisory Board</span>
            <h2 className="sans-font text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight mt-2">Academic Consultants &amp; Advisory Board</h2>
            <p className="text-slate-500 text-sm sm:text-base mt-3">
              Specialists holding baseline degrees from premier Sri Lankan universities and Masters/MBAs completed in New Zealand.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {CONSULTANTS.map((c, i) => (
              <Reveal key={c.id} delay={(i % 3) * 120} className="reveal">
                <div className="group bg-white rounded-3xl border border-slate-100 shadow-lg overflow-hidden flex flex-col h-full transition-all duration-300 ease-out hover:-translate-y-2.5 hover:shadow-2xl">
                  <div className="relative h-60 overflow-hidden bg-slate-100">
                    <img src={c.image} alt={c.name} style={{ objectPosition: c.pos ?? '50% top' }} className="w-full h-full object-cover gsap-zoom" />
                    <span className="absolute top-4 left-4 h-1.5 w-10 rounded-full" style={{ backgroundColor: 'var(--custom-green)' }} />
                  </div>
                  <div className="p-6 flex flex-col gap-2 flex-1">
                    <div>
                      <h3 className="sans-font font-black text-slate-900 text-base sm:text-lg leading-tight">{c.name}</h3>
                      <p className="text-[0.65rem] font-bold uppercase tracking-wider mt-0.5" style={{ color: 'var(--custom-blue)' }}>{c.role}</p>
                    </div>
                    <ul className="flex flex-col gap-1.5 mt-1">
                      {c.lines.map((l) => (
                        <li key={l} className="flex gap-2 items-start text-slate-500 text-xs sm:text-[0.8rem] leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: 'var(--custom-green)' }} />
                          <span>{l}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Legal & Immigration Partners ---------- */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal className="reveal relative bg-white rounded-[2rem] border border-slate-100 shadow-xl p-8 sm:p-12 text-center flex flex-col items-center gap-4 overflow-hidden">
            <span className="absolute top-0 left-0 right-0 h-1.5" style={{ background: 'linear-gradient(to right, var(--custom-blue), var(--custom-green))' }} />
            <span className="flex items-center justify-center w-14 h-14 rounded-2xl mb-1" style={{ backgroundColor: 'var(--custom-blue)' }}>
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </span>
            <h2 className="sans-font text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight">Legal &amp; Immigration Partners</h2>
            <p className="font-bold text-sm" style={{ color: 'var(--custom-blue)' }}>Partnered Licensed Immigration Advisers &amp; Lawyers</p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl text-justify">
              To ensure absolute regulatory compliance for Fluency Bridge Global Limited, all legal immigration strategies
              and visa applications are processed exclusively through our accredited New Zealand immigration partners.
              Individual credentials and firm details are provided directly during personal consultations.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- CTA band ---------- */}
      <section className="relative overflow-hidden py-16 sm:py-20" style={{ background: 'linear-gradient(120deg, var(--custom-blue-dark), var(--custom-blue) 55%, var(--custom-green))' }}>
        <Reveal className="reveal relative max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-5">
          <h2 className="sans-font text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">Ready to Start Your Journey?</h2>
          <p className="text-white/85 text-sm sm:text-base max-w-xl">
            Talk to our team about English coaching or your pathway to studying in New Zealand.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            <a href="#/contact" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold text-sm py-3 px-7 rounded-xl transition-all hover:opacity-90 interactive-el">
              Contact Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
            <a href="#/about" className="inline-flex items-center gap-2 bg-white/15 border border-white/40 text-white font-bold text-sm py-3 px-7 rounded-xl transition-all hover:bg-white/25 interactive-el">
              About Us
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
