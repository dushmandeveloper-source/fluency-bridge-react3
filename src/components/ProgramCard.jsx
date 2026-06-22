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
      className="group relative rounded-[2rem] bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 interactive-el flex flex-col border border-slate-100"
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 30px 60px ${accentShadow}`)}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '')}
    >
      <div className="relative w-full h-36 sm:h-44 md:h-48 overflow-hidden bg-slate-50 rounded-t-[2rem]">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />

        {/* Stat badge sits in one top corner (positionClass), the logo badge below sits in the opposite corner */}
        <div
          className={`absolute top-6 ${badge.positionClass} text-white px-5 py-2.5 rounded-xl shadow-lg transform ${badge.rotationClass} group-hover:rotate-0 transition-all duration-300`}
          style={{ backgroundColor: accentColor }}
        >
          <span className="block text-2xl font-black mb-0.5 leading-none">{badge.value}</span>
          <span className="block text-[9px] uppercase tracking-wider font-bold leading-tight">{badge.label}</span>
        </div>

        {/* Logo badge flush in its own top corner (iconPositionClass: left-4 or right-4), directly on the photo */}
        <div
          className={`absolute top-3 ${iconPositionClass} w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-slate-50 transition-transform group-hover:-translate-y-2 overflow-hidden`}
        >
          <img src={logo} alt={logoAlt} className="w-full h-full object-contain p-2" />
        </div>
      </div>

      <div className="relative bg-white rounded-b-[2rem] px-4 sm:px-5 md:px-6 pt-5 pb-5 sm:pb-6 flex flex-col flex-1">
        <h4 className="text-base sm:text-lg font-black mb-1.5 mt-1 sans-font" style={{ color: accentColor }}>
          {title}
        </h4>
        <p className="text-slate-500 text-[0.55rem] sm:text-[0.65rem] leading-relaxed font-medium mb-3 line-clamp-2 flex-1">{description}</p>

        <button
          className="accent-btn w-full bg-slate-50 border border-slate-200 text-slate-800 font-bold py-2.5 rounded-xl transition-all flex justify-center items-center gap-2 hover:text-white text-sm"
          style={{ '--btn-accent': accentColor }}
        >
          {buttonText}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}
