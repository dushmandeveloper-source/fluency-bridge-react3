import { useRef } from 'react';

// `interactive` (Home 2 only) adds a premium 3D mouse-tilt to the whole card and a
// gentle perpetual float to the two badges. The original Home leaves it off so its
// cards keep the simple lift-on-hover behaviour.
export default function ProgramCard({ program, interactive = false }) {
  const {
    accentColor,
    accentShadow,
    image,
    imageAlt,
    badge,
    iconPositionClass,
    logo,
    logoAlt,
    title,
    description,
    buttonText,
  } = program;

  const cardRef = useRef(null);

  const handleEnter = (e) => {
    e.currentTarget.style.boxShadow = `0 30px 60px ${accentShadow}`;
    if (interactive) e.currentTarget.style.transition = 'transform 0.12s ease-out, box-shadow 0.4s ease';
  };

  const handleMove = (e) => {
    if (!interactive) return;
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${px * 9}deg) rotateX(${-py * 9}deg) translateY(-8px)`;
  };

  const handleLeave = (e) => {
    e.currentTarget.style.boxShadow = '';
    if (interactive) {
      e.currentTarget.style.transition = 'transform 0.6s ease, box-shadow 0.4s ease';
      e.currentTarget.style.transform = '';
    }
  };

  return (
    <div
      ref={cardRef}
      className={`group relative rounded-2xl sm:rounded-[2rem] bg-slate-200 shadow-xl transition-all duration-500 interactive-el flex flex-col border border-slate-300 ${interactive ? '[transform-style:preserve-3d]' : 'hover:-translate-y-2'}`}
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="relative w-full h-28 sm:h-40 md:h-52 lg:h-60 overflow-hidden bg-slate-200 rounded-t-2xl sm:rounded-t-[2rem]">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-200 via-slate-200/20 to-transparent" />

        {/* Stat badge sits in one top corner (positionClass), the logo badge below sits in the opposite corner */}
        <div
          className={`absolute top-1 sm:top-3 ${badge.positionClass} text-white px-1 sm:px-5 py-0.5 sm:py-2.5 rounded-sm sm:rounded-xl shadow-lg transform ${badge.rotationClass} group-hover:rotate-0 transition-all duration-300 ${interactive ? 'float-badge-slow' : ''}`}
          style={{ backgroundColor: accentColor }}
        >
          <span className="block text-[8px] sm:text-xl md:text-2xl font-black mb-0 leading-none">{badge.value}</span>
          <span className="block text-[3.5px] sm:text-[8px] md:text-[9px] uppercase tracking-wider font-bold leading-tight">{badge.label}</span>
        </div>

        {/* Logo badge flush in its own top corner (iconPositionClass: left-4 or right-4), directly on the photo */}
        <div
          className={`absolute top-1.5 sm:top-3 ${iconPositionClass} w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white rounded-lg sm:rounded-2xl flex items-center justify-center shadow-lg border border-slate-50 overflow-hidden ${interactive ? 'float-badge' : 'transition-transform group-hover:-translate-y-2'}`}
        >
          <img src={logo} alt={logoAlt} className="w-full h-full object-contain p-1 sm:p-2" />
        </div>
      </div>

      <div className="relative bg-slate-200 rounded-b-2xl sm:rounded-b-[2rem] px-4 sm:px-6 md:px-7 pt-3 sm:pt-6 pb-3 sm:pb-7 flex flex-col flex-1">
        <h4 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-black mb-1.5 sm:mb-2 mt-0.5 sm:mt-1 sans-font" style={{ color: accentColor }}>
          {title}
        </h4>
        <p className={`text-[0.65rem] sm:text-sm md:text-base leading-relaxed font-medium mb-3 sm:mb-4 line-clamp-2 flex-1 ${interactive ? 'text-slate-900' : 'text-slate-500'}`}>{description}</p>

        <button
          className="accent-btn w-full bg-white border border-slate-200 text-slate-800 font-bold py-2 sm:py-3 rounded-lg sm:rounded-xl transition-all flex justify-center items-center gap-1.5 sm:gap-2 hover:text-white text-sm sm:text-base"
          style={{ '--btn-accent': accentColor }}
        >
          {buttonText}
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}
