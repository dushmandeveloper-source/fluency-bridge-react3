import ParticleField from './ParticleField';
import bannerImage from '../assets/banner.png';

// Shared banner backdrop used across every page: the same zooming hero photo,
// dark contrast overlay and sparkle particles.
//
// Default (absolute): the image is sized to the page's own content height and
// stops exactly where the Footer begins — ideal for pages that are roughly one
// screen tall.
//
// `fixed`: the image is pinned to the viewport and the content scrolls over it,
// so the photo always frames like the home page regardless of how tall the page
// is. Use this for long pages (e.g. the team grid) where an absolute, content-
// sized background would scale up and zoom past the home framing.
export default function BannerBackground({
  children,
  overlayClassName = 'bg-slate-900/65',
  fixed = false,
  image = bannerImage,
  ariaLabel = 'Climber reaching the summit with the New Zealand flag',
  particleCount,
  zoomOrigin = 'top center',
}) {
  const layer = fixed ? 'fixed' : 'absolute';

  return (
    <div className="relative">
      <div
        role="img"
        aria-label={ariaLabel}
        className={`${layer} inset-0 w-full h-full bg-cover animate-bg-zoom opacity-90 z-0`}
        style={{ backgroundImage: `url(${image})`, backgroundPosition: zoomOrigin, transformOrigin: zoomOrigin }}
      />
      <div className={`${layer} inset-0 z-0 ${overlayClassName}`} />
      <ParticleField count={particleCount} />

      {children}

      {/* Fades the banner image gradually into the footer's colour, light to dark in one continuous progression */}
      <div className="absolute inset-x-0 bottom-0 h-56 sm:h-72 pointer-events-none z-10">
        <div className="absolute inset-x-0 bottom-0 top-0" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 49, 133, 0.12) 100%)' }} />
        <div className="absolute inset-x-0 bottom-0 h-[80%]" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 49, 133, 0.28) 100%)' }} />
        <div className="absolute inset-x-0 bottom-0 h-[60%]" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 49, 133, 0.5) 100%)' }} />
        <div className="absolute inset-x-0 bottom-0 h-[38%]" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 49, 133, 0.75) 100%)' }} />
        <div className="absolute inset-x-0 bottom-0 h-[18%]" style={{ background: 'linear-gradient(to bottom, transparent 0%, #003185 100%)' }} />
      </div>
    </div>
  );
}
