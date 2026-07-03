// Reusable team/advisor card. Name, role, and qualifications stay in the card body.
// On hover, only the quote (or professional background) fades in over the photo.
export default function ProfileCard({ name, role, image, pos, lines = [], background = [], quote, accent = 'var(--custom-blue)' }) {
  const hasHoverContent = background.length > 0 || Boolean(quote);

  const hoverContent = (
    <div className="flex flex-col gap-2.5">
      {background.length > 0 && (
        <div>
          <p className="text-white/50 text-[0.65rem] sm:text-xs font-bold uppercase tracking-wider mb-1">Professional Background</p>
          <ul className="text-white/85 text-[0.7rem] sm:text-sm leading-relaxed space-y-1">
            {background.map((line, idx) => (
              <li key={idx} className="flex gap-1.5">
                <span style={{ color: accent }}>•</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {quote && (
        <p className="text-white/85 text-[0.7rem] sm:text-sm italic leading-relaxed border-l-2 pl-2.5" style={{ borderColor: accent }}>
          &ldquo;{quote}&rdquo;
        </p>
      )}
    </div>
  );

  return (
    <div className="group liquid-glass relative rounded-2xl sm:rounded-[2rem] shadow-xl flex flex-col h-full overflow-hidden transition-shadow duration-300 ease-out hover:shadow-2xl">
      <div className="relative w-full aspect-[3/4] sm:h-52 sm:aspect-auto md:h-60 bg-white flex items-center justify-center overflow-hidden shrink-0">
        {image ? (
          <img
            src={image}
            alt={name}
            style={{ objectPosition: pos ?? '50% 12%' }}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${hasHoverContent ? 'group-hover:brightness-[0.4]' : ''}`}
          />
        ) : (
          <div className="flex flex-col items-center gap-1.5 text-white/50">
            <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z" />
            </svg>
            <span className="text-[0.5rem] sm:text-[0.6rem] font-bold uppercase tracking-widest">Photo</span>
          </div>
        )}

        <span className="absolute top-2 left-2 sm:top-3 sm:left-3 h-1 sm:h-1.5 w-8 sm:w-10 rounded-full z-10" style={{ backgroundColor: accent }} />

        {hasHoverContent && (
          <div className="absolute inset-0 z-[1] flex flex-col justify-end p-3 sm:p-4 bg-gradient-to-t from-slate-900/95 via-slate-900/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-y-auto">
            <div className="translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
              {hoverContent}
            </div>
          </div>
        )}
      </div>

      <div className="px-3 sm:px-5 md:px-6 pt-2.5 sm:pt-5 pb-2.5 sm:pb-6 flex flex-col gap-1.5 flex-1">
        <div>
          <h4 className="sans-font text-base sm:text-lg md:text-xl font-black text-white leading-tight">{name}</h4>
          <p className="text-[0.65rem] sm:text-xs md:text-sm font-bold uppercase tracking-wider" style={{ color: accent }}>
            {role}
          </p>
        </div>

        {lines.length > 0 && (
          <ul className="text-white/80 text-[0.55rem] sm:text-[0.65rem] md:text-[0.7rem] font-medium leading-relaxed space-y-1 mt-0.5">
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
