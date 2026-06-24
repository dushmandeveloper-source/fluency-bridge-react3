export default function ProgramCard({ program }) {
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

  return (
    <div
      className="group relative rounded-2xl sm:rounded-[2rem] bg-slate-200 shadow-xl transition-all duration-500 hover:-translate-y-2 interactive-el flex flex-col border border-slate-300"
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 30px 60px ${accentShadow}`)}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '')}
    >
      <div className="relative w-full h-24 sm:h-32 md:h-44 lg:h-48 overflow-hidden bg-slate-200 rounded-t-2xl sm:rounded-t-[2rem]">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-200 via-slate-200/20 to-transparent" />

        {/* Stat badge sits in one top corner (positionClass), the logo badge below sits in the opposite corner */}
        <div
          className={`absolute top-1.5 sm:top-3 ${badge.positionClass} text-white px-2.5 sm:px-5 py-1 sm:py-2.5 rounded-lg sm:rounded-xl shadow-lg transform ${badge.rotationClass} group-hover:rotate-0 transition-all duration-300`}
          style={{ backgroundColor: accentColor }}
        >
          <span className="block text-xs sm:text-lg md:text-xl font-black mb-0.5 leading-none">{badge.value}</span>
          <span className="block text-[6px] sm:text-[7px] md:text-[8px] uppercase tracking-wider font-bold leading-tight">{badge.label}</span>
        </div>

        {/* Logo badge flush in its own top corner (iconPositionClass: left-4 or right-4), directly on the photo */}
        <div
          className={`absolute top-1.5 sm:top-3 ${iconPositionClass} w-9 h-9 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white rounded-lg sm:rounded-2xl flex items-center justify-center shadow-lg border border-slate-50 transition-transform group-hover:-translate-y-2 overflow-hidden`}
        >
          <img src={logo} alt={logoAlt} className="w-full h-full object-contain p-1 sm:p-2" />
        </div>
      </div>

      <div className="relative bg-slate-200 rounded-b-2xl sm:rounded-b-[2rem] px-3 sm:px-5 md:px-6 pt-2.5 sm:pt-5 pb-2.5 sm:pb-6 flex flex-col flex-1">
        <h4 className="text-xs sm:text-base md:text-lg font-black mb-1 sm:mb-1.5 mt-0.5 sm:mt-1 sans-font" style={{ color: accentColor }}>
          {title}
        </h4>
        <p className="text-slate-500 text-[0.5rem] sm:text-[0.6rem] md:text-[0.65rem] leading-relaxed font-medium mb-2 sm:mb-3 line-clamp-2 flex-1">{description}</p>

        <button
          className="accent-btn w-full bg-white border border-slate-200 text-slate-800 font-bold py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl transition-all flex justify-center items-center gap-1.5 sm:gap-2 hover:text-white text-xs sm:text-sm"
          style={{ '--btn-accent': accentColor }}
        >
          {buttonText}
          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}
