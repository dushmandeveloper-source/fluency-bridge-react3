import { useEffect, useState } from 'react';

export default function Hero2() {
  const [subtextVisible, setSubtextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setSubtextVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="relative z-10 w-full pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-2 sm:pb-3">
      <div className="relative z-20 w-full max-w-4xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        {/* Subtitle wraps to 2 lines on small screens (max-w caps width) instead of shrinking unreadably small */}
        <p
          className={`text-white text-[0.65rem] sm:text-xs md:text-sm lg:text-base font-medium leading-relaxed max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl transition-all duration-1000 ease-out ${
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
