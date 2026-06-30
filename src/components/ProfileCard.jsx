// Reusable team/advisor card, sized to mirror the home page program cards.
// `image` is optional — when absent a styled photo placeholder is shown so the
// layout is ready to drop real headshots into later.
export default function ProfileCard({ name, role, image, pos, lines = [], accent = 'var(--custom-blue)' }) {
  return (
    <div className="group liquid-glass relative rounded-2xl sm:rounded-[2rem] shadow-xl flex flex-col transition-all duration-500 hover:-translate-y-2">
      <div className="relative w-full h-40 sm:h-52 md:h-60 bg-white/10 flex items-center justify-center overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            style={{ objectPosition: pos ?? '50% top' }}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center gap-1.5 text-white/50">
            <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z" />
            </svg>
            <span className="text-[0.5rem] sm:text-[0.6rem] font-bold uppercase tracking-widest">Photo</span>
          </div>
        )}
        <span className="absolute top-2 left-2 sm:top-3 sm:left-3 h-1 sm:h-1.5 w-8 sm:w-10 rounded-full" style={{ backgroundColor: accent }} />
      </div>

      <div className="px-3 sm:px-5 md:px-6 pt-2.5 sm:pt-5 pb-2.5 sm:pb-6 flex flex-col gap-1.5 flex-1">
        <div>
          <h4 className="sans-font text-xs sm:text-base md:text-lg font-black text-white leading-tight">{name}</h4>
          <p className="text-[0.5rem] sm:text-[0.6rem] md:text-[0.65rem] font-bold uppercase tracking-wider" style={{ color: accent }}>
            {role}
          </p>
        </div>
        {lines.length > 0 && (
          <ul className="text-white/80 text-[0.5rem] sm:text-[0.6rem] md:text-[0.65rem] font-medium leading-relaxed space-y-1 mt-0.5">
            {lines.map((line, idx) => (
              <li key={idx} className="flex gap-1.5">
                <span style={{ color: accent }}>•</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
