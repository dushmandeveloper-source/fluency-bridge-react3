import { useState } from 'react';

import BannerBackground from '../components/BannerBackground';

// Purpose routing per the blueprint: each selection maps to the inbox that
// should receive the enquiry.
const PURPOSE_OPTIONS = [
  { value: 'fluency-bridge', label: 'Fluency Bridge Services', email: 'info@fluencybridge.co.nz' },
  { value: 'nz-academic-bridge', label: 'NZ Academic Bridge Services', email: 'info@nzacademicbridge.co.nz' },
  { value: 'both', label: 'Both Services', email: 'info@fluencybg.com' },
];

const inputClass =
  'w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/60 text-sm font-medium backdrop-blur-md focus:outline-none focus:border-white/70 transition';

// Distinct from Home & About: a split layout — a glass enquiry form on the left,
// a contact-info panel on the right.
export default function ContactUs() {
  const [purpose, setPurpose] = useState(PURPOSE_OPTIONS[0].value);

  const selected = PURPOSE_OPTIONS.find((option) => option.value === purpose) ?? PURPOSE_OPTIONS[0];

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Website enquiry — ${selected.label}`);
    const body = encodeURIComponent(
      `Name: ${data.get('name') ?? ''}\n` +
        `Contact number: ${data.get('phone') ?? ''}\n` +
        `Email: ${data.get('email') ?? ''}\n` +
        `Purpose: ${selected.label}\n\n` +
        `${data.get('message') ?? ''}`
    );
    window.location.href = `mailto:${selected.email}?subject=${subject}&body=${body}`;
  };

  return (
    <BannerBackground>
      <main className="relative z-20 w-full min-h-screen px-6 py-32 sm:py-40">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-4 text-center mb-10 sm:mb-12">
          <span
            className="inline-flex items-center gap-2 text-[0.5rem] sm:text-[0.6rem] md:text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full"
            style={{ backgroundColor: 'var(--custom-blue)' }}
          >
            Contact Us
          </span>
          <h1 className="sans-font text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-black text-white leading-[1.3] tracking-tight">Let's Start the Conversation</h1>
          <p className="text-white/85 text-[0.65rem] sm:text-xs md:text-sm lg:text-base font-medium max-w-xl" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.35)' }}>
            Tell us which service you're interested in and our team will be in touch.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
          {/* Enquiry form */}
          <form onSubmit={handleSubmit} className="glass-panel lg:col-span-3 rounded-3xl px-6 sm:px-9 py-8 sm:py-10 flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1.5">
                <span className="text-white/90 text-xs font-bold uppercase tracking-wider">Name</span>
                <input name="name" type="text" required placeholder="Your full name" className={inputClass} />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-white/90 text-xs font-bold uppercase tracking-wider">Contact Number</span>
                <input name="phone" type="tel" placeholder="+64 ..." className={inputClass} />
              </label>
            </div>

            <label className="flex flex-col gap-1.5">
              <span className="text-white/90 text-xs font-bold uppercase tracking-wider">Email</span>
              <input name="email" type="email" required placeholder="you@example.com" className={inputClass} />
            </label>

            <fieldset className="flex flex-col gap-2">
              <legend className="text-white/90 text-xs font-bold uppercase tracking-wider mb-1.5">Purpose</legend>
              {PURPOSE_OPTIONS.map((option) => {
                const checked = purpose === option.value;
                return (
                  <label
                    key={option.value}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 border backdrop-blur-md cursor-pointer transition interactive-el ${
                      checked ? 'border-white/80 bg-white/25' : 'border-white/30 bg-white/10 hover:bg-white/15'
                    }`}
                  >
                    <input
                      type="radio"
                      name="purpose"
                      value={option.value}
                      checked={checked}
                      onChange={(event) => setPurpose(event.target.value)}
                      className="sr-only"
                    />
                    <span
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition ${
                        checked ? 'border-white' : 'border-white/50'
                      }`}
                    >
                      {checked && <span className="w-2 h-2 rounded-full bg-white" />}
                    </span>
                    <span className={`text-sm font-semibold ${checked ? 'text-white' : 'text-white/80'}`}>{option.label}</span>
                  </label>
                );
              })}
            </fieldset>

            <label className="flex flex-col gap-1.5">
              <span className="text-white/90 text-xs font-bold uppercase tracking-wider">Message</span>
              <textarea name="message" rows={4} placeholder="How can we help?" className={`${inputClass} resize-none`} />
            </label>

            <button
              type="submit"
              className="mt-2 w-full text-white font-bold py-3 rounded-xl transition-all hover:opacity-90 flex justify-center items-center gap-2 interactive-el"
              style={{ backgroundColor: 'var(--custom-blue)' }}
            >
              Send Enquiry
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>

          {/* Contact info panel */}
          <aside className="lg:col-span-2 flex flex-col gap-4">
            <div className="bg-white/15 border border-white/30 rounded-3xl px-6 py-7 backdrop-blur-md flex flex-col gap-5">
              <h2 className="sans-font font-black text-xs sm:text-base md:text-lg" style={{ color: 'var(--custom-green-light)' }}>
                Reach Us Directly
              </h2>

              <a
                href="https://wa.me/642108631134"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white font-bold text-sm hover:text-white/80 transition interactive-el"
              >
                <svg className="w-5 h-5 shrink-0" fill="#25D366" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.115zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                +64 210 863 1134
              </a>

              <div className="h-px bg-white/20" />

              <ul className="flex flex-col gap-4">
                {PURPOSE_OPTIONS.map((option) => (
                  <li key={option.email} className="flex flex-col gap-0.5">
                    <span className="text-white/60 text-[0.65rem] font-bold uppercase tracking-wider">{option.label}</span>
                    <a
                      href={`mailto:${option.email}`}
                      className="flex items-center gap-2 text-white text-sm font-semibold hover:text-white/80 transition interactive-el"
                    >
                      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      {option.email}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location map fills the remaining column height so its bottom edge
                lines up with the form for a neat, balanced layout. Swap the src
                query for the registered office address when available. */}
            <div className="bg-white/15 border border-white/30 rounded-3xl p-2 sm:p-3 overflow-hidden backdrop-blur-md flex-1 flex min-h-[14rem]">
              <iframe
                title="Fluency Bridge Global Limited location"
                src="https://www.google.com/maps?q=Auckland,New+Zealand&output=embed"
                className="w-full h-full rounded-2xl border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </aside>
        </div>
      </main>

      {/* Fades the banner image into the footer's colour so the seam isn't visible */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 sm:h-56 pointer-events-none z-10"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, rgba(0, 49, 133, 0.2) 50%, rgba(0, 49, 133, 0.55) 70%, rgba(0, 49, 133, 0.85) 88%, #002c78 100%)',
        }}
      />
    </BannerBackground>
  );
}
