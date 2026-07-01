import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home2 from './pages/Home2';
import AboutUs from './pages/AboutUs';
import Team from './pages/Team';
import ContactUs from './pages/ContactUs';
import NZAcademicBridge from './pages/NZAcademicBridge';
import FluencyBridge from './pages/FluencyBridge';
import { useHashRoute } from './useHashRoute';

const PAGES = {
  home: Home2,
  about: AboutUs,
  team: Team,
  contact: ContactUs,
  'nz-academic-bridge': NZAcademicBridge,
  'fluency-bridge': FluencyBridge,
};

export default function App() {
  const route = useHashRoute();
  const Page = PAGES[route] ?? Home2;

  return (
    <div className="antialiased relative min-h-screen flex flex-col">
      <CustomCursor />
      <Navbar route={route} />

      <Page />

      <Footer />
    </div>
  );
}
