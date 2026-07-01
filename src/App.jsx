import { lazy, Suspense } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home2 from './pages/Home2';
import { useHashRoute } from './useHashRoute';

// Home is loaded eagerly (default landing view); every other route is
// code-split so it only ships when the user navigates to it.
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Team = lazy(() => import('./pages/Team'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const NZAcademicBridge = lazy(() => import('./pages/NZAcademicBridge'));
const FluencyBridge = lazy(() => import('./pages/FluencyBridge'));

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

      <Suspense fallback={<div className="min-h-screen" />}>
        <Page />
      </Suspense>

      <Footer />
    </div>
  );
}
