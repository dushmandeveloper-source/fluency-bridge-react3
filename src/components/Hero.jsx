import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import bannerImage from '../assets/banner.png';

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
        src={bannerImage}
        alt="Climber reaching the summit with the New Zealand flag"
        className="absolute inset-0 w-full h-full object-cover object-center animate-bg-zoom opacity-90"
      />

      <div className="absolute inset-0 bg-slate-900/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50" />

      <div className="relative z-20 w-full max-w-4xl mx-auto px-6 md:px-12 flex flex-col items-center text-center gap-6 mt-16">
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

        <div className="w-10 h-1 rounded-full" style={{ backgroundColor: 'var(--custom-green)' }} />

        <p
          ref={subtextPanelRef}
          className="text-white text-lg lg:text-xl font-medium leading-relaxed drop-shadow-md max-w-2xl"
          style={{ opacity: 0, transform: 'translateY(30px)' }}
        >
          Premium English Coaching and Ethical New Zealand Education Consultancy driven by industry professionals.
        </p>
      </div>
    </header>
  );
}
