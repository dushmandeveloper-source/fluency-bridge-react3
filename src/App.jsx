import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Footer from './components/Footer';
import ParticleField from './components/ParticleField';
import bannerImage from './assets/banner.png';

export default function App() {
  return (
    <div className="antialiased relative">
      {/* Page-wide fixed banner background, visible behind Hero and Programs until the opaque Footer covers it */}
      <div
        role="img"
        aria-label="Climber reaching the summit with the New Zealand flag"
        className="fixed inset-0 w-full h-full bg-cover bg-center animate-bg-zoom opacity-90 z-0"
        style={{ backgroundImage: `url(${bannerImage})` }}
      />
      {/* Dark overlay for text/card contrast against the background photo */}
      <div className="fixed inset-0 bg-slate-900/65 z-0" />
      {/* Sparkle particles, fixed full-page so they show across the whole background, not just the hero */}
      <ParticleField />

      <CustomCursor />
      <Navbar />
      <Hero />
      <Programs />
      <Footer />
    </div>
  );
}
