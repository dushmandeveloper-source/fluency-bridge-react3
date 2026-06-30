import BannerBackground from '../components/BannerBackground';
import Hero from '../components/Hero';
import Programs from '../components/Programs';
import StatsBar from '../components/StatsBar';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import PartnerInstitutions from '../components/PartnerInstitutions';
import CTABanner from '../components/CTABanner';

export default function Home() {
  return (
    <>
      <BannerBackground>
        <Hero />
        <Programs />
      </BannerBackground>

      <StatsBar />
      <WhyChooseUs />
      <Testimonials />
      <PartnerInstitutions />
      <CTABanner />
    </>
  );
}
