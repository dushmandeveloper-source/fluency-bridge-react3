import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Team from './pages/Team';
import ContactUs from './pages/ContactUs';
import { useHashRoute } from './useHashRoute';

const PAGES = {
  home: Home,
  about: AboutUs,
  team: Team,
  contact: ContactUs,
};

export default function App() {
  const route = useHashRoute();
  const Page = PAGES[route] ?? Home;

  return (
    <div className="antialiased relative min-h-screen flex flex-col">
      <CustomCursor />
      <Navbar route={route} />

      <Page />

      <Footer />
    </div>
  );
}
