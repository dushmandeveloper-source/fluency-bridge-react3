import ParticleField from './ParticleField';
import bannerImage from '../assets/banner.png';

// Shared banner backdrop used across every page: the same zooming hero photo,
// dark contrast overlay and sparkle particles. Sized to its own content height
// (not the viewport) so the image always stops exactly where the Footer begins.
export default function BannerBackground({ children, overlayClassName = 'bg-slate-900/65' }) {
  return (
    <div className="relative">
      <div
        role="img"
        aria-label="Climber reaching the summit with the New Zealand flag"
        className="absolute inset-0 w-full h-full bg-cover bg-center animate-bg-zoom opacity-90 z-0"
        style={{ backgroundImage: `url(${bannerImage})` }}
      />
      <div className={`absolute inset-0 z-0 ${overlayClassName}`} />
      <ParticleField />

      {children}
    </div>
  );
}
