import { useState, useEffect, useRef } from 'react';
import BannerBackground from '../components/BannerBackground';
import Reveal from '../components/Reveal';
import heroBanner from '../assets/Fluency Bridge.png';

/* ─── Circular SVG ring progress ─────────────────────────────────── */
function RingProgress({ value, size = 96, stroke = 7, color = 'var(--custom-green)', bg = 'rgba(255,255,255,0.08)' }) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const dash = circ * (value / 100);
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: 'rotate(-90deg)' }} aria-hidden="true">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={bg} strokeWidth={stroke} />
      <circle
        cx={size / 2} cy={size / 2} r={r} fill="none"
        stroke={color} strokeWidth={stroke}
        strokeDasharray={`${dash} ${circ}`}
        strokeLinecap="round"
        style={{ transition: 'stroke-dasharray 0.8s ease' }}
      />
    </svg>
  );
}

/* ─── SVG icon paths ──────────────────────────────────────────────── */
const ICONS = {
  sound: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
      d="M15.536 8.464a5 5 0 010 7.072M12 6a7 7 0 010 12M9 9a3 3 0 000 6" />
  ),
  mic: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4M12 3a4 4 0 014 4v4a4 4 0 01-8 0V7a4 4 0 014-4z" />
  ),
  play: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
  ),
  chat: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  ),
  shield: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  ),
  briefcase: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  ),
  star: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  ),
  users: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  ),
  award: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  ),
  globe: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
      d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3 7.5 7.03 7.5 12 9.515 21 12 21zM3 12h18" />
  ),
  phone: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  ),
  chart: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  ),
  quote: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
  ),
};

/* ─── Data – exact text from the PDF ─────────────────────────────── */

const STAGES = [
  {
    num: '01',
    label: 'INPUT PHASE',
    title: 'Active Listening',
    icon: ICONS.sound,
    accent: 'var(--custom-green)',
    description:
      'Candidates analyze native pacing, vowel stresses, and intonation flows rather than solitary words, training the auditory system to recognize natural speech patterns.',
  },
  {
    num: '02',
    label: 'REMODELING PHASE',
    title: 'Acoustic Mimicking',
    icon: ICONS.mic,
    accent: '#e8b84b',
    description:
      'Under guidance, you instantly mouth and repeat words with 0.2s delay (shadowing). This matches physical jaw coordination and breath control to native speeds.',
  },
  {
    num: '03',
    label: 'ACTIVATION PHASE',
    title: 'Dynamic Execution',
    icon: ICONS.play,
    accent: 'var(--custom-blue-light)',
    description:
      'Perform in mock corporate executive boards, negotiations, or community workshops, cementing bicultural confidence and lateral expression.',
  },
];

const OUTCOMES = [
  {
    icon: ICONS.chat,
    title: 'Real-World Communication',
    body: 'Abandon robotic dictionary sentences. Learn real idioms, pacing, dynamic metaphors, and the natural flow used daily by high-level corporate executives.',
  },
  {
    icon: ICONS.mic,
    title: 'Pronunciation Mastery',
    body: 'Refine speech mechanics, syllable stress, intonation, and rhythm to deliver clear proposals that command attention.',
  },
  {
    icon: ICONS.shield,
    title: 'Bold Confidence Building',
    body: 'Overcome immediate performance anxiety during executive boardrooms, sales negotiations, and community dinners.',
  },
  {
    icon: ICONS.briefcase,
    title: 'Global Career Readiness',
    body: 'Understand the unwritten rules of corporate collaboration, resumes, pitch meetings, and collaborative NZ/Australian office structures.',
  },
  {
    icon: ICONS.users,
    title: 'Professional Networking',
    body: 'Acquire high-status conversation openers, listening cues, and social dialogue models to expand your social and commercial capital.',
  },
  {
    icon: ICONS.award,
    title: 'Communication Mastery',
    body: 'Reach a status where English feels like a seamless part of your cognitive framework, facilitating lateral thought and persuasion.',
  },
];

const AI_FEATURES = [
  {
    icon: ICONS.phone,
    title: 'MOBILE COMPANION LINK',
    body: 'Self-guided vocal mirroring tool allowing users to complete dynamic mimicking modules daily.',
  },
  {
    icon: ICONS.chart,
    title: 'FORMANT SPEECH ANALYTICS',
    body: 'Acoustic analyzing measuring voice pacing, syllable stress ratios, and tonal dips.',
  },
  {
    icon: ICONS.sound,
    title: 'REAL-TIME TONE SHADOWING',
    body: 'Instantly matches vocal delivery speeds to standard executive levels to overcome speech anxiety.',
  },
  {
    icon: ICONS.star,
    title: 'AI PROGRESS TRACKING',
    body: 'Diagnostic tracking mapping auditory accuracy, flow coherence, and visual score progressions.',
  },
];

const TESTIMONIALS = [
  {
    name: 'Priya M.',
    role: 'Corporate Manager, Auckland',
    quote:
      'The shadowing method completely transformed how I communicate in board meetings. I no longer translate in my head.',
    rating: 5,
  },
  {
    name: 'Rajan T.',
    role: 'Sales Executive, Wellington',
    quote:
      'Within six weeks I was leading negotiations I would have previously avoided. The acoustic mimicking phase was a revelation.',
    rating: 5,
  },
  {
    name: 'Dilnoza K.',
    role: 'Graduate Engineer, Christchurch',
    quote:
      'Fluency Bridge gave me the bicultural confidence I needed. My pacing, intonation, and rhythm are now entirely natural.',
    rating: 5,
  },
];

/* ─── Small helpers ───────────────────────────────────────────────── */

function Icon({ path, className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      {path}
    </svg>
  );
}

/** Polished INTERACTIVE MODULE panel — matches PDF aesthetic */
function InteractiveModule() {
  const [coherence, setCoherence] = useState(94.8);
  const [offset, setOffset] = useState(0.12);
  const [accuracy, setAccuracy] = useState(87);
  const [flowScore, setFlowScore] = useState(91);
  const [tick, setTick] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    let frame = 0;
    const animate = () => {
      frame += 1;
      if (frame % 55 === 0) {
        setCoherence(parseFloat((88 + Math.random() * 9).toFixed(1)));
        setOffset(parseFloat((0.10 + Math.random() * 0.18).toFixed(2)));
        setAccuracy(Math.round(82 + Math.random() * 14));
        setFlowScore(Math.round(85 + Math.random() * 12));
        setTick((t) => t + 1);
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const bars = [4, 7, 5, 9, 6, 10, 8, 5, 7, 9, 6, 8, 10, 7, 5, 8, 6, 9, 7, 10];
  const activeBars = new Set([tick % bars.length, (tick + 3) % bars.length, (tick + 7) % bars.length]);

  return (
    <div
      className="rounded-3xl overflow-hidden flex flex-col"
      style={{
        background: 'linear-gradient(160deg, rgba(6,15,35,0.97) 0%, rgba(4,22,46,0.96) 100%)',
        border: '1px solid rgba(255,255,255,0.10)',
        boxShadow: '0 0 0 1px rgba(0,200,130,0.12), 0 24px 60px rgba(0,0,0,0.55)',
      }}
    >
      {/* ── Title bar ── */}
      <div className="flex items-center justify-between px-5 py-3 border-b" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'rgba(0,200,130,0.7)' }} />
          </div>
          <span
            className="text-[0.55rem] font-black uppercase tracking-[0.25em] px-3 py-1 rounded-full"
            style={{ backgroundColor: 'var(--custom-green)', color: '#071a10' }}
          >
            INTERACTIVE MODULE
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: 'var(--custom-green)' }} />
          <span className="text-[0.6rem] font-mono text-white/35">Active Engine v2.1</span>
        </div>
      </div>

      {/* ── Code comment ── */}
      <div className="px-5 pt-4 pb-2">
        <p className="text-[0.65rem] font-mono tracking-wide" style={{ color: 'var(--custom-green)' }}>
          {'// ANALYZING INPUT SPEECH PATHWAY'}
        </p>
      </div>

      {/* ── Main body: ring + metrics ── */}
      <div className="flex items-center gap-5 px-5 pb-4">
        {/* Coherence ring */}
        <div className="relative shrink-0 flex items-center justify-center" style={{ width: 96, height: 96 }}>
          <RingProgress value={coherence} />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-black text-white text-sm leading-none">{coherence}%</span>
            <span className="text-[0.5rem] font-bold uppercase tracking-wider mt-0.5" style={{ color: 'var(--custom-green)' }}>Coherence</span>
          </div>
        </div>

        {/* Side metrics */}
        <div className="flex flex-col gap-2 flex-1">
          <div className="flex items-center justify-between rounded-xl px-3 py-2" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <span className="text-[0.6rem] font-bold uppercase tracking-wider text-white/40">Speed Offset</span>
            <span className="font-black font-mono text-sm" style={{ color: 'var(--custom-blue-light)' }}>{offset}s</span>
          </div>
          <div className="flex items-center justify-between rounded-xl px-3 py-2" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <span className="text-[0.6rem] font-bold uppercase tracking-wider text-white/40">Auditory Accuracy</span>
            <span className="font-black font-mono text-sm text-white">{accuracy}%</span>
          </div>
          <div className="flex items-center justify-between rounded-xl px-3 py-2" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <span className="text-[0.6rem] font-bold uppercase tracking-wider text-white/40">Flow Score</span>
            <span className="font-black font-mono text-sm" style={{ color: '#e8b84b' }}>{flowScore}%</span>
          </div>
        </div>
      </div>

      {/* ── Waveform ── */}
      <div className="px-5 pb-4">
        <div
          className="rounded-2xl px-4 pt-3 pb-3 flex items-end gap-0.5"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', height: 72 }}
        >
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-full transition-all duration-700"
              style={{
                height: `${h * 6}%`,
                backgroundColor: activeBars.has(i)
                  ? '#e8b84b'
                  : i % 4 === 0
                  ? 'var(--custom-green)'
                  : 'rgba(255,255,255,0.14)',
              }}
            />
          ))}
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="mx-5 h-px" style={{ backgroundColor: 'rgba(255,255,255,0.07)' }} />

      {/* ── Footer ── */}
      <div className="px-5 py-4 flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'var(--custom-green)' }}>
            <svg className="w-3 h-3 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <p className="text-white font-black text-sm">Shadow-Voice Feedback</p>
        </div>
        <p className="text-white/50 text-[0.68rem] leading-relaxed">
          Practice daily alongside Founder Chathuranga and senior advisors within our upcoming bespoke
          speech-shadowing platform.
        </p>
      </div>
    </div>
  );
}

/* ─── Page component ──────────────────────────────────────────────── */

export default function FluencyBridge() {
  const [activeStage, setActiveStage] = useState(0);
  const stage = STAGES[activeStage];

  return (
    <BannerBackground
      fixed
      image={heroBanner}
      ariaLabel="Professional speaking confidently in a modern corporate setting"
      overlayClassName="bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/85"
      particleCount={48}
    >
      <main className="bright-banner-glass relative z-20 w-full">

        {/* ─── Hero ───────────────────────────────────────────────── */}
        <header className="px-6 pt-28 pb-6 sm:pt-32 sm:pb-8">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-5">
            <span
              className="inline-flex items-center gap-2 text-[0.6rem] sm:text-xs font-bold uppercase tracking-[0.25em] text-white px-4 py-1.5 rounded-full"
              style={{ backgroundColor: 'var(--custom-blue)' }}
            >
              Fluency Bridge
            </span>

            <h1
              className="sans-font text-3xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight"
              style={{ textShadow: '0 4px 24px rgba(0,0,0,0.45)' }}
            >
              Shift from Learning English{' '}
              <span style={{ color: 'var(--custom-green)' }}>to Executing It</span>
            </h1>

            <p
              className="text-white/90 text-sm sm:text-base md:text-lg font-medium max-w-2xl leading-relaxed"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
            >
              Replace passive textbook translation drills with elite systems-driven mimicry coaching.
              Command meetings, secure roles, and master bicultural communication.
            </p>

            <a
              href="https://wa.me/642108631134"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full px-7 py-3 font-black text-sm text-white uppercase tracking-widest transition-opacity hover:opacity-85 interactive-el"
              style={{ backgroundColor: 'var(--custom-green)' }}
            >
              Start Your Fluency Journey
            </a>
          </div>
        </header>

        {/* ─── 3-Step Natural English Method ──────────────────────── */}
        <section className="py-6 sm:py-9">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal className="reveal text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--custom-green-light)' }}>
                Methodology
              </span>
              <h2
                className="sans-font text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mt-2"
                style={{ textShadow: '0 2px 14px rgba(0,0,0,0.4)' }}
              >
                The 3-Step Natural English Method
              </h2>
              <p className="text-white/90 text-sm sm:text-base mt-3">
                Our coaching bypasses native cognitive translation loops, teaching you to speak dynamically by
                mimicking acoustic cues.
              </p>
            </Reveal>

            <div className="grid lg:grid-cols-[280px_1fr] gap-5">
              {/* Stage selector tabs */}
              <Reveal className="reveal flex lg:flex-col gap-3">
                {STAGES.map((s, i) => {
                  const active = i === activeStage;
                  return (
                    <button
                      key={s.num}
                      type="button"
                      onClick={() => setActiveStage(i)}
                      className={`shrink-0 lg:w-full text-left flex items-center gap-3 rounded-2xl px-4 py-4 transition interactive-el ${
                        active
                          ? 'liquid-glass shadow-xl'
                          : 'bg-slate-900/60 border border-white/15 hover:bg-slate-900/75'
                      }`}
                    >
                      <span
                        className="flex items-center justify-center w-8 h-8 rounded-full shrink-0"
                        style={{ backgroundColor: active ? s.accent : 'rgba(255,255,255,0.18)' }}
                      >
                        <Icon path={s.icon} className="w-4 h-4 text-white" />
                      </span>
                      <span>
                        <span className="block font-black text-sm text-white">{s.title}</span>
                        <span className="block text-[0.65rem] font-bold text-white/45">Stage {s.num}</span>
                      </span>
                    </button>
                  );
                })}
              </Reveal>

              {/* Stage detail */}
              <Reveal delay={100} className="reveal liquid-glass rounded-3xl p-8 sm:p-10 flex flex-col gap-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-[0.65rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white" style={{ backgroundColor: stage.accent }}>
                    Stage {stage.num}
                  </span>
                  <span className="text-white/40 text-[0.65rem] font-mono">Ethical Standard Checked</span>
                </div>

                <div className="flex items-center gap-4">
                  <span
                    className="flex items-center justify-center w-14 h-14 rounded-2xl shrink-0"
                    style={{ backgroundColor: stage.accent }}
                  >
                    <Icon path={stage.icon} className="w-7 h-7 text-white" />
                  </span>
                  <h3 className="sans-font text-xl sm:text-2xl font-black text-white leading-tight">
                    {stage.title}
                  </h3>
                </div>

                <p className="text-white/90 text-sm sm:text-base leading-relaxed text-justify">
                  {stage.description}
                </p>

                <div className="h-px bg-white/15" />

                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-2 text-white/55 text-xs sm:text-sm">
                    <Icon path={ICONS.shield} className="w-4 h-4 shrink-0" />
                    <span>Systems-driven. Scientifically structured.</span>
                  </div>
                  <div className="flex gap-2">
                    {STAGES.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setActiveStage(i)}
                        className="w-2 h-2 rounded-full transition-all interactive-el"
                        style={{ backgroundColor: i === activeStage ? 'var(--custom-green)' : 'rgba(255,255,255,0.25)' }}
                        aria-label={`Stage ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ─── Fluency Bridge Core Outcomes ───────────────────────── */}
        <section className="py-6 sm:py-9">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal className="reveal text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--custom-blue-light)' }}>
                What You Master
              </span>
              <h2
                className="sans-font text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mt-2"
                style={{ textShadow: '0 2px 14px rgba(0,0,0,0.4)' }}
              >
                Fluency Bridge Core Outcomes
              </h2>
              <p className="text-white/85 text-sm sm:text-base mt-3">
                Master cognitive elements tailored specifically for global career readiness and executive networking.
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {OUTCOMES.map((o, i) => (
                <Reveal
                  key={o.title}
                  delay={i * 70}
                  className="reveal liquid-glass rounded-3xl p-7 flex flex-col gap-4"
                >
                  <span
                    className="flex items-center justify-center w-12 h-12 rounded-2xl shrink-0"
                    style={{ backgroundColor: i % 2 === 0 ? 'var(--custom-green)' : 'var(--custom-blue)' }}
                  >
                    <Icon path={o.icon} className="w-6 h-6 text-white" />
                  </span>
                  <h3 className="sans-font text-sm sm:text-base font-black text-white leading-tight uppercase tracking-wide">
                    {o.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed text-justify">{o.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── AI-Powered Pronunciation & Shadowing Ecosystem ─────── */}
        <section className="py-6 sm:py-9">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

              {/* Left – text content */}
              <Reveal className="reveal flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <span
                    className="self-start text-[0.6rem] font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full border"
                    style={{ color: 'var(--custom-green)', borderColor: 'var(--custom-green)', backgroundColor: 'rgba(0,200,130,0.08)' }}
                  >
                    Scientific Development
                  </span>
                  <h2 className="sans-font text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
                    AI-Powered Pronunciation &amp; Shadowing Ecosystem
                  </h2>
                  <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                    Unlike conventional written courses, Fluency Bridge integrates custom auditory-feedback platforms.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {AI_FEATURES.map((f) => (
                    <div key={f.title} className="liquid-glass rounded-2xl p-5 flex flex-col gap-3">
                      <div className="flex items-center gap-2">
                        <span
                          className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0"
                          style={{ backgroundColor: 'var(--custom-green)', opacity: 0.92 }}
                        >
                          <Icon path={f.icon} className="w-4 h-4 text-white" />
                        </span>
                        <span className="text-white font-black text-[0.6rem] uppercase tracking-wider leading-tight">
                          {f.title}
                        </span>
                      </div>
                      <p className="text-white/75 text-xs leading-relaxed">{f.body}</p>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Right – animated INTERACTIVE MODULE */}
              <Reveal delay={120} className="reveal">
                <InteractiveModule />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ─── Testimonials – Endorsed by Global Minds ────────────── */}
        <section className="py-6 sm:py-9">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal className="reveal text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--custom-green-light)' }}>
                Endorsed by Global Minds
              </span>
              <h2
                className="sans-font text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mt-2"
                style={{ textShadow: '0 2px 14px rgba(0,0,0,0.4)' }}
              >
                Real testimonies of students
              </h2>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={t.name} delay={i * 80} className="reveal liquid-glass rounded-3xl p-7 flex flex-col gap-4">
                  {/* stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <svg key={s} className="w-4 h-4" fill="var(--custom-green)" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <div className="flex gap-3 items-start">
                    <Icon path={ICONS.quote} className="w-6 h-6 shrink-0 mt-0.5" style={{ color: 'var(--custom-green)' }} />
                    <p className="text-white/90 text-sm leading-relaxed italic">{t.quote}</p>
                  </div>

                  <div className="mt-auto flex items-center gap-3 pt-3 border-t border-white/15">
                    <span
                      className="flex items-center justify-center w-9 h-9 rounded-full font-black text-sm text-white shrink-0"
                      style={{ backgroundColor: 'var(--custom-blue)' }}
                    >
                      {t.name[0]}
                    </span>
                    <div>
                      <p className="text-white font-bold text-sm">{t.name}</p>
                      <p className="text-white/55 text-[0.65rem] font-semibold uppercase tracking-wider">{t.role}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA band ────────────────────────────────────────────── */}
        <section className="py-6 sm:py-10 pb-16 sm:pb-24">
          <div className="max-w-4xl mx-auto px-6">
            <Reveal className="reveal liquid-glass rounded-3xl p-9 sm:p-12 text-center flex flex-col items-center gap-5">
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--custom-green-light)' }}>
                Your Voice. Elevated.
              </span>
              <h2 className="sans-font text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
                Command Every Room You Walk Into
              </h2>
              <p className="text-white/90 text-sm sm:text-base max-w-xl leading-relaxed">
                Speak with a Fluency Bridge advisor today and discover which stage of the Natural English Method is right
                for your current level and career goals.
              </p>

              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <a
                  href="tel:+6421086311134"
                  className="flex items-center gap-2 text-white/80 hover:text-white transition interactive-el"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +64 210 863 1134
                </a>
                <a
                  href="https://wa.me/94775544240"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/80 hover:text-white transition interactive-el"
                >
                  <svg className="w-4 h-4" fill="#25D366" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.115zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  +94 77 5544 240
                </a>
              </div>

              <a
                href="https://wa.me/642108631134"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 font-black text-sm text-white uppercase tracking-widest transition-opacity hover:opacity-85 interactive-el"
                style={{ backgroundColor: 'var(--custom-green)' }}
              >
                <svg className="w-4 h-4" fill="#fff" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.115zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                Book a Free Session on WhatsApp
              </a>
            </Reveal>
          </div>
        </section>

      </main>
    </BannerBackground>
  );
}
