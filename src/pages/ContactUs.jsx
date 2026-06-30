import { useState } from 'react';

import BannerBackground from '../components/BannerBackground';
import Reveal from '../components/Reveal';
import CountryPhoneInput from '../components/CountryPhoneInput';
import heroBanner from '../assets/banner  new.png';

// Purpose routing per the blueprint: each selection maps to the inbox that
// should receive the enquiry.
const PURPOSE_OPTIONS = [
  { value: 'fluency-bridge', label: 'Fluency Bridge Services', email: 'info@fluencybridge.co.nz' },
  { value: 'nz-academic-bridge', label: 'NZ Academic Bridge Services', email: 'info@nzacademicbridge.co.nz' },
  { value: 'both', label: 'Both Services', email: 'info@fluencybg.com' },
];

// Translucent inputs sit on the dark liquid-glass card, mirroring the About Us styling.
const inputClass =
  'w-full bg-white/10 border border-white/25 rounded-xl px-4 py-3 text-white placeholder-white/50 text-sm font-medium focus:outline-none focus:border-white/60 focus:ring-2 focus:ring-white/15 transition';

export default function ContactUs() {
  const [purpose, setPurpose] = useState('');

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
    <BannerBackground
      fixed
      image={heroBanner}
      ariaLabel="Climbers reaching the summit with the New Zealand flag"
      overlayClassName="bg-gradient-to-b from-slate-900/70 via-slate-900/55 to-slate-900/80"
      particleCount={52}
    >
      <main className="bright-banner-glass relative z-20 w-full">

        {/* ---------- Hero ---------- */}
        <header className="px-6 pt-28 pb-6 sm:pt-32 sm:pb-8">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-5">
            <span className="inline-flex items-center gap-2 text-[0.6rem] sm:text-xs font-bold uppercase tracking-[0.25em] text-white px-4 py-1.5 rounded-full" style={{ backgroundColor: 'var(--custom-blue)' }}>
              Contact Us
            </span>
            <h1 className="sans-font text-3xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight" style={{ textShadow: '0 4px 24px rgba(0,0,0,0.45)' }}>
              Let&apos;s Start the Conversation
            </h1>
            <p className="text-white/90 text-sm sm:text-base md:text-lg font-medium max-w-2xl leading-relaxed" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
              Tell us which service you&apos;re interested in and our team will be in touch.
            </p>
          </div>
        </header>

        {/* ---------- Contact section ---------- */}
        <section className="py-6 sm:py-9 pb-16 sm:pb-24">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
            {/* Form */}
            <Reveal className="reveal lg:col-span-3">
              <form onSubmit={handleSubmit} className="h-full liquid-glass rounded-3xl p-6 sm:p-9 flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="flex flex-col gap-1.5">
                    <span className="text-white/80 text-xs font-bold uppercase tracking-wider">Name</span>
                    <input name="name" type="text" required placeholder="Your full name" className={inputClass} />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-white/80 text-xs font-bold uppercase tracking-wider">Contact Number</span>
                    <CountryPhoneInput name="phone" defaultIso2="nz" variant="glass" />
                  </label>
                </div>

                <label className="flex flex-col gap-1.5">
                  <span className="text-white/80 text-xs font-bold uppercase tracking-wider">Email</span>
                  <input name="email" type="email" required placeholder="you@example.com" className={inputClass} />
                </label>

                <label className="flex flex-col gap-1.5">
                  <span className="text-white/80 text-xs font-bold uppercase tracking-wider">Service You Are Looking For</span>
                  <div className="relative">
                    <select
                      name="purpose"
                      required
                      value={purpose}
                      onChange={(e) => setPurpose(e.target.value)}
                      className={`${inputClass} appearance-none cursor-pointer pr-10 ${purpose === '' ? 'text-white/50' : ''}`}
                    >
                      <option value="" disabled className="text-slate-400">
                        Please select
                      </option>
                      {PURPOSE_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value} className="text-slate-900">
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <svg className="w-4 h-4 text-white/60 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </label>

                <label className="flex flex-col gap-1.5">
                  <span className="text-white/80 text-xs font-bold uppercase tracking-wider">Message</span>
                  <textarea name="message" rows={4} placeholder="How can we help?" className={`${inputClass} resize-none`} />
                </label>

                <button type="submit" className="mt-1 w-full text-white font-bold py-3 rounded-xl transition-all hover:opacity-90 flex justify-center items-center gap-2 interactive-el" style={{ backgroundColor: 'var(--custom-blue)' }}>
                  Send Enquiry
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </form>
            </Reveal>

            {/* Info + map */}
            <Reveal className="reveal lg:col-span-2 flex flex-col gap-6" delay={150}>
              <div className="liquid-glass rounded-3xl p-6 sm:p-7 flex flex-col gap-5">
                <h2 className="sans-font font-black text-lg sm:text-xl text-white">Start a Conversation</h2>

                <a href="https://wa.me/642108631134" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white font-bold text-sm hover:opacity-70 transition interactive-el">
                  <svg className="w-5 h-5 shrink-0" fill="#25D366" viewBox="0 0 24 24" aria-hidden="true"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.115zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                  +64 210 863 1134
                </a>

                <div className="h-px bg-white/15" />

                <p className="text-white/70 text-xs font-bold uppercase tracking-wider">If you&apos;re looking for</p>

                <ul className="flex flex-col gap-4">
                  {PURPOSE_OPTIONS.map((option) => (
                    <li key={option.email} className="flex flex-col gap-0.5">
                      <span className="text-white/55 text-[0.65rem] font-bold uppercase tracking-wider">{option.label}</span>
                      <a href={`mailto:${option.email}`} className="flex items-center gap-2 text-white/90 text-sm font-semibold hover:text-white transition interactive-el">
                        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        {option.email}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="liquid-glass rounded-3xl p-2 sm:p-3 overflow-hidden flex-1 flex min-h-[14rem]">
                <iframe
                  title="Fluency Bridge Global Limited location"
                  src="https://www.google.com/maps?q=Auckland,New+Zealand&output=embed"
                  className="w-full h-full rounded-2xl border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>
        </section>

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
