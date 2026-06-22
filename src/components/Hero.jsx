import { useEffect, useState } from 'react';
import MotionText from './MotionText';

export default function Hero() {
  const [subtextVisible, setSubtextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setSubtextVisible(true), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="relative z-10 w-full pt-20 sm:pt-24 md:pt-28 pb-2 sm:pb-3">
      <div className="relative z-20 w-full max-w-4xl mx-auto px-6 md:px-12 flex flex-col items-center text-center gap-3 sm:gap-4">
        <h1 className="flex items-baseline justify-center gap-2 sm:gap-3 whitespace-nowrap text-[clamp(1.5rem,4.2vw,3.4rem)] font-black text-white leading-[1.05] tracking-tight sans-font">
          <MotionText as="span" text="Architecting" delayOffset={200} glow glowRgb="0, 116, 255" />
          <MotionText
            as="span"
            text="Global Futures."
            delayOffset={900}
            accent
            accentColor="#ffffff"
            glowRgb="78, 166, 117"
          />
        </h1>

        <p
          className={`text-white text-sm sm:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl transition-all duration-1000 ease-out ${
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
