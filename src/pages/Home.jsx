import BannerBackground from '../components/BannerBackground';
import Hero from '../components/Hero';
import Programs from '../components/Programs';

export default function Home() {
  return (
    <BannerBackground>
      <Hero />
      <Programs />
    </BannerBackground>
  );
}
