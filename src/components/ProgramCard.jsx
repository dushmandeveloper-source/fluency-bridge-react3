export default function ProgramCard({ program }) {
  const {
    accentColor,
    accentShadow,
    floatClass,
    animationDelay,
    image,
    imageAlt,
    badge,
    icon,
    iconPositionClass,
    title,
    description,
    buttonText,
  } = program;

  return (
    <div
      className={`group relative rounded-[2rem] bg-white overflow-hidden shadow-xl ${floatClass} transition-all duration-500 hover:-translate-y-2 interactive-el flex flex-col h-[550px] border border-slate-100`}
      style={{ animationDelay }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 30px 60px ${accentShadow}`)}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '')}
    >
      <div className="relative h-[55%] w-full overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />

        <div
          className={`absolute top-6 ${badge.positionClass} text-white px-5 py-2.5 rounded-xl shadow-lg transform ${badge.rotationClass} group-hover:rotate-0 transition-all duration-300`}
          style={{ backgroundColor: accentColor }}
        >
          <span className="block text-2xl font-black mb-0.5 leading-none">{badge.value}</span>
          <span className="block text-[9px] uppercase tracking-wider font-bold leading-tight">{badge.label}</span>
        </div>
      </div>

      <div className="relative h-[45%] bg-white px-10 pb-10 flex flex-col justify-end">
        <div
          className={`absolute -top-10 ${iconPositionClass} w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-slate-50 transition-transform group-hover:-translate-y-2`}
          style={{ color: accentColor }}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {icon}
          </svg>
        </div>

        <h4 className="text-3xl font-black mb-3 sans-font" style={{ color: accentColor }}>
          {title}
        </h4>
        <p className="text-slate-500 text-sm leading-relaxed font-medium mb-6">{description}</p>

        <button
          className="accent-btn w-full bg-slate-50 border border-slate-200 text-slate-800 font-bold py-3.5 rounded-xl transition-all flex justify-center items-center gap-2 hover:text-white"
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
