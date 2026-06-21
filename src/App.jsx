import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="antialiased relative">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Programs />
      <Footer />
    </div>
  );
}
