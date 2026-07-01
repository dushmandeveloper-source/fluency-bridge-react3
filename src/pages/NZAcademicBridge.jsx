import { useState } from 'react';

import BannerBackground from '../components/BannerBackground';
import Reveal from '../components/Reveal';
import heroBanner from '../assets/NZ Academic Bridge.png';

// SVG icon paths for milestones / services
const ICONS = {
  globe: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3 7.5 7.03 7.5 12 9.515 21 12 21zM3 12h18" />,
  cap: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.42A12.083 12.083 0 0121 12.5c0 2.5-4 6.5-9 6.5s-9-4-9-6.5c0-1.07.5-2.5 1.84-3.92L12 14z" />,
  docCheck: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12.75L11.25 15 15 9.75M21 12c0 4.556-3.04 8.25-8.965 9.75C7.04 20.25 4 16.556 4 12V6.75l8-3.75 8 3.75V12z" />,
  scale: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />,
  plane: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />,
  briefcase: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />,
  chat: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />,
  user: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />,
  work: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
  family: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />,
  doc: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
  star: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />,
  shield: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
  check: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />,
};

// Verbatim from the PDF concept doc
const MILESTONES = [
  {
    num: '01', title: 'Consultation', subtitle: 'Objective Profiling', icon: ICONS.globe, accent: 'var(--custom-green)',
    description: 'Initial profiling and review of previous academic logs, previous engineering or bachelors transcripts, and strategic New Zealand migration opportunities.',
  },
  {
    num: '02', title: 'University Matching', subtitle: 'Pathways Navigation', icon: ICONS.cap, accent: 'var(--custom-blue-light)',
    description: 'Selecting from high-ranking, accredited New Zealand colleges, polytechnics, or universities, curating courses matching your technical background and local employment needs.',
  },
  {
    num: '03', title: 'Offer Letter', subtitle: 'Document Admissions', icon: ICONS.docCheck, accent: 'var(--custom-green)',
    description: 'Our consultants submit direct, clean submissions to admissions, coordinating credit evaluations (NZQA) and obtaining prompt conditional or unconditional offer letters.',
  },
  {
    num: '04', title: 'Visa Guidance', subtitle: 'Legal Compliance', icon: ICONS.scale, accent: 'var(--custom-blue-light)',
    description: 'Comprehensive reviews of student financial portfolios and visa letters, fully coordinated in collaboration with Licensed Immigration Advisers (LIA) to ensure maximum compliance.',
  },
  {
    num: '05', title: 'Arrival Support', subtitle: 'Auckland Landing Support', icon: ICONS.plane, accent: 'var(--custom-green)',
    description: 'Sincere in-person support in Auckland: airport guidelines, setting up local bank accounts, IRD tax registration, mobile network cards, and finding safe student houses.',
  },
  {
    num: '06', title: 'Career Coaching', subtitle: 'NZ Workforce Settlement', icon: ICONS.briefcase, accent: 'var(--custom-blue-light)',
    description: 'Translating your CV into native "Kiwi" styles, professional networking instructions, and linking you with local corporate hiring ecosystems to kickstart your career.',
  },
];

// Key benefits from Image 1
const BENEFITS = [
  { label: '100% Free', sub: 'Consultation', icon: ICONS.chat },
  { label: 'Free', sub: 'Career Coaching', icon: ICONS.star },
  { label: 'Work', sub: 'While You Study', icon: ICONS.work },
  { label: 'Bring Your', sub: 'Family', icon: ICONS.family },
];

// 6 consultancy services from Image 2
const SERVICES = [
  { title: 'Expert Guidance', icon: ICONS.star },
  { title: 'Document Support', icon: ICONS.doc },
  { title: 'University Selection', icon: ICONS.cap },
  { title: 'Admission Assistance', icon: ICONS.docCheck },
  { title: 'Post-Arrival Support', icon: ICONS.plane },
  { title: 'Travel Assistance', icon: ICONS.globe },
];

// Expert team 4-block panel from Image 1
const EXPERT_TEAM = [
  { label: 'Expert Guidance', icon: ICONS.star },
  { label: 'Personalised Planning', icon: ICONS.user },
  { label: 'Admission Support', icon: ICONS.docCheck },
  { label: 'End-to-End Support', icon: ICONS.shield },
];

const COMPLIANCE_POINTS = [
  'Licensed Immigration Advisor Collaboration Only',
  'Full Transparency: No Hidden Extra Commissions',
  'Student-First Course Placement Matching',
];

const FAQS = [
  {
    q: 'How is the NZ Academic Bridge consultation zero-cost for students?',
    a: 'As an ethical development partner, our direct application and qualification advisory services are officially funded through institutional partnerships with New Zealand educational providers. We do not charge students for consulting, standard application submissions, or course matching, ensuring complete transparency and a student-first philosophy.',
  },
  {
    q: 'Do you assist with New Zealand visa processing?',
    a: 'Yes, we provide end-to-end documentation coordination, checklist reviews, and direct connection to licensed immigration advisors (LIA) for high-complexity claims. Our consultants are fully compliant with Section 11 of the Immigration Advisers Licensing Act 2007.',
  },
  {
    q: 'Does the company offer in-country settlement support?',
    a: 'Absolutely. We believe our relationship begins, rather than ends, when you land. Our NZ Academic Bridge program includes comprehensive in-country arrival briefings, Auckland airport guidelines, tax setup (IRD number), banking facilitation, CV translation to NZ styles, and community connections.',
  },
];

function Icon({ path, className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      {path}
    </svg>
  );
}

export default function NZAcademicBridge() {
  const [activeMilestone, setActiveMilestone] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const milestone = MILESTONES[activeMilestone];

  return (
    <BannerBackground
      fixed
      image={heroBanner}
      ariaLabel="Students walking through a sunny university campus with graduation caps overhead"
      overlayClassName="bg-gradient-to-b from-slate-900/85 via-slate-900/72 to-slate-900/90"
      particleCount={52}
    >
      <main className="bright-banner-glass relative z-20 w-full">

        {/* ---------- Hero ---------- */}
        <header className="px-6 pt-28 pb-6 sm:pt-32 sm:pb-8">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-4">
            <span className="inline-flex items-center gap-2 text-[0.6rem] sm:text-xs font-bold uppercase tracking-[0.25em] text-white px-4 py-1.5 rounded-full" style={{ backgroundColor: 'var(--custom-blue)' }}>
              NZ Academic Bridge
            </span>
            <h1 className="sans-font text-3xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight" style={{ textShadow: '0 4px 24px rgba(0,0,0,0.45)' }}>
              Your Zero-Cost Pathway to New Zealand
            </h1>
            <div className="inline-flex items-center gap-2 rounded-full px-5 py-2" style={{ backgroundColor: 'var(--custom-green)' }}>
              <span className="text-white font-black text-xs sm:text-sm tracking-widest uppercase">Dream It. Plan It. Achieve It.</span>
            </div>
            <p className="text-white/90 text-sm sm:text-base md:text-lg font-medium max-w-2xl leading-relaxed" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
              Ethical academic placement for international students. We align your qualifications with first-tier NZ
              colleges and major universities under rigorous compliance standards, with 100% free counseling.
            </p>
          </div>
        </header>

        {/* ---------- Key Benefits band (from Image 1) ---------- */}
        <section className="py-4 sm:py-6">
          <div className="max-w-5xl mx-auto px-6">
            <Reveal className="reveal liquid-glass rounded-3xl px-6 py-7">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                {BENEFITS.map((b) => (
                  <div key={b.sub} className="flex flex-col items-center text-center gap-2.5">
                    <span className="flex items-center justify-center w-11 h-11 rounded-xl" style={{ backgroundColor: 'var(--custom-green)' }}>
                      <Icon path={b.icon} />
                    </span>
                    <div>
                      <p className="sans-font text-white font-black text-sm sm:text-base leading-tight">{b.label}</p>
                      <p className="text-white/75 text-xs font-semibold uppercase tracking-wider">{b.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- Interactive Student Journey ---------- */}
        <section className="py-6 sm:py-9">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal className="reveal text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--custom-green-light)' }}>End-to-End Progress</span>
              <h2 className="sans-font text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mt-2" style={{ textShadow: '0 2px 14px rgba(0,0,0,0.4)' }}>The Interactive Student Journey</h2>
              <p className="text-white/90 text-sm sm:text-base mt-3">
                From initial profiling to your first day of professional Kiwi work. Click any milestone to explore:
              </p>
            </Reveal>

            <div className="grid lg:grid-cols-[320px_1fr] gap-5">
              {/* Tab list */}
              <Reveal className="reveal flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                {MILESTONES.map((m, i) => {
                  const active = i === activeMilestone;
                  return (
                    <button
                      key={m.num}
                      type="button"
                      onClick={() => setActiveMilestone(i)}
                      className={`shrink-0 lg:w-full text-left flex items-center gap-3 rounded-2xl px-4 py-3.5 transition interactive-el ${
                        active ? 'liquid-glass shadow-xl' : 'bg-slate-900/60 border border-white/20 hover:bg-slate-900/75'
                      }`}
                    >
                      <span
                        className="flex items-center justify-center w-7 h-7 rounded-full text-xs font-black shrink-0 text-white"
                        style={{ backgroundColor: active ? m.accent : 'rgba(255,255,255,0.25)' }}
                      >
                        {i + 1}
                      </span>
                      <span>
                        <span className="block font-bold text-sm text-white">{m.title}</span>
                        <span className="block text-xs text-white/65">{m.subtitle}</span>
                      </span>
                    </button>
                  );
                })}
              </Reveal>

              {/* Detail panel */}
              <Reveal delay={120} className="reveal liquid-glass rounded-3xl p-7 sm:p-10 flex flex-col">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/60">Stage Milestone {milestone.num}</span>
                  <span className="w-1 h-1 rounded-full bg-white/40" />
                  <span className="text-[0.65rem] font-bold uppercase tracking-wider text-white px-3 py-1 rounded-full" style={{ backgroundColor: 'var(--custom-green)' }}>Ethical Standard Checked</span>
                </div>

                <div className="flex items-center gap-4 mb-5">
                  <span className="flex items-center justify-center w-12 h-12 rounded-2xl shrink-0" style={{ backgroundColor: milestone.accent }}>
                    <Icon path={milestone.icon} className="w-6 h-6 text-white" />
                  </span>
                  <div>
                    <h3 className="sans-font text-xl sm:text-2xl font-black text-white leading-tight">{milestone.title}</h3>
                    <p className="text-white/65 text-xs font-bold uppercase tracking-wider">{milestone.subtitle}</p>
                  </div>
                </div>

                <p className="text-white/90 text-sm sm:text-base leading-relaxed text-justify">{milestone.description}</p>

                <div className="h-px bg-white/15 my-6" />

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span className="flex items-center gap-2 text-white/60 text-xs sm:text-sm">
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    No extra agency submission fees requested.
                  </span>
                  <button type="button" className="text-white font-bold text-xs uppercase tracking-wider py-3 px-6 rounded-xl transition-all hover:opacity-90 interactive-el" style={{ backgroundColor: 'var(--custom-blue)' }}>
                    Query Milestone {milestone.num}
                  </button>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- Our Expert Team (from Image 1) ---------- */}
        <section className="py-6 sm:py-9">
          <div className="max-w-5xl mx-auto px-6">
            <Reveal className="reveal liquid-glass rounded-3xl p-8 sm:p-10">
              <div className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--custom-blue-light)' }}>Our Promise</span>
                <h2 className="sans-font text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight mt-2">Our New Zealand Expert Team Will Assist You</h2>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                {EXPERT_TEAM.map((e) => (
                  <div key={e.label} className="flex flex-col items-center text-center gap-3 bg-white/10 rounded-2xl p-5">
                    <span className="flex items-center justify-center w-12 h-12 rounded-xl" style={{ backgroundColor: 'var(--custom-blue)' }}>
                      <Icon path={e.icon} />
                    </span>
                    <p className="text-white font-bold text-xs sm:text-sm uppercase tracking-wide leading-snug">{e.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- Consultancy Services (from Image 2 — 6 icons) ---------- */}
        <section className="py-6 sm:py-9">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal className="reveal text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--custom-blue-light)' }}>New Zealand Education Consultancy Services</span>
              <h2 className="sans-font text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mt-2" style={{ textShadow: '0 2px 14px rgba(0,0,0,0.4)' }}>Your Bridge to Quality Education &amp; a Bright Future</h2>
            </Reveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {SERVICES.map((s, i) => (
                <Reveal key={s.title} delay={i * 70} className="reveal liquid-glass rounded-2xl p-5 flex flex-col items-center text-center gap-3">
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl" style={{ backgroundColor: 'var(--custom-green)' }}>
                    <Icon path={s.icon} />
                  </span>
                  <p className="text-white font-bold text-[0.65rem] sm:text-xs uppercase tracking-wider leading-snug">{s.title}</p>
                </Reveal>
              ))}
            </div>

            {/* "Access to Licensed Immigration Advisors" callout from Image 2 */}
            <Reveal delay={100} className="reveal mt-5">
              <div className="liquid-glass rounded-2xl px-6 py-4 flex items-center justify-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0" style={{ backgroundColor: 'var(--custom-blue)' }}>
                  <Icon path={ICONS.shield} className="w-4 h-4 text-white" />
                </span>
                <p className="text-white font-black text-sm sm:text-base uppercase tracking-wider text-center">Access to Licensed Immigration Advisors</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- Compliance / Transparency ---------- */}
        <section className="py-6 sm:py-9">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <Reveal className="reveal liquid-glass relative rounded-3xl p-8 sm:p-9 flex flex-col gap-5 overflow-hidden">
              <span className="absolute top-0 left-0 right-0 h-1.5" style={{ background: 'linear-gradient(to right, var(--custom-green), var(--custom-blue-light))' }} />
              <div className="flex items-center justify-between gap-3">
                <span className="text-[0.65rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white" style={{ backgroundColor: 'var(--custom-green)' }}>
                  Compliance Verification
                </span>
                <span className="text-white/40 text-xs font-mono">IAdvisors #20078</span>
              </div>
              <h3 className="sans-font text-xl sm:text-2xl font-black text-white leading-tight">Ethical Education Recruitment</h3>
              <p className="text-white/90 text-sm leading-relaxed text-justify">
                NZ Academic Bridge operates strictly under the Education Code of Practice (Pastoral Care of Tertiary and
                International Learners) and coordinates student claims in tandem with Licensed Immigration Advisers (LIA).
              </p>
              <div className="h-px bg-white/15" />
              <ul className="flex flex-col gap-3">
                {COMPLIANCE_POINTS.map((point) => (
                  <li key={point} className="flex gap-3 items-center">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full shrink-0" style={{ backgroundColor: 'var(--custom-green)' }}>
                      <Icon path={ICONS.check} className="w-3.5 h-3.5 text-white" />
                    </span>
                    <span className="text-white/95 text-sm font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={150} className="reveal liquid-glass rounded-3xl p-8 sm:p-10 flex flex-col gap-4 justify-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--custom-blue-light)' }}>Compliance Code of Standards</span>
              <h2 className="sans-font text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">Absolute Transparency. Sincere Mentorship.</h2>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed text-justify">
                Educational placement sector overlaps are often commercialized, leading to students being enrolled in
                random, low-ranked modules simply to secure high commission fees.
              </p>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed text-justify">
                We operate on strict <strong className="text-white">Ethical Recruitment Standards</strong>. Our
                consultancy is built on long-term relationships, tracking student success beyond enrollment to
                settlement support in central Auckland, Christchurch, and beyond.
              </p>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed text-justify">
                All our institutional associations comply with Section 11 of the Immigration Advisers Licensing Act
                2007. We never provide unlicensed migration advice, maintaining a pristine registry with zero clearance
                delays.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <section className="py-6 sm:py-9">
          <div className="max-w-3xl mx-auto px-6">
            <Reveal className="reveal text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--custom-green-light)' }}>Knowledge Hub</span>
              <h2 className="sans-font text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mt-2" style={{ textShadow: '0 2px 14px rgba(0,0,0,0.4)' }}>Frequently Answered Inquiries</h2>
            </Reveal>

            <div className="flex flex-col gap-3">
              {FAQS.map((item, i) => {
                const open = openFaq === i;
                return (
                  <Reveal key={item.q} delay={i * 80} className="reveal liquid-glass rounded-2xl overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? -1 : i)}
                      aria-expanded={open}
                      className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-4 sm:py-5 interactive-el"
                    >
                      <span className="font-bold text-white text-sm sm:text-base">{item.q}</span>
                      <svg className={`w-4 h-4 text-white/60 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {open && (
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                        <div className="h-px bg-white/15 mb-4" />
                        <p className="text-white/85 text-sm leading-relaxed text-justify">{item.a}</p>
                      </div>
                    )}
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------- CTA band ---------- */}
        <section className="py-6 sm:py-10 pb-16 sm:pb-24">
          <div className="max-w-4xl mx-auto px-6">
            <Reveal className="reveal liquid-glass rounded-3xl p-9 sm:p-12 text-center flex flex-col items-center gap-5">
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--custom-green-light)' }}>Your Signature to New Zealand</span>
              <h2 className="sans-font text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">We Make Your Dreams a Reality!</h2>
              <p className="text-white/90 text-sm sm:text-base max-w-xl">
                Speak with a consultant today about your zero-cost pathway to studying, working, and settling in New Zealand.
              </p>

              {/* Contact info from the promo images */}
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <a href="tel:+6421086311134" className="flex items-center gap-2 text-white/80 hover:text-white transition interactive-el">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  +64 210 863 1134
                </a>
                <a href="https://wa.me/94775544240" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 hover:text-white transition interactive-el">
                  <svg className="w-4 h-4" fill="#25D366" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.115zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                  +94 77 5544 240
                </a>
                <a href="mailto:info@nzacademicbridge.co.nz" className="flex items-center gap-2 text-white/80 hover:text-white transition interactive-el">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  info@nzacademicbridge.co.nz
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-3 mt-1">
                <a href="#/contact" className="inline-flex items-center gap-2 text-white font-bold text-sm py-3 px-7 rounded-xl transition-all hover:opacity-90 interactive-el" style={{ backgroundColor: 'var(--custom-blue)' }}>
                  Consult an Advisor Free
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
                <a href="https://wa.me/642108631134" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/15 border border-white/40 text-white font-bold text-sm py-3 px-7 rounded-xl transition-all hover:bg-white/25 interactive-el">
                  <svg className="w-4 h-4" fill="#25D366" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.115zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                  Send WhatsApp Message
                </a>
              </div>
              <p className="text-white/50 text-xs mt-1">www.nzacademicbridge.co.nz</p>
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
