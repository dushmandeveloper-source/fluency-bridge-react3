import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { animate } from 'animejs';

import BannerBackground from '../components/BannerBackground';
import Reveal from '../components/Reveal';
import homeBanner from '../assets/banner.png';
import fluencyBridgeImage from '../assets/home-banner.png';
import nzAcademicBridgeImage from '../assets/NZ Academic Bridge.png';
import fluencyBridgeLogo from '../assets/NZ01.png';
import nzAcademicBridgeLogo from '../assets/NZ02.png';
import ceoPhoto from '../assets/team-ceo.png';
import ourStoryImage from '../assets/our-story.png';

// Home — glassmorphism (liquid-glass) panels floating over the shared fixed home
// banner image, mirroring the About Us layout. BannerBackground (fixed) supplies
// the zooming photo, dark overlay and sparkle particles; every card is a
// transparent frosted-glass panel.

// Temporarily hidden sections — flip to true to bring them back.
const SHOW_WHY_CHOOSE_US = false;

const BRANCHES = [
  { name: 'Fluency Bridge', href: '#/fluency-bridge', desc: 'Our elite frontline program focusing on high-performance English communication coaching for professionals and international students following the Natural English Method.', color: 'var(--custom-green)' },
  { name: 'NZ Academic Bridge', href: '#/nz-academic-bridge', desc: 'Our specialised, dedicated branding branch established to execute all international student recruitment, expert tertiary placement, and career transition consultancy services.', color: 'var(--custom-blue-light)' },
];

const VISION_MISSION = [
  { label: 'Our Vision', color: 'var(--custom-green)', text: 'To serve as your primary partner in global professional and academic advancement, empowering you to command authoritative English communication and achieve a smooth, successful transition into New Zealand’s high-growth industries.' },
  { label: 'Our Mission', color: 'var(--custom-green)', text: 'We strive to eliminate structural and linguistic obstacles by providing expert coaching through our Natural Method, which integrates shadowing, mimicking, and active-passive listening to build authentic fluency. In parallel, we provide ethical, student-centered education consulting and international recruitment services, ensuring you receive transparent and comprehensive guidance with absolutely no agency fees charged to you.' },
  { label: 'Our Values', color: 'var(--custom-blue-light)', text: 'We operate with a commitment to absolute integrity, ensuring total clarity and honesty with no hidden costs or unexpected charges for our students. We prioritize practical, science-based learning that favors real-world skills like acoustic shadowing over traditional rote memorization, and we provide dedicated, long-term support that deeply respects the local culture and the unique heritage of Aotearoa New Zealand.' },
];

const PROGRAMS = [
  {
    id: 'fluency-bridge',
    href: '#/fluency-bridge',
    image: fluencyBridgeImage,
    logo: fluencyBridgeLogo,
    logoAlt: 'Fluency Bridge logo',
    badge: { value: '100%', label: 'Natural Method' },
    swapBadgeLogo: true,
    title: 'Fluency Bridge',
    description:
      'Elite frontline program focusing on high-performance English communication coaching for professionals and international students.',
    buttonText: 'Explore coaching',
    color: 'var(--custom-green)',
    facebookHref: 'https://www.facebook.com/share/1QpNGEReAV/?mibextid=wwXIfr',
  },
  {
    id: 'nz-academic-bridge',
    href: '#/nz-academic-bridge',
    image: nzAcademicBridgeImage,
    logo: nzAcademicBridgeLogo,
    logoAlt: 'NZ Academic Bridge logo',
    badge: { value: '100%', label: 'Free Placement' },
    swapBadgeLogo: true,
    title: 'NZ Academic Bridge',
    description:
      'Dedicated branding branch to execute international student recruitment, tertiary placement, and career transition consultancy.',
    buttonText: 'Explore consultancy',
    color: 'var(--custom-blue-light)',
    facebookHref: 'https://www.facebook.com/share/1KrECNtYBq/?mibextid=wwXIfr',
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
  { name: 'Chanaka', quote: 'Joining Fluency Bridge is the best decision I make this year. I feel much more confident when I speak now, thanks to your unique method.' },
  { name: 'Dilini', quote: 'Your teaching style is very different. I stop translating in my head and finally starting to speak naturally. Highly recommend.' },
  { name: 'Kasun', quote: 'I really struggle with my intonation before, but Chathuranga sir helped me fix it so quickly. Very practical sessions.' },
  { name: 'Nadeesha', quote: 'Finally I found a place where focus is on rhythm and connected speech than grammar books.' },
  { name: 'Ravindu', quote: 'Simple and effective lessons. I never thought I could sound this fluent in just few 12 weeks. Thank you so much.' },
  { name: 'Anuththara', quote: 'Your way of teaching is very clear. It helps me to express my thoughts without worrying too much about the grammar rules.' },
  { name: 'Sahan', quote: 'Great program. The way you teach intonation make my speech sound much more professional and natural.' },
  { name: 'Ishara', quote: 'I love how we practice spontaneous speaking. It really help me to be ready for real-life conversations.' },
  { name: 'Nuwan', quote: 'The Natural Method is truly working. I feel like I am talking with lot of confidence now.' },
  { name: 'Tharushi', quote: "Thank you for the guidance. I was always afraid to speak up, but now I don't feel nervous when I have to talk." },
  { name: 'Gayan', quote: 'Practical and very helpful for my career. The lessons are easy to follow and the improvement is very fast.' },
  { name: 'Mahesh', quote: 'I appreciate how you focus on rhythm instead of just boring grammar. It make everything so much easier to understand.' },
  { name: 'Chathuri', quote: 'Really enjoy the sessions. Your encouragement helped me to overcome my hesitation to speak in English.' },
  { name: 'Pasindu', quote: 'Amazing experience. I learn so much about how to connect my words properly. Definitely worth the time.' },
  { name: 'Senuri', quote: 'Excellent program for anyone who want to speak English fluently. The coaching is very personalized and supportive.' },
];

const TESTIMONIAL_GAP = 20; // px, matches gap-5
const TESTIMONIAL_SET = TESTIMONIALS.length;
// Triplicated so the track always has a buffer copy on both sides, letting the
// carousel snap seamlessly when stepping past either edge of the middle set.
const TESTIMONIAL_TRACK = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

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

  const testimonialViewportRef = useRef(null);
  const testimonialTrackRef = useRef(null);
  const testimonialIndexRef = useRef(TESTIMONIAL_SET);
  const testimonialCardWidthRef = useRef(0);
  const testimonialTimerRef = useRef(null);
  const [testimonialCardWidth, setTestimonialCardWidth] = useState(null);
  const [testimonialDot, setTestimonialDot] = useState(0);

  useEffect(() => {
    function measure() {
      const el = testimonialViewportRef.current;
      if (!el) return;
      const visibleCount = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
      const width = (el.clientWidth - TESTIMONIAL_GAP * (visibleCount - 1)) / visibleCount;
      testimonialCardWidthRef.current = width;
      setTestimonialCardWidth(width);
    }
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const goToTestimonialIndex = (nextIndexRaw) => {
    const track = testimonialTrackRef.current;
    const width = testimonialCardWidthRef.current;
    if (!track || !width) return;
    const step = width + TESTIMONIAL_GAP;
    let nextIndex = nextIndexRaw;

    setTestimonialDot(((nextIndex % TESTIMONIAL_SET) + TESTIMONIAL_SET) % TESTIMONIAL_SET);

    animate(track, {
      translateX: -(nextIndex * step),
      duration: 900,
      ease: 'inOutQuad',
      onComplete: () => {
        // Snap invisibly back into the middle copy once we drift into a buffer copy
        if (nextIndex >= TESTIMONIAL_SET * 2) nextIndex -= TESTIMONIAL_SET;
        else if (nextIndex < TESTIMONIAL_SET) nextIndex += TESTIMONIAL_SET;
        testimonialIndexRef.current = nextIndex;
        track.style.transform = `translateX(${-(nextIndex * step)}px)`;
      },
    });
  };

  const slideTestimonials = (direction) => goToTestimonialIndex(testimonialIndexRef.current + direction);

  useEffect(() => {
    testimonialTrackRef.current.style.transform = `translateX(${-(testimonialIndexRef.current * (testimonialCardWidth + TESTIMONIAL_GAP))}px)`;
  }, [testimonialCardWidth]);

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined;
    testimonialTimerRef.current = setInterval(() => slideTestimonials(1), 6000);
    return () => clearInterval(testimonialTimerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- runs once; slideTestimonials reads refs, not stale state
  }, []);

  const restartTestimonialAutoplay = () => {
    clearInterval(testimonialTimerRef.current);
    if (!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      testimonialTimerRef.current = setInterval(() => slideTestimonials(1), 6000);
    }
  };

  const handleTestimonialNav = (direction) => {
    clearInterval(testimonialTimerRef.current);
    slideTestimonials(direction);
    restartTestimonialAutoplay();
  };

  const handleTestimonialDotClick = (dot) => {
    clearInterval(testimonialTimerRef.current);
    const current = testimonialIndexRef.current;
    const base = current - (((current % TESTIMONIAL_SET) + TESTIMONIAL_SET) % TESTIMONIAL_SET);
    goToTestimonialIndex(base + dot);
    restartTestimonialAutoplay();
  };

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
          <div className="max-w-4xl mx-auto flex flex-col items-start text-left gap-5">
            <p className="text-white/90 text-xl sm:text-2xl md:text-[1.7rem] font-bold leading-tight" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
              Premium English coaching and ethical New&nbsp;Zealand<br />
              education consultancy.
            </p>
          </div>
        </header>

        {/* ---------- Programs ---------- */}
        <section className="pt-2 pb-6 sm:pt-3 sm:pb-9">
          <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {PROGRAMS.map((p, i) => (
              <Reveal key={p.id} delay={i * 150} className="reveal relative">
                <div className="relative h-full">
                  <div className="absolute -inset-3 rounded-[2rem] opacity-25 blur-2xl" style={{ background: 'linear-gradient(135deg, var(--custom-green), var(--custom-blue))' }} />
                  <div className="liquid-glass relative h-full rounded-[2rem] shadow-2xl p-2.5 flex flex-col">
                    <div className="relative w-full h-32 sm:h-40 rounded-[1.5rem] overflow-hidden shrink-0">
                      <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover gsap-zoom" />
                      <div className={`absolute top-3 ${p.swapBadgeLogo ? 'left-3' : 'right-3'} text-white px-3 py-2 rounded-xl shadow-lg text-center`} style={{ backgroundColor: p.color }}>
                        <span className="block text-lg sm:text-xl font-black leading-none">{p.badge.value}</span>
                        <span className="block text-[8px] sm:text-[9px] uppercase tracking-wider font-bold leading-tight">{p.badge.label}</span>
                      </div>
                      <div className={`absolute top-3 ${p.swapBadgeLogo ? 'right-3' : 'left-3'} ${p.id === 'nz-academic-bridge' ? 'w-20 h-20 sm:w-24 sm:h-24' : 'w-[4.5rem] h-[4.5rem] sm:w-[5.5rem] sm:h-[5.5rem]'} rounded-full flex items-center justify-center shadow-lg overflow-hidden`}>
                        <img src={p.logo} alt={p.logoAlt} className="w-full h-full object-cover rounded-full" />
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
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------- Our Story ---------- */}
        <section className="py-6 sm:py-9">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal className="reveal liquid-glass rounded-[2rem] overflow-hidden grid lg:grid-cols-2">
              <div className="relative h-56 lg:h-auto order-1 lg:order-2">
                <img src={ourStoryImage} alt="Premier university campus" className="absolute inset-0 w-full h-full object-cover gsap-zoom" />
              </div>
              <div className="p-8 sm:p-10 flex flex-col justify-center gap-5 order-2 lg:order-1">
                <h2 className="sans-font text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
                  Our Story
                </h2>
                <p className="text-white/95 text-sm sm:text-base leading-relaxed text-justify">
                  Fluency Bridge Global Limited is a premier New Zealand-based, service-oriented enterprise. We bridge the
                  gap between regional potential and global success through our parent corporate infrastructure, managing
                  two distinct, specialised operational branches.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 gap-6 mt-6 lg:mt-8">
            {BRANCHES.map((b, i) => (
              <Reveal key={b.name} delay={i * 120} className="reveal">
                <a
                  href={b.href}
                  className="liquid-glass relative rounded-3xl p-6 sm:p-7 flex flex-col gap-3 h-full overflow-hidden transition-all duration-300 ease-out hover:-translate-y-2 interactive-el"
                >
                  <span className="absolute top-0 left-0 right-0 h-1.5" style={{ backgroundColor: b.color }} />
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0" style={{ backgroundColor: b.color, boxShadow: '0 2px 8px rgba(0,0,0,0.15)', color: '#ffffff' }}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <p className="font-black text-white text-base sm:text-lg">{b.name}</p>
                  <p className="text-white/95 text-sm sm:text-base leading-relaxed text-justify">{b.desc}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------- Who we are ---------- */}
        <section className="py-6 sm:py-9">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal className="reveal text-center max-w-2xl mx-auto mb-8 sm:mb-10">
              <h2 className="sans-font text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight" style={{ textShadow: '0 2px 14px rgba(0,0,0,0.4)' }}>Who We Are</h2>
            </Reveal>
          </div>
          <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-6 sm:gap-8">
            {VISION_MISSION.map((c, i) => (
              <Reveal
                key={c.label}
                delay={i * 140}
                className={`reveal liquid-glass relative rounded-3xl p-8 sm:p-9 flex flex-col gap-4 overflow-hidden ${i === 2 ? 'md:col-span-2 md:max-w-md md:mx-auto md:w-full' : ''}`}
              >
                <span
                  className={`absolute h-1.5 w-1/2 ${i === 2 ? 'bottom-0 left-1/4' : i === 1 ? 'top-0 right-0' : 'top-0 left-0'}`}
                  style={{ backgroundColor: c.color }}
                />
                <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: c.color }}>{c.label}</span>
                <p className="text-white/95 text-sm sm:text-base leading-relaxed text-justify">{c.text}</p>
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

        {/* ---------- Meet Our CEO ---------- */}
        <section className="py-6 sm:py-9">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal className="reveal text-center max-w-2xl mx-auto mb-8 sm:mb-10">
              <h2 className="sans-font text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight" style={{ textShadow: '0 2px 14px rgba(0,0,0,0.4)' }}>Meet Our CEO</h2>
            </Reveal>
            <Reveal className="reveal liquid-glass rounded-3xl overflow-hidden grid lg:grid-cols-2 gap-0 items-center">
              <div className="relative order-2 lg:order-1 w-full max-w-[320px] sm:max-w-[380px] aspect-[4/5] mx-auto my-6 lg:my-0">
                <img src={ceoPhoto} alt="Chathuranga Liyanage" className="absolute inset-0 w-full h-full object-cover object-top rounded-2xl" />
              </div>
              <div className="p-8 sm:p-10 flex flex-col justify-center gap-4 order-1 lg:order-2">
                <h3 className="sans-font text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">Chathuranga Liyanage</h3>
                <p className="font-bold text-sm" style={{ color: 'var(--custom-blue-light)' }}>Founder &amp; CEO — Fluency Bridge Global Limited</p>
                <p className="text-white/80 text-xs sm:text-sm font-semibold">B.Sc. Civil Engineering (Hons) — University of Peradeniya (2011)</p>
                <p className="text-white/95 text-sm sm:text-base leading-relaxed text-justify">
                  Over 15 years of diverse, international experience in the civil engineering industry. Currently
                  directing operations as a Construction Project Manager in New Zealand. He applies engineering precision
                  and project management skills to global education,
                  mentoring future leaders with a philosophy built on lived experience across all parent portfolios and
                  subsidiary branches.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- Why choose us (hidden for now) ---------- */}
        {SHOW_WHY_CHOOSE_US && (
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
                  <span className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', color: f.color }}>
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
        )}

        {/* ---------- Testimonials – Endorsed by Global Minds ---------- */}
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

            <div className="relative">
              <button
                type="button"
                onClick={() => handleTestimonialNav(-1)}
                aria-label="Previous testimonial"
                className="interactive-el hidden sm:flex items-center justify-center absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full shadow-lg"
                style={{ backgroundColor: '#ffffff', color: 'var(--custom-blue)' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => handleTestimonialNav(1)}
                aria-label="Next testimonial"
                className="interactive-el hidden sm:flex items-center justify-center absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full shadow-lg"
                style={{ backgroundColor: '#ffffff', color: 'var(--custom-blue)' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <div ref={testimonialViewportRef} className="overflow-hidden">
                <div ref={testimonialTrackRef} className="flex gap-5" style={{ visibility: testimonialCardWidth ? 'visible' : 'hidden' }}>
                  {TESTIMONIAL_TRACK.map((t, i) => (
                  <div
                    key={i}
                    className="liquid-glass rounded-3xl p-7 flex flex-col gap-4 shrink-0"
                    style={{ width: testimonialCardWidth ? `${testimonialCardWidth}px` : undefined }}
                  >
                    {/* stars */}
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <svg key={s} className="w-5 h-5" fill="var(--custom-green)" viewBox="0 0 20 20" aria-hidden="true">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <div className="flex gap-3 items-start">
                      <svg className="w-6 h-6 shrink-0 mt-0.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                      <p className="text-white/90 text-sm leading-relaxed italic">{t.quote}</p>
                    </div>

                    <div className="mt-auto flex items-center gap-3 pt-3 border-t border-white/15">
                      <span
                        className="flex items-center justify-center w-9 h-9 rounded-full font-black text-sm text-white shrink-0"
                        style={{ backgroundColor: 'var(--custom-blue)' }}
                      >
                        {t.name[0]}
                      </span>
                      <p className="text-white font-bold text-sm">{t.name}</p>
                    </div>
                  </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center flex-wrap gap-2 mt-6">
              {TESTIMONIALS.map((t, dot) => (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => handleTestimonialDotClick(dot)}
                  aria-label={`Show testimonial from ${t.name}`}
                  className="interactive-el h-1.5 rounded-full transition-all"
                  style={{
                    width: dot === testimonialDot ? '1.5rem' : '0.375rem',
                    backgroundColor: dot === testimonialDot ? 'var(--custom-green)' : 'rgba(255,255,255,0.25)',
                  }}
                />
              ))}
            </div>
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
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
                <a href="#/team" className="inline-flex items-center gap-2 bg-white/15 border border-white/40 text-white font-bold text-sm py-3 px-7 rounded-xl transition-all hover:bg-white/25 interactive-el">
                  Meet Our Consultants
                </a>
              </div>
            </Reveal>
          </div>
        </section>

      </main>
    </BannerBackground>
  );
}
