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
}) {
  const layer = fixed ? 'fixed' : 'absolute';

  return (
    <div className="relative">
      <div
        role="img"
        aria-label={ariaLabel}
        className={`${layer} inset-0 w-full h-full bg-cover bg-center animate-bg-zoom opacity-90 z-0`}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={`${layer} inset-0 z-0 ${overlayClassName}`} />
      <ParticleField count={particleCount} />

      {children}
    </div>
  );
}
