import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Footer from './components/Footer';
import ParticleField from './components/ParticleField';
import bannerImage from './assets/banner.png';

export default function App() {
  return (
    <div className="antialiased relative min-h-screen flex flex-col">
      <CustomCursor />
      <Navbar />

      {/* Sized to Hero+Programs' own content height (not the viewport), so the banner stops exactly where Footer begins instead of being cut off by a fixed viewport-height background */}
      <div className="relative">
        <div
          role="img"
          aria-label="Climber reaching the summit with the New Zealand flag"
          className="absolute inset-0 w-full h-full bg-cover bg-center animate-bg-zoom opacity-90 z-0"
          style={{ backgroundImage: `url(${bannerImage})` }}
        />
        {/* Dark overlay for text/card contrast against the background photo */}
        <div className="absolute inset-0 bg-slate-900/65 z-0" />
        {/* Sparkle particles, scoped to this section so they show across the whole banner, not just the hero */}
        <ParticleField />

        <Hero />
        <Programs />
      </div>

      <Footer />
    </div>
  );
}
