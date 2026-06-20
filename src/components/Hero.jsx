import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import bannerImage from '../assets/banner.png';
import MotionText from './MotionText';

export default function Hero() {
  const subtextPanelRef = useRef(null);

  useEffect(() => {
    gsap.to(subtextPanelRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: 'power3.out',
      delay: 1.2,
    });
  }, []);

  return (
    <header className="relative h-[75vh] min-h-[600px] w-full flex items-center overflow-hidden z-10 bg-slate-900">
      <img
        src={bannerImage}
        alt="Climber reaching the summit with the New Zealand flag"
        className="absolute inset-0 w-full h-full object-cover object-top animate-bg-zoom opacity-90"
      />

      <div className="absolute inset-0 bg-slate-900/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50" />

      <div className="relative z-20 w-full max-w-4xl mx-auto px-6 md:px-12 flex flex-col items-center text-center gap-6 mt-16">
        <MotionText
          as="h1"
          text="Architecting"
          delayOffset={200}
          className="text-5xl sm:text-7xl lg:text-[5.5rem] font-black text-white mb-2 leading-[1.05] tracking-tight sans-font drop-shadow-2xl"
        />

        <MotionText
          as="h2"
          text="Global Futures."
          delayOffset={900}
          accent
          accentColor="#e2f4ea"
          glowRgb="78, 166, 117"
          className="text-4xl sm:text-6xl lg:text-7xl font-bold drop-shadow-lg"
        />

        <div className="w-10 h-1 rounded-full" style={{ backgroundColor: 'var(--custom-green)' }} />

        <p
          ref={subtextPanelRef}
          className="text-white text-lg lg:text-xl font-medium leading-relaxed max-w-2xl"
          style={{ opacity: 0, transform: 'translateY(30px)', textShadow: '0 2px 10px rgba(0, 74, 204, 0.35)' }}
        >
          Premium English Coaching and Ethical New Zealand Education Consultancy driven by industry professionals.
        </p>
      </div>
    </header>
  );
}
