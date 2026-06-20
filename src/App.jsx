import CustomCursor from './components/CustomCursor';
import ParticleField from './components/ParticleField';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="antialiased relative">
      <ParticleField />
      <CustomCursor />
      <Navbar />
      <Hero />
      <Programs />
      <Footer />
    </div>
  );
}
