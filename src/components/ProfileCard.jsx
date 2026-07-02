import { useState } from 'react';

// Reusable team/advisor card, sized to mirror the home page program cards.
// `image` is optional — when absent a styled photo placeholder is shown so the
// layout is ready to drop real headshots into later.
// Clicking "View More" expands the card in place to reveal full details below
// the summary; "Show Less" collapses it back. No overlay/modal involved.
export default function ProfileCard({ name, role, image, pos, lines = [], background = [], quote, accent = 'var(--custom-blue)' }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`group liquid-glass relative rounded-2xl sm:rounded-[2rem] shadow-xl flex flex-col overflow-hidden transition-shadow duration-300 ease-out hover:shadow-2xl ${expanded ? '' : 'h-full'}`}>
      <div className="relative w-full h-40 sm:h-52 md:h-60 bg-white flex items-center justify-center overflow-hidden shrink-0">
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

      <div className={`px-3 sm:px-5 md:px-6 pt-2.5 sm:pt-5 pb-2.5 sm:pb-6 flex flex-col gap-1.5 ${expanded ? '' : 'flex-1'}`}>
        <div>
          <h4 className="sans-font text-xs sm:text-base md:text-lg font-black text-white leading-tight">{name}</h4>
          <p className="text-[0.5rem] sm:text-[0.6rem] md:text-[0.65rem] font-bold uppercase tracking-wider" style={{ color: accent }}>
            {role}
          </p>
        </div>

        {lines.length > 0 && (
          <ul className="text-white/80 text-[0.5rem] sm:text-[0.6rem] md:text-[0.65rem] font-medium leading-relaxed space-y-1 mt-0.5">
            {(expanded ? lines : lines.slice(0, 2)).map((line, idx) => (
              <li key={idx} className="flex gap-1.5">
                <span style={{ color: accent }}>•</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        )}

        {expanded && (
          <div className="flex flex-col gap-2.5 mt-1 pt-2.5 border-t border-white/10">
            {background.length > 0 && (
              <div>
                <p className="text-white/50 text-[0.5rem] sm:text-[0.6rem] font-bold uppercase tracking-wider mb-1">Professional Background</p>
                <ul className="text-white/85 text-[0.55rem] sm:text-[0.65rem] leading-relaxed space-y-1">
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
              <p className="text-white/85 text-[0.55rem] sm:text-[0.65rem] italic leading-relaxed border-l-2 pl-2.5" style={{ borderColor: accent }}>
                &ldquo;{quote}&rdquo;
              </p>
            )}
          </div>
        )}

        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className={`interactive-el mt-2 sm:mt-3 ${expanded ? '' : 'mt-auto'} inline-flex items-center justify-center gap-1.5 text-[0.6rem] sm:text-xs font-bold uppercase tracking-wider rounded-full py-2 sm:py-2.5 transition-all hover:gap-2.5`}
          style={{ color: accent, border: `1.5px solid ${accent}` }}
        >
          {expanded ? 'Show Less' : 'View More'}
          <svg
            className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-300"
            style={{ transform: expanded ? 'rotate(-90deg)' : 'rotate(90deg)' }}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
