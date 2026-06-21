import { useEffect, useState } from 'react';
import bannerImage from '../assets/banner.png';
import MotionText from './MotionText';

export default function Hero() {
  const [subtextVisible, setSubtextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setSubtextVisible(true), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="relative min-h-[600px] sm:min-h-[640px] md:h-[65vh] md:min-h-[560px] w-full flex items-center overflow-hidden z-10 bg-slate-900 py-28 md:py-0">
      <img
        src={bannerImage}
        alt="Climber reaching the summit with the New Zealand flag"
        className="absolute inset-0 w-full h-full object-cover object-top animate-bg-zoom opacity-90"
      />

      <div className="absolute inset-0 bg-slate-900/65" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50" />

      <div className="relative z-20 w-full max-w-4xl mx-auto px-6 md:px-12 flex flex-col items-center text-center gap-4 sm:gap-6 mt-8 sm:mt-12 md:mt-16">
        <MotionText
          as="h1"
          text="Architecting"
          delayOffset={200}
          loop
          className="text-4xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-black text-white mb-2 leading-[1.05] tracking-tight sans-font drop-shadow-2xl"
        />

        <MotionText
          as="h2"
          text="Global Futures."
          delayOffset={900}
          loop
          accent
          accentColor="#e2f4ea"
          glowRgb="78, 166, 117"
          className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold drop-shadow-lg"
        />

        <p
          className={`text-white text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl transition-all duration-1000 ease-out ${
            subtextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            textShadow:
              '0 0 8px rgba(78, 166, 117, 0.65), 0 0 8px rgba(0, 74, 204, 0.65), 0 0 20px rgba(0, 74, 204, 0.45), 0 2px 4px rgba(0, 0, 0, 0.3)',
          }}
        >
          Premium English Coaching and Ethical New Zealand Education Consultancy driven by industry professionals.
        </p>
      </div>
    </header>
  );
}
