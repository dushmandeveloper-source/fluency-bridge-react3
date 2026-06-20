import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

export default function Hero() {
  const headingRef = useRef(null);
  const typingRef = useRef(null);
  const subtextPanelRef = useRef(null);

  useEffect(() => {
    gsap.from(headingRef.current, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.2,
    });

    gsap.to(subtextPanelRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: 'power3.out',
      delay: 0.8,
    });

    const loopTl = gsap.timeline({ repeat: -1 });
    loopTl
      .to(typingRef.current, {
        text: { value: 'Global Futures.', delimiter: '' },
        duration: 2.5,
        ease: 'none',
        delay: 0.5,
      })
      .to({}, { duration: 5 })
      .to(typingRef.current, {
        text: { value: '', delimiter: '' },
        duration: 1,
        ease: 'none',
      })
      .to({}, { duration: 0.5 });

    return () => loopTl.kill();
  }, []);

  return (
    <header className="relative h-[75vh] min-h-[600px] w-full flex items-center overflow-hidden z-10 bg-slate-900">
      <img
        src="https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        alt="Mountain Climbing"
        className="absolute inset-0 w-full h-full object-cover object-center animate-bg-zoom opacity-90"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50" />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10 mt-16">
        <div className="w-full md:w-3/5">
          <h1
            ref={headingRef}
            className="text-5xl sm:text-7xl lg:text-[5.5rem] font-black text-white mb-2 leading-[1.05] tracking-tight sans-font drop-shadow-2xl"
          >
            Architecting
          </h1>
          <div className="h-[60px] sm:h-[80px] lg:h-[100px] flex items-center">
            <h2
              className="text-4xl sm:text-6xl lg:text-7xl font-bold serif-font italic drop-shadow-lg"
              style={{ color: '#e2f4ea' }}
            >
              <span ref={typingRef} />
              <span className="typing-cursor" />
            </h2>
          </div>
        </div>

        <div
          ref={subtextPanelRef}
          className="w-full md:w-2/5 glass-panel rounded-3xl p-8 lg:p-10 float-slow border-b border-r border-white/10"
          style={{ opacity: 0, transform: 'translateY(30px)' }}
        >
          <div className="w-10 h-1 mb-6 rounded-full" style={{ backgroundColor: 'var(--custom-green)' }} />
          <p className="text-white text-lg lg:text-xl font-medium leading-relaxed drop-shadow-md">
            Premium English Coaching and Ethical New Zealand Education Consultancy driven by industry professionals.
          </p>
        </div>
      </div>
    </header>
  );
}
