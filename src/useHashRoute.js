import { useEffect, useState } from 'react';

// Minimal dependency-free hash router. Routes look like "#/about", "#/contact";
// anything else (including "#") resolves to home.
function currentRoute() {
  const hash = window.location.hash.replace(/^#\/?/, '');
  return hash || 'home';
}

export function useHashRoute() {
  const [route, setRoute] = useState(currentRoute);

  useEffect(() => {
    const onChange = () => {
      setRoute(currentRoute());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return route;
}
